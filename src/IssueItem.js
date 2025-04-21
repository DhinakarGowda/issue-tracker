import React from 'react';

function IssueItem({ issue }) {
  const { id, title, description, status } = issue;
  const issueClass = status === 'open' ? 'open' : 'closed';

  return (
    <div className={`issue-item ${issueClass}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="status">Status: {status}</p>
    </div>
  );
}

export default IssueItem;
