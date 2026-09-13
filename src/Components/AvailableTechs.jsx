import React from 'react';
import TechnologyCard from './TechnologyCard';

const AvailableTechs = ({
    handleStack,
    stacked,
    techs}) => {
    console.log(techs, 'from available techs')
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                techs.map((tech, ind)=>{
                    return (
                      <TechnologyCard key={ind} tech={tech}
                      handleStack={handleStack}
                      stacked={stacked}/>
                    )
                })
            }
        </div>
    );
};

export default AvailableTechs;