// CaseList.js
import React from 'react';

// CaseList component
const CaseList = ({ cases, onSelectCase }) => {
  return (
    <div>
      <h3>Cases</h3>
      {cases.map(c => (
        <button key={c.id} onClick={() => onSelectCase(c)}>
          {c.name}
        </button>
      ))}
    </div>
  );
};

export default CaseList;
