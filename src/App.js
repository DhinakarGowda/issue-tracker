import React from 'react';
import IssueList from './IssueList';

function App() {
  const issues = [
    {
      id: 1,
      title: 'Login not working',
      description: 'Users can’t log in after the latest update.',
      status: 'open',
    },
    {
      id: 2,
      title: 'Page crash on submit',
      description: 'Form submission crashes the page.',
      status: 'closed',
    },
    {
      id: 3,
      title: 'Spelling mistake on homepage',
      description: 'There’s a typo in the header banner.',
      status: 'open',
    },
  ];

  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueList issues={issues} />
    </div>
  );
}

export default App;
