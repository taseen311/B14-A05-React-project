import React from 'react';

const Stack = ({
    stacked,
    handleRemove,
    handleRemoveAll
}) => {
    return (
        <div className='mt-10  lg:mt-40 contaner mx-auto w-4/5  lg:w-[400px] border-2 border-amber-700 h-fit p-5 rounded-2xl'>
            <div className='border-b-2'>
                <h3 className='text-left font-bold text-3xl text-red-700'>Your Stack</h3>
            <h2 className='mt-2 mb-5'>{stacked.length}Technology added</h2>
            </div>
            {
                stacked.length === 0?
                <p className='font-bold text-center mt-3'>No Technology Selected </p>
                :
                <div>
                    {
                        stacked.map(item=>(
                            <div key={item.id}
                            className='border border-amber-800 rounded-2xl p-3 flex justify-between items-center'>
                             
                             <div>
                                <h4 className='font-bold'>{item.name}</h4>
                                <p>{item.category}</p>
                             </div>

                             <button onClick={()=>(handleRemove(item.id))}
                             className='text-red-500'
                             >X</button>
                                
                            </div>
                        ))
                    }
                    <button onClick={handleRemoveAll}
                    className='btn btn-error w-full mt-5'>Remove All</button>
                </div>
            }
        </div>
    );
};

export default Stack;