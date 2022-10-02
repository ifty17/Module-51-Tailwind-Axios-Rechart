import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
      <div className="bg-indigo-300 rounded-md m-3 p-4">
        <p>
          <span className="text-7xl text-white">{option.price}</span>
          <span className="text-2xl text-gray-200">/month</span>
        </p>
        <p className="text-3xl my-4">{option.name}</p>
        <div>
            {
                features.map((feature, idx ) => <Feature key={idx} feature={feature}></Feature>)
            }
        </div>
        <button className='btn mt-4 bg-green-500 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
      </div>
    );
};

export default PriceOption;