// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ clientsData, onSelectClient, onSectionChange }) => {
  const [showClientSection, setShowClientSection] = useState(false);

  const handleClientToggle = () => {
    setShowClientSection(!showClientSection);
  };

  return (
    <div className="sidebar">
      <button onClick={() => onSectionChange('Profile')}>Profile</button>
      <button onClick={() => onSectionChange('BailApplication')}>Bail Application</button>
      
      <button className="client-toggle" onClick={handleClientToggle}>
        {showClientSection ? 'Hide Clients' : 'Show Clients'}
      </button>
      
      {showClientSection && (
        <div className="client-section">
          {clientsData && clientsData.length > 0 ? (
            clientsData.map((client) => (
              <button
                key={client.id}
                className="client-item"
                onClick={() => onSelectClient(client.id)}
              >
                {client.name}
              </button>
            ))
          ) : (
            <p>No clients available</p>
          )}
        </div>
      )}
      
      <button className="logout-button" onClick={() => alert('Logging out...')}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
