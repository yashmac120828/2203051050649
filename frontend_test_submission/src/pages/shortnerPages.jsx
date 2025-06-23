import React, { useState } from 'react';
import URLForm from '../components/urlForm';
import URLResult from '../components/urlResult';
import logEvent from '../middleware/logger';

const ShortenerPage = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleShorten = (urls) => {
    const results = urls.map((entry) => {
      const shortcode = entry.shortcode || Math.random().toString(36).substring(2, 7);
      const expiresAt = new Date(Date.now() + (entry.validity || 30) * 60000);
      const newLink = {
        originalURL: entry.url,
        shortcode,
        expiresAt: expiresAt.toISOString(),
      };
      logEvent('SHORTEN', JSON.stringify(newLink));
      return newLink;
    });

    setShortenedLinks(results);
    localStorage.setItem('shortenedLinks', JSON.stringify(results));
  };

  return (
    <div className="p-4">
      <h2>URL Shortener</h2>
      <URLForm onShorten={handleShorten} />
      <URLResult links={shortenedLinks} />
    </div>
  );
};

export default ShortenerPage;