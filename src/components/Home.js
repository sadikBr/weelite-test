import { useEffect, useState } from 'react';
import axios from 'axios';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import firstSectionImage from '../images/first-section/first-section-image.png';

import secondSectionImage1 from '../images/second-section/second-section-image-1.png';
import secondSectionImage2 from '../images/second-section/second-section-image-2.png';
import secondSectionImage3 from '../images/second-section/second-section-image-3.png';
import secondSectionScratch1 from '../images/second-section/second-section-scratches-1.png';
import secondSectionScratch2 from '../images/second-section/second-section-scratches-2.png';
import secondSectionScratch3 from '../images/second-section/second-section-scratches-3.png';
import secondSectionScratch4 from '../images/second-section/second-section-scratches-4.png';

import airplaneImage from '../images/third-section/third-section-airplane-icon.png';

import fourthSectionImage1 from '../images/fourth-section/fourth-section-image.png';
import fourthSectionImage2 from '../images/fourth-section/fourth-section-image-2.png';
import arrowImage from '../images/fourth-section/arrow.png';

import fifthSectionImage from '../images/fifth-section/fifth-section-image.png';

import sixthSectionImage from '../images/sixth-section/sixth-section-image.png';

import eighthSectionImage from '../images/eighth-section/eighth-section-image.png';

