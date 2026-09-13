import React, { use } from 'react';
import AvailableTechs from './AvailableTechs';

const Technologies = ({
    handleStack,
    stacked,
    techPromise}) => {
    console.log(techPromise);
    const techs = use(techPromise)
    console.log(techs)
    return (
        <div className='container mx-auto my-20 w-[1200px]'> 
            <div className='mb-5'>
                <h3 className='text-4xl font-bold'>Explore the <span className='text-pink-500'>Technologies</span></h3>
            <p className='text-gray-600'>Pick one technology per category to build your ideal stack</p>
            </div>
            <AvailableTechs
            techs={techs}
            handleStack={handleStack}
            stacked={stacked}
            ></AvailableTechs>
        </div>
    );
};

export default Technologies;