import React from 'react';
import ThreeScene from './three/page';
import { Button } from 'react-bootstrap';

const Home: React.FC = () => {

  return (
    
    <>

      <div className='text-center font-bold font serif pt-[400px]   '>
        <div className='text-5xl'>Hey There Nice to Meet You,</div>
        <p className='pt-2'></p>
        <div className='text-4xl'> I’m Umendran a Software Engineer I</div>


      </div>
      <div className='grid grid-cols-2  space-x-4 text-3xl  '>
        <Button className='hover:animate-pulse'>
          ./about\.
        </Button>
        <Button className=''>
          ./resume\.
        </Button>
      
      </div>
      <div className='grid grid-cols-2  space-x-4 text-3xl  '>
      <Button>
        ./projects\.
      </Button>
      <Button>
        ./contact\.
      </Button>
      </div>

   
      
    </>
  );
};

export default Home;