const secondSectionImages = [
  secondSectionImage1,
  secondSectionImage2,
  secondSectionImage3,
];

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const users = res.data;

      setUsers(users);
      localStorage.setItem('users', JSON.stringify(users));
    });
  }, []);

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between mb-[100px]'>
        <div className='w-2/5 mr-8'>
          <h1 className='font-bold text-7xl leading-none mb-8'>
            Travel to your dream destination
          </h1>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            culpa error! Magni mollitia sequi optio corporis aperiam illo eos
            sit velit cumque temporibus odio modi consequatur, distinctio
            praesentium! Ab, beatae!
          </p>
          <button className='text-white px-5 py-2 bg-black rounded font-bold'>
            Reserve Ticket
          </button>
        </div>
        <div className='w-2/4'>
          <img src={firstSectionImage} alt='banner' />
        </div>
      </div>

      <div className='bg-black flex space-x-4 mb-[100px]'>
        <div>
          <img
            className='rotate-25'
            src={secondSectionScratch1}
            alt='second section scratches'
          />
        </div>
        <div className='text-white flex flex-1 max-w-4xl py-[30px] flex-col items-center text-center'>
          <h1 className='font-bold text-5xl leading-none mb-8'>
            Create a memory to remember
          </h1>
          <div className='mb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            ipsa doloremque ut illum sint amet asperiores nam ab qui. Atque.
          </div>
          <button className='border border-2 border-white px-8 py-2 rounded font-bold'>
            My Travel Logs
          </button>
        </div>
        <div>
          <img
            className='rotate-[200deg] mt-[120px] ml-8'
            src={secondSectionScratch2}
            alt='second section scratches'
          />
        </div>
      </div>

      <div className='flex gap-20 w-7xl mx-auto justify-center mb-[250px]'>
        {secondSectionImages.map((image, index) => {
          return (
            <div className='w-1/5' key={index}>
              <img className='mb-8' src={image} alt='card banner' />
              <div className='relative'>
                <div className='absolute w-1/5 h-1 bg-black'></div>
                <h1 className='font-bold leading-none w-3/4 pt-4 text-3xl mb-4'>
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                perferendis consequuntur obcaecati libero cumque possimus
                consequatur ab voluptas facilis? Magnam?
              </p>
            </div>
          );
        })}
      </div>

      <div className='mb-8'>
        <div className='flex flex-col w-100 items-center justify-center mb-[150px]'>
          <img className='w-20 mb-8' src={airplaneImage} alt='airplane icon' />
          <h1 className='font-bold text-7xl w-2/4 leading-none text-center mb-8'>
            See place you've <span className='underline'>never</span> been
            before
          </h1>
          <h4 className='font-bold'>
            Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor
          </h4>
        </div>
        <div className='flex max-w-7xl mx-auto gap-8'>
          <div className='realative w-11/12'>
            <img src={fourthSectionImage1} alt='fourth section big banner' />
          </div>
          <div>
            <img
              className='mb-[50px] w-1/2'
              src={fourthSectionImage2}
              alt='fourth section small banner'
            />
            <div className='flex mb-8'>
              <h1 className='font-bold text-3xl w-5/6 leading-none underline mr-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <div className='text-sm'>
                <p className='mb-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti eveniet sunt maxime temporibus aut quo facilis facere
                  distinctio, iure explicabo?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti eveniet sunt maxime temporibus aut quo facilis facere
                  distinctio, iure explicabo?
                </p>
              </div>
            </div>
            <div className='float-right w-10'>
              <img src={arrowImage} alt='arrow icon' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black py-[80px] mb-[80px] flex gap-20 text-white'>
        <div className='ml-[200px] w-3/4'>
          <h1 className='font-bold text-7xl leading-none mb-[80px]'>
            Choose anywhere you'd like to be
          </h1>
          <div className='mb-8'>
            <h1 className='font-bold mb-2'>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quis aperiam explicabo dolorum suscipit magni veniam possimus sed
              quod vitae. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam ad facere unde accusantium, expedita eveniet vel
              error facilis ipsam obcaecati?
            </p>
          </div>
          <div>
            <h1 className='font-bold mb-2'>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quis aperiam explicabo dolorum suscipit magni veniam possimus sed
              quod vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolorum, distinctio exercitationem quidem libero voluptatem
              commodi ea quae magni enim reprehenderit.
            </p>
          </div>
        </div>
        <img
          className='float-right w-11/12'
          src={fifthSectionImage}
          alt='fifth section banner'
        />
      </div>

      <div className='max-w-7xl mx-auto mb-[150px] flex gap-20'>
        <div className='w-3/4'>
          <h1 className='font-bold text-7xl leading-none mb-[50px]'>
            Lorem ipsum dolor sit amet consectetur
          </h1>

          <div className='flex justify-between items-center px-8 py-4 border border-2 border-black border-l-0 border-r-0 border-b-0'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='font-bold'>+</div>
          </div>
          <div className='flex justify-between items-center px-8 py-4 border border-2 border-black border-l-0 border-r-0  border-b-0'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='font-bold'>+</div>
          </div>
          <div className='flex justify-between items-center px-8 py-4 border border-2 border-black border-l-0 border-r-0  border-b-0'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='font-bold'>+</div>
          </div>
          <div className='flex justify-between items-center px-8 py-4 border border-2 border-black border-l-0 border-r-0'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='font-bold'>+</div>
          </div>
        </div>
        <img
          className='w-1/4'
          src={sixthSectionImage}
          alt='sixth section banner'
        />
      </div>

      <div className='max-w-7xl mx-auto flex flex-col items-center justify-center mb-[80px]'>
        <h1 className='font-bold text-7xl w-1/2 leading-none mb-[50px] text-center'>
          Here's what they have to say ...
        </h1>
        <Splide
          className='px-[50px] max-w-7xl'
          options={{ perPage: 3, gap: '3rem' }}
          aria-label='Users'
        >
          {users.map((user) => {
            return (
              <SplideSlide
                className='p-8 flex items-center justify-center flex-col border border-2 border-black rounded'
                key={user.name}
              >
                <img
                  className='w-1/2 mb-4 rounded-full'
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                  alt='user profile'
                />
                <h1 className='font-bold text-2xl mb-2'>{user.name}</h1>
                <p>{user.email}</p>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>

      <div className='max-w-7xl mx-auto flex gap-20 mb-[80px]'>
        <div className='w-3/5'>
          <h1 className='font-bold text-7xl mb-[50px] leading-none'>
            Be Updated!
          </h1>
          <form className='flex flex-col'>
            <input
              className='mb-4 border border-2 border-black rounded px-4 py-2 bg-transparent outline-none'
              type='text'
              placeholder='First Name*'
            />
            <input
              className='mb-4 border border-2 border-black rounded px-4 py-2 bg-transparent outline-none'
              type='text'
              placeholder='Last Name*'
            />
            <input
              className='mb-4 border border-2 border-black rounded px-4 py-2 bg-transparent outline-none'
              type='text'
              placeholder='Email Subject*'
            />
            <textarea
              className='border border-2 border-black rounded px-4 py-2 mb-8 bg-transparent outline-none'
              placeholder='Write something here'
              cols='30'
              rows='10'
            ></textarea>

            <input
              className='bg-black text-white p-4 rounded'
              type='submit'
              value='Submit Email'
            />
          </form>
        </div>
        <img
          className='w-3/5'
          src={eighthSectionImage}
          alt='eighth section banner'
        />
      </div>

      <div className='bg-dark-clr'>
        <div className='max-w-7xl mx-auto flex py-[50px]'>
          <h1 className='w-3/12 font-bold text-5xl leading-none text-left'>
            My Log Travels
          </h1>
          <div className='w-9/12'>
            <h1 className='font-bold mb-8'>Quick Links</h1>
            <div className='mb-[50px]'>
              <div className='flex mb-4'>
                <a className='w-1/4' href='#'>
                  Home
                </a>
                <a className='w-1/4' href='#'>
                  Travels
                </a>
                <a className='w-1/4' href='#'>
                  Recommendations
                </a>
                <a className='w-1/4' href='#'>
                  Mission Statement
                </a>
              </div>
              <div className='flex mb-4'>
                <a className='w-1/4' href='#'>
                  About Us
                </a>
                <a className='w-1/4' href='#'>
                  Promo Flights
                </a>
                <a className='w-1/4' href='#'>
                  Guides
                </a>
                <a className='w-1/4' href='#'>
                  The Team
                </a>
              </div>
              <div className='flex mb-4'>
                <a className='w-1/4' href='#'>
                  My Travel Logs
                </a>
                <a className='w-1/4' href='#'>
                  Travel Routes
                </a>
                <a className='w-1/4' href='#'>
                  Blogs
                </a>
                <a className='w-1/4' href='#'>
                  Contact Us
                </a>
              </div>
            </div>
            <p className='ml-8'>
              2021-2022 My Log Travels. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
