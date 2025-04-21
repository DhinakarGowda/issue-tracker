import React from 'react';

function IssueItem({ issue }) {
  const { title, description, status } = issue;

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      margin: '10px 0', 
      padding: '10px',
      backgroundColor: status === 'open' ? '#fff3cd' : '#d4edda' 
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default IssueItem;
