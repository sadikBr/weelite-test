import sixthSectionImage from '../images/sixth-section/sixth-section-image.png';

const SixthSection = () => {
  return (
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
  );
};

export default SixthSection;
