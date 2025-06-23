import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { isValidURL } from '../utils/validator';

const URLForm = ({ onShorten }) => {
  const [entries, setEntries] = useState([{ url: '', validity: '', shortcode: '' }]);

  const handleChange = (i, field, value) => {
    const newEntries = [...entries];
    newEntries[i][field] = value;
    setEntries(newEntries);
  };

  const handleAdd = () => {
    if (entries.length < 5) setEntries([...entries, { url: '', validity: '', shortcode: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = entries.every((e) => isValidURL(e.url));
    if (valid) {
      onShorten(entries);
    } else {
      alert('Invalid URL format');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {entries.map((entry, i) => (
        <Box key={i} mb={2}>
          <TextField
            label="Original URL"
            value={entry.url}
            onChange={(e) => handleChange(i, 'url', e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Validity (minutes)"
            value={entry.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
            type="number"
            fullWidth
            sx={{ mt: 1 }}
          />
          <TextField
            label="Preferred Shortcode"
            value={entry.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          />
        </Box>
      ))}
      <Button onClick={handleAdd} disabled={entries.length >= 5}>Add Another</Button>
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>Shorten</Button>
    </form>
  );
};

export default URLForm;