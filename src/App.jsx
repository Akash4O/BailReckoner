// App.js

import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfileDetails from './components/ProfileDetails';
import ClientDetails from './components/ClientDetails';
import BailApplication from './components/BailApplicationForm1';
import CaseDetails from './components/CaseDetails';

const clientsData = [
  {
    id: 1,
    name: 'Ravi Kumar',
    age: 42,
    offense: 'Robbery',
    sentence: '5 years',
    firNumber: 'FIR/2022/456',
    court: 'Delhi High Court',
    dateOfArrest: '2023-01-15',
    prisonerId: 'PRISON12345',
    cases: [
      {
        id: 101,
        name: 'Case A',
        details: 'Details of Case A - Involves multiple robberies across the city.',
        charges: [
          'Section 395 of IPC - Dacoity',
          'Section 397 of IPC - Robbery with Attempt to Cause Death or Grievous Hurt',
        ],
      },
      {
        id: 102,
        name: 'Case B',
        details: 'Details of Case B - Connected to organized crime.',
        charges: [
          'Section 120B of IPC - Criminal Conspiracy',
          'Section 201 of IPC - Causing Disappearance of Evidence of Offence',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Anjali Singh',
    age: 30,
    offense: 'Fraud',
    sentence: '3 years',
    firNumber: 'FIR/2023/789',
    court: 'Mumbai Sessions Court',
    dateOfArrest: '2023-03-10',
    prisonerId: 'PRISON67890',
    cases: [
      {
        id: 103,
        name: 'Case C',
        details: 'Involves embezzlement of company funds.',
        charges: [
          'Section 420 of IPC - Cheating',
          'Section 406 of IPC - Criminal Breach of Trust',
        ],
      },
    ],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('Profile');
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);

  const onSelectClient = (clientId) => {
    const client = clientsData.find((c) => c.id === clientId);
    setSelectedClient(client);
    setSelectedCase(null); // Reset selected case when changing client
    setActiveSection('Client');
  };

  const onSelectCase = (caseId) => {
    if (selectedClient) {
      const selectedCase = selectedClient.cases.find((c) => c.id === caseId);
      setSelectedCase(selectedCase);
    }
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'Profile':
        return <ProfileDetails />;
      case 'BailApplication':
        return <BailApplication />;
      case 'Client':
        return (
          <div>
            <ClientDetails
              client={selectedClient}
              onSelectCase={onSelectCase}
            />
            {selectedCase && <CaseDetails caseData={selectedCase} />}
          </div>
        );
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="app">
      <Sidebar
        clientsData={clientsData}
        onSelectClient={onSelectClient}
        onSectionChange={setActiveSection}
      />
      <div className="main-content">
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;
