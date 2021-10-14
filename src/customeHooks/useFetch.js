import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = ({ ...url }) => {
  const { url1, url2 } = url;
  console.log('Use Fetch URL', url1, 'URL2', url2);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (url1) {
        const data1 = await axios.get(url1);
        setUsersData(data1.data);
      }
      if (url2) {
        const data2 = await axios.get(url2);
        setUsersData(data2.data);
      }
      if (url1 && url2) {
        const data1 = await axios.get(url1);
        const data2 = await axios.get(url2);
        setUsersData(data1.data.concat(data2.data));
      }
    };
    fetchData();
  }, [url1, url2]);

  return usersData;
};

export default useFetch;
