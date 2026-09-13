import React from 'react';

const TechnologyCard = ({
    tech,
    handleStack,
    stacked}) => {
        const isAdded = stacked.find(
            (item)=>item.id === tech.id
        );
    return (
        <div className="card w-96 bg-base-100 border border-gray-200 rounded-3xl shadow-sm">
  <div className="card-body p-7">

    <div className="flex justify-between items-start">

      <img
        src={tech.icon}
        alt="React Logo"
        className="w-12 h-12 object-contain"
      />

      <span className="badge badge-outline rounded-full px-5 py-3 text-blue-500 border-blue-200 bg-blue-50">
        {tech.badge}
      </span>

    </div>


    <h2 className="text-3xl font-bold mt-5 text-gray-900">
      {tech.name}
    </h2>


    <p className="text-gray-500 text-base leading-7 mt-2">
      {tech.description}
    </p>


    <div className="border-t border-gray-100 my-5"></div>


    <div className="flex justify-between items-center">

      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
        {tech.category}
      </span>

      <span className="text-gray-500 text-sm">
        {tech.difficulty}
      </span>

      <div className="flex items-center gap-1">
        <span className="text-yellow-400 text-xl">★</span>
        <span className="font-semibold text-gray-700">
          {tech.rating}
        </span>
      </div>

    </div>


    <button
      onClick={()=>handleStack(tech)}
      disabled={isAdded===true} 
      className="
      btn 
      btn-block 
      mt-6 
      rounded-xl 
      bg-[#0b1020] 
      hover:bg-[#151b30]
      text-white
      border-none
      h-12
    ">
      {isAdded? "Added to stack":"Add to stack"}
    </button>


  </div>
                      </div>
    );
};

export default TechnologyCard;