import React from 'react';

const Stack = ({
    stacked,
    handleRemove,
    handleRemoveAll
}) => {
    return (
        <div className='mt-40 contaner mx-auto w-[300px]'>
            <h3 className='text-center'>Your Stack</h3>
            <h2>{stacked.length}Technology added</h2>
            {
                stacked.length === 0?
                <p>No Technology Selected </p>
                :
                <div>
                    {
                        stacked.map(item=>(
                            <div key={item.id}
                            className='border rounded-2xl p-3 flex justify-between items-center'>
                             
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