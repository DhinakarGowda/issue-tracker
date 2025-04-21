import React, { useState } from 'react';
import IssueList from './IssueList';
import './App.css'; // Import the CSS for styles

function App() {
  // State to manage issues
  const [issues, setIssues] = useState([
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
  ]);

  // State to manage form input
  const [newIssue, setNewIssue] = useState({
    title: '',
    description: '',
    status: 'open', // Default status is 'open'
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIssue({
      ...newIssue,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIssue.title && newIssue.description) {
      const newIssueObj = {
        id: Date.now(), // Unique ID based on timestamp
        ...newIssue,
      };
      setIssues((prevIssues) => [...prevIssues, newIssueObj]);
      setNewIssue({ title: '', description: '', status: 'open' }); // Reset form
    }
  };

  return (
    <div className="app-container">
      <h1>Issue Tracker</h1>

      {/* Form to add new issue */}
      <form onSubmit={handleSubmit} className="issue-form">
        <input
          type="text"
          name="title"
          value={newIssue.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={newIssue.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        ></textarea>
        <select
          name="status"
          value={newIssue.status}
          onChange={handleInputChange}
        >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <button type="submit">Add Issue</button>
      </form>

      {/* Display issues */}
      <IssueList issues={issues} />
    </div>
  );
}

export default App;
