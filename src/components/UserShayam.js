import React from 'react';

import useFetch from '../customeHooks/useFetch';
import TableContainerComponent from '../resuableComponents/TableContainerComponent';

const UserRam = () => {
  const url2 = 'http://localhost:5000/shyam_user';
  const usersData = useFetch({ url2 });

  return <TableContainerComponent usersData={usersData} url={url2} />;
};

export default UserRam;
