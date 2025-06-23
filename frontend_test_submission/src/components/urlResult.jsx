import React from 'react';

const URLResult = ({ links }) => (
  <div className="mt-4">
    <h3>Shortened URLs</h3>
    {links.map((link, index) => (
      <div key={index}>
        <p>
          <strong>Original:</strong> {link.originalURL}<br />
          <strong>Short:</strong> http://localhost:3000/{link.shortcode}<br />
          <strong>Expires At:</strong> {new Date(link.expiresAt).toLocaleString()}
        </p>
      </div>
    ))}
  </div>
);

export default URLResult;