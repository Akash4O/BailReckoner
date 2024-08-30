import React, { useState } from 'react';
import './BailApplicationForm1.css'; // Make sure you include the CSS file if it's separate

function BailApplicationForm() {
  const [applicant, setApplicant] = useState({
    name: '',
    fatherName: '',
    address: '',
    contactNumber: '',
    email: ''
  });

  const [offense, setOffense] = useState({
    firNumber: '',
    policeStation: '',
    dateOfArrest: '',
    ipcSections: ''
  });

  const [bail, setBail] = useState({
    bailType: '',
    hasUndergoneHalfSentence: false,
    hasOtherPendingCases: false,
    hasBeenGrantedBailBefore: false
  });

  const [surety, setSurety] = useState({
    name: '',
    address: '',
    contactNumber: '',
    relationship: ''
  });

  const handleInputChange = (event, setState) => {
    const { name, type, checked, value } = event.target;
    if (type === 'checkbox') {
      setState(prevState => ({ ...prevState, [name]: checked }));
    } else {
      setState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Bail Application Form Submitted:');
    console.log('Applicant:', applicant);
    console.log('Offense:', offense);
    console.log('Bail:', bail);
    console.log('Surety:', surety);
  };

  return (
    <div className="bail-application-form">
      <h2>Bail Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Section 1: Applicant Information */}
        <div className="section">
          <h3>Section 1: Applicant Information</h3>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={applicant.name} onChange={(event) => handleInputChange(event, setApplicant)} required />
          </div>
          <div className="form-group">
            <label>Father's Name:</label>
            <input type="text" name="fatherName" value={applicant.fatherName} onChange={(event) => handleInputChange(event, setApplicant)} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={applicant.address} onChange={(event) => handleInputChange(event, setApplicant)} required />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="text" name="contactNumber" value={applicant.contactNumber} onChange={(event) => handleInputChange(event, setApplicant)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={applicant.email} onChange={(event) => handleInputChange(event, setApplicant)} required />
          </div>
        </div>

        {/* Section 2: Offense Details */}
        <div className="section">
          <h3>Section 2: Offense Details</h3>
          <div className="form-group">
            <label>FIR Number:</label>
            <input type="text" name="firNumber" value={offense.firNumber} onChange={(event) => handleInputChange(event, setOffense)} required />
          </div>
          <div className="form-group">
            <label>Police Station:</label>
            <input type="text" name="policeStation" value={offense.policeStation} onChange={(event) => handleInputChange(event, setOffense)} required />
          </div>
          <div className="form-group">
            <label>Date of Arrest:</label>
            <input type="date" name="dateOfArrest" value={offense.dateOfArrest} onChange={(event) => handleInputChange(event, setOffense)} required />
          </div>
          <div className="form-group">
            <label>IPC Sections:</label>
            <input type="text" name="ipcSections" value={offense.ipcSections} onChange={(event) => handleInputChange(event, setOffense)} required />
          </div>
        </div>

        {/* Section 3: Bail Application */}
        <div className="section">
          <h2>Bail Application</h2>
          <fieldset>
            <legend>Bail Type</legend>
            <label htmlFor="bailable">
              <input
                type="radio"
                id="bailable"
                name="bailType"
                value="bailable"
                checked={bail.bailType === 'bailable'}
                onChange={(event) => handleInputChange(event,                setBail)}
              />
              Bailable
            </label><br />
            <label htmlFor="nonBailable">
              <input
                type="radio"
                id="nonBailable"
                name="bailType"
                value="nonBailable"
                checked={bail.bailType === 'nonBailable'}
                onChange={(event) => handleInputChange(event, setBail)}
              />
              Non-Bailable
            </label><br />
            <label htmlFor="anticipatoryBail">
              <input
                type="radio"
                id="anticipatoryBail"
                name="bailType"
                value="anticipatoryBail"
                checked={bail.bailType === 'anticipatoryBail'}
                onChange={(event) => handleInputChange(event, setBail)}
              />
              Anticipatory Bail
            </label><br />
          </fieldset>

          {/* Additional Bail-related Checkboxes */}
          <label htmlFor="hasUndergoneHalfSentence">
            <input
              type="checkbox"
              id="hasUndergoneHalfSentence"
              name="hasUndergoneHalfSentence"
              checked={bail.hasUndergoneHalfSentence}
              onChange={(event) => handleInputChange(event, setBail)}
            />
            Has Undergone Half Sentence
          </label><br />
          <label htmlFor="hasOtherPendingCases">
            <input
              type="checkbox"
              id="hasOtherPendingCases"
              name="hasOtherPendingCases"
              checked={bail.hasOtherPendingCases}
              onChange={(event) => handleInputChange(event, setBail)}
            />
            Has Other Pending Cases
          </label><br />
          <label htmlFor="hasBeenGrantedBailBefore">
            <input
              type="checkbox"
              id="hasBeenGrantedBailBefore"
              name="hasBeenGrantedBailBefore"
              checked={bail.hasBeenGrantedBailBefore}
              onChange={(event) => handleInputChange(event, setBail)}
            />
            Has Been Granted Bail Before
          </label><br />
          <label htmlFor="isNonBailable">
            <input
              type="checkbox"
              id="isNonBailable"
              name="isNonBailable"
              checked={bail.isNonBailable}
              onChange={(event) => handleInputChange(event, setBail)}
            />
            Is Non-Bailable Offense
          </label><br />
          <label htmlFor="isAnticipatoryBail">
            <input
              type="checkbox"
              id="isAnticipatoryBail"
              name="isAnticipatoryBail"
              checked={bail.isAnticipatoryBail}
              onChange={(event) => handleInputChange(event, setBail)}
            />
            Is Anticipatory Bail
          </label><br />
        </div>

        {/* Section 4: Surety Details */}
        <div className="section">
          <h2>Surety Details</h2>
          <label htmlFor="suretyName">Surety Name:</label>
          <input type="text" id="suretyName" name="suretyName" value={surety.name} onChange={(event) => handleInputChange(event, setSurety)} /><br /><br />
          <label htmlFor="suretyAddress">Surety Address:</label>
          <input type="text" id="suretyAddress" name="suretyAddress" value={surety.address} onChange={(event) => handleInputChange(event, setSurety)} /><br /><br />
          <label htmlFor="suretyContactNumber">Surety Contact Number:</label>
          <input type="text" id="suretyContactNumber" name="suretyContactNumber" value={surety.contactNumber} onChange={(event) => handleInputChange(event, setSurety)} /><br /><br />
          <label htmlFor="suretyRelationship">Surety Relationship:</label>
          <input type="text" id="suretyRelationship" name="suretyRelationship" value={surety.relationship} onChange={(event) => handleInputChange(event, setSurety)} /><br /><br />
        </div>

        {/* Section 6: Declaration */}
        <div className="section">
          <h3>Section 6: Declaration</h3>
          <p>I hereby declare that the information provided is true and accurate.</p>
          <p>I understand that the court or police officer may verify the information provided.</p>
        </div>

        {/* Section 7: Submission */}
        <div className="section">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default BailApplicationForm;