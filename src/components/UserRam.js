import React from 'react';

import useFetch from '../customeHooks/useFetch';
import TableContainerComponent from '../resuableComponents/TableContainerComponent';

const UserRam = () => {
  const url1 = 'http://localhost:5000/api/ram';
  const usersData = useFetch({ url1 });

  return <TableContainerComponent usersData={usersData} url={url1} />;
};

export default UserRam;
