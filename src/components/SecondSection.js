import secondSectionImage1 from '../images/second-section/second-section-image-1.png';
import secondSectionImage2 from '../images/second-section/second-section-image-2.png';
import secondSectionImage3 from '../images/second-section/second-section-image-3.png';
import secondSectionScratch1 from '../images/second-section/second-section-scratches-1.png';
import secondSectionScratch2 from '../images/second-section/second-section-scratches-2.png';

const secondSectionImages = [
  secondSectionImage1,
  secondSectionImage2,
  secondSectionImage3,
];

const SecondSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default SecondSection;
