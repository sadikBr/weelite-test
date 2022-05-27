import firstSectionImage from '../images/first-section/first-section-image.png';

const FirstSection = () => {
  return (
    <div className='max-w-7xl mx-auto flex justify-between mb-[100px]'>
      <div className='w-2/5 mr-8'>
        <h1 className='font-bold text-7xl leading-none mb-8'>
          Travel to your dream destination
        </h1>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa
          error! Magni mollitia sequi optio corporis aperiam illo eos sit velit
          cumque temporibus odio modi consequatur, distinctio praesentium! Ab,
          beatae!
        </p>
        <button className='text-white px-5 py-2 bg-black rounded font-bold'>
          Reserve Ticket
        </button>
      </div>
      <div className='w-2/4'>
        <img src={firstSectionImage} alt='banner' />
      </div>
    </div>
  );
};

export default FirstSection;
