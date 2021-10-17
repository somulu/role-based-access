import React from 'react';
import useFetch from '../customeHooks/useFetch';
import TableContainerComponent from '../resuableComponents/TableContainerComponent';

const Admindashboard = () => {
  const usersData = useFetch({
    url1: 'http://localhost:5000/api/ram',
    url2: 'http://localhost:5000/api/shyam',
  });

  return <TableContainerComponent usersData={usersData} />;
};

export default Admindashboard;
