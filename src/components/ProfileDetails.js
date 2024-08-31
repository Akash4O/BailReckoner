// ProfileDetails.js
import React from 'react';
import './ProfileDetails.css'; // Import the CSS file for styling

// ProfileDetails component
const ProfileDetails = () => {
  // Hardcoded details for the legal adversary
  const legalAdversary = {
    name: 'John Doe',
    designation: 'Advocate',
    phone: '+91-123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Legal Street, Suite 456, Law City, India',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image URL
    achievements: [
      'Best Legal Advisor Award 2023',
      'Published Author on Criminal Law',
      'Top 10 Legal Experts in India'
    ],
    education: [
      'LL.B from National Law University, Delhi',
      'Master of Laws (LL.M) in Criminal Justice from Harvard Law School'
    ],
    experience: [
      'Senior Legal Advisor at XYZ Law Firm (2015 - Present)',
      'Associate Lawyer at ABC Law Associates (2010 - 2015)'
    ]
  };

  return (
    <div className="profile-details">
      <div className="profile-header">
        
        <div className="profile-info">
          <h2>Profile Info</h2>
          <p><strong>Name:</strong> {legalAdversary.name}</p>
          <p><strong>Designation:</strong> {legalAdversary.designation}</p>
          <p><strong>Phone:</strong> {legalAdversary.phone}</p>
          <p><strong>Email:</strong> {legalAdversary.email}</p>
          <p><strong>Address:</strong> {legalAdversary.address}</p>
        </div>
      </div>
      <div className="profile-achievements">
        <h3>Achievements</h3>
        <ul>
          {legalAdversary.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className="profile-education">
        <h3>Education</h3>
        <ul>
          {legalAdversary.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
      <div className="profile-experience">
        <h3>Experience</h3>
        <ul>
          {legalAdversary.experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
