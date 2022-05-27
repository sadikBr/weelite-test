import fifthSectionImage from '../images/fifth-section/fifth-section-image.png';

const FifthSection = () => {
  return (
    <div className='bg-black py-[80px] mb-[80px] flex gap-20 text-white'>
      <div className='ml-[200px] w-3/4'>
        <h1 className='font-bold text-7xl leading-none mb-[80px]'>
          Choose anywhere you'd like to be
        </h1>
        <div className='mb-8'>
          <h1 className='font-bold mb-2'>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quis
            aperiam explicabo dolorum suscipit magni veniam possimus sed quod
            vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam ad facere unde accusantium, expedita eveniet vel error
            facilis ipsam obcaecati?
          </p>
        </div>
        <div>
          <h1 className='font-bold mb-2'>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quis
            aperiam explicabo dolorum suscipit magni veniam possimus sed quod
            vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolorum, distinctio exercitationem quidem libero voluptatem commodi
            ea quae magni enim reprehenderit.
          </p>
        </div>
      </div>
      <img
        className='float-right w-11/12'
        src={fifthSectionImage}
        alt='fifth section banner'
      />
    </div>
  );
};

export default FifthSection;
