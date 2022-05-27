import { useEffect, useState } from 'react';
import axios from 'axios';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import Slider from './Slider';
import EighthSection from './EighthSection';
import LastSection from './LastSection';

import '@splidejs/react-splide/css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) return setUsers(JSON.parse(storedUsers));

    axios.get(API_URL).then((res) => {
      const users = res.data;

      setUsers(users);
      localStorage.setItem('users', JSON.stringify(users));
    });
  }, []);

  return (
    <>
      <FirstSection />
      <SecondSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Slider users={users} />
      <EighthSection />
      <LastSection />
    </>
  );
}

export default Home;
