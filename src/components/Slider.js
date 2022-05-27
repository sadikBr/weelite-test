import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slider = ({ users }) => {
  return (
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
  );
};

export default Slider;
