import eighthSectionImage from '../images/eighth-section/eighth-section-image.png';

const EighthSection = () => {
  return (
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
  );
};

export default EighthSection;
