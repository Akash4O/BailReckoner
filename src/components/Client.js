import React from 'react';
import './ClientDetails.css';

const ClientDetails = ({ client, onSelectClient }) => {
  return (
    <div className="client-details">
      {!client ? (
        <div>
          <h3>Select a client to view details</h3>
          {/* Display a list of clients if no client is selected */}
          {clientsData.map((client) => (
            <button
              key={client.id}
              onClick={() => onSelectClient(client.id)}
              className="client-button"
            >
              {client.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>Client Details</h3>
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Age:</strong> {client.age}</p>
          <p><strong>Offense:</strong> {client.offense}</p>
          <p><strong>Sentence:</strong> {client.sentence}</p>
          <p><strong>FIR Number:</strong> {client.firNumber}</p>
          <p><strong>Court:</strong> {client.court}</p>
          <p><strong>Date of Arrest:</strong> {client.dateOfArrest}</p>
          <p><strong>Prisoner ID:</strong> {client.prisonerId}</p>
          
          {/* Display buttons for each case */}
          {client.cases.length > 0 && (
            <div className="case-selection">
              <h4>Select a Case:</h4>
              {client.cases.map((caseItem) => (
                <button
                  key={caseItem.id}
                  onClick={() => onSelectCase(caseItem.id)}
                  className="case-button"
                >
                  {caseItem.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ClientDetails;
