import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { shortcode } = useParams();
  const links = JSON.parse(localStorage.getItem('shortenedLinks')) || [];
  const match = links.find((l) => l.shortcode === shortcode);

  useEffect(() => {
    if (match) {
      const now = new Date();
      const expiry = new Date(match.expiresAt);
      if (expiry > now) window.location.href = match.originalURL;
    }
  }, [match]);

  return <div>{match ? 'Redirecting...' : 'Shortcode not found or expired'}</div>;
};

export default RedirectPage;
