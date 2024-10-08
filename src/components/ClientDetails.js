import React, { useState } from 'react';
import './ClientDetails.css';

const ClientDetails = ({ client }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  if (!client) {
    return <div>Select a client to view details.</div>;
  }

  const handleCaseSelect = (caseId) => {
    const caseDetail = client.cases.find(c => c.id === caseId);
    setSelectedCase(caseDetail);
  };

  return (
    <div className="client-details">
      <h2>Client Details</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Age:</strong> {client.age}</p>
      <p><strong>Offense:</strong> {client.offense}</p>
      <p><strong>Sentence:</strong> {client.sentence}</p>
      <p><strong>FIR Number:</strong> {client.firNumber}</p>
      <p><strong>Court:</strong> {client.court}</p>
      <p><strong>Date of Arrest:</strong> {client.dateOfArrest}</p>
      <p><strong>Prisoner ID:</strong> {client.prisonerId}</p>

      <h3>Cases</h3>
      <div className="case-buttons">
        {client.cases.map((caseItem) => (
          <button
            key={caseItem.id}
            onClick={() => handleCaseSelect(caseItem.id)}
          >
            {caseItem.name}
          </button>
        ))}
      </div>

      {selectedCase && (
        <div className="case-details">
          <h3>Case Details</h3>
          <p><strong>Name:</strong> {selectedCase.name}</p>
          <p><strong>Details:</strong> {selectedCase.details}</p>
          {selectedCase.charges && (
            <div>
              <h4>Charges:</h4>
              <ul>
                {selectedCase.charges.map((charge, index) => (
                  <li key={index}>{charge}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientDetails;
