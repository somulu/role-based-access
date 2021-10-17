import React from 'react';

import useFetch from '../customeHooks/useFetch';
import TableContainerComponent from '../resuableComponents/TableContainerComponent';

const UserShayam = () => {
  const url2 = 'http://localhost:5000/api/shyam';
  const usersData = useFetch({ url2 });

  return <TableContainerComponent usersData={usersData} url={url2} />;
};

export default UserShayam;
