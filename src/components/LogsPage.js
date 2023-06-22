import React from 'react';

const LogsPage = ({ shortenedLinks, deleteLink, handleClick }) => {
  return (
    <div>
      <h2>URL History</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Shortened URL</th>
            <th>Visits</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shortenedLinks.map((link, index) => (
            <tr key={index}>
              <td>{link.originalUrl}</td>
              <td>
                <a href={link.shortenedUrl} target="_blank" rel="noopener noreferrer">
                  {link.shortenedUrl}
                </a>
              </td>
              <td>{link.visits}</td>
              <td>
                <button onClick={() => deleteLink(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
