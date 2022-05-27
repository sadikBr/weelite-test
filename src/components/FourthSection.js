import airplaneImage from '../images/third-section/third-section-airplane-icon.png';

import fourthSectionImage1 from '../images/fourth-section/fourth-section-image.png';
import fourthSectionImage2 from '../images/fourth-section/fourth-section-image-2.png';
import arrowImage from '../images/fourth-section/arrow.png';

const FourthSection = () => {
  return (
    <div className='mb-8'>
      <div className='flex flex-col w-100 items-center justify-center mb-[150px]'>
        <img className='w-20 mb-8' src={airplaneImage} alt='airplane icon' />
        <h1 className='font-bold text-7xl w-2/4 leading-none text-center mb-8'>
          See place you've <span className='underline'>never</span> been before
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
  );
};

export default FourthSection;
