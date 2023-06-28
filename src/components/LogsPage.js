import React from 'react';

const LogsPage = ({ shortenedLinks, deleteLink, handleClick }) => {
  // Check if shortenedLinks is undefined or null
  if (!shortenedLinks) {
    return null; // or render a loading indicator, an error message, or an empty state
  }

  return (
    <div>
    <h2 style={{ color: '#39FF14' }}>URL History</h2>
      <table>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f0f0f0' }}>Original URL</th>
            <th style={{ backgroundColor: '#f0f0f0' }}>Shortened URL</th>
            <th style={{ backgroundColor: '#f0f0f0' }}>Visits</th>
            <th style={{ backgroundColor: '#f0f0f0' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {shortenedLinks.map((link, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: '#ffffff' }}>{link.originalUrl}</td>
              <td style={{ backgroundColor: '#ffffff' }}>
                <a href={link.shortenedUrl} target="_blank" rel="noopener noreferrer">
                  {link.shortenedUrl}
                </a>
              </td>
              <td style={{ backgroundColor: '#ffffff' }}>{link.visits}</td>
              <td>
                <button style={{ backgroundColor: '#ff0000', color: '#ffffff' }} onClick={() => deleteLink(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
