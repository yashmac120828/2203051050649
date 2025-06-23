import React from 'react';
import StatisticsTable from '../components/statsticsTable';

const StatisticsPage = () => {
  const links = JSON.parse(localStorage.getItem('shortenedLinks')) || [];
  return (
    <div className="p-4">
      <h2>Shortened URL Statistics</h2>
      <StatisticsTable links={links} />
    </div>
  );
};

export default StatisticsPage;