import React from 'react';
import IssueItem from './IssueItem';

function IssueList({ issues }) {
  return (
    <div className="issue-list-container">
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueList;
