// CaseDetails.js

import React from 'react';
import './CaseDetails.css';

const CaseDetails = ({ caseData }) => {
  if (!caseData) return null;

  return (
    <div className="case-details">
      <h2>{caseData.name}</h2>
      <p><strong>Details:</strong> {caseData.details}</p>
      <h3>Charges</h3>
      <ul>
        {caseData.charges.map((charge, index) => (
          <li key={index}>{charge}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaseDetails;
