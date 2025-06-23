import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const StatisticsTable = ({ links }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Shortcode</TableCell>
        <TableCell>Original URL</TableCell>
        <TableCell>Expiry</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {links.map((link, index) => (
        <TableRow key={index}>
          <TableCell>{link.shortcode}</TableCell>
          <TableCell>{link.originalURL}</TableCell>
          <TableCell>{new Date(link.expiresAt).toLocaleString()}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default StatisticsTable;
