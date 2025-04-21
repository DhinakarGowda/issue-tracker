import React from 'react';
import IssueItem from './IssueItem';

function IssueList({ issues }) {
  return (
    <div>
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueList;
