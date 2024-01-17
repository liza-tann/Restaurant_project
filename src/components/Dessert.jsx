import React, { useState } from 'react'
import { data_dessert } from '../data/dessert'

const Dessert = () => {
  const [foods, setFoods] = useState(data_dessert)

  return (
    <div className='max-w-[2560px] m-auto px-6 py-6'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6'>
        {foods.map((item, index) => (
          <div key={index} className='shadow-lg hover:scale-105 duration-300 relative'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover' />
            <div className=' px-2 py-2 absolute bottom-0 left-0 right-0 bg-black/65 h-3/10'>
              <div className="truncate overflow-hidden text-overflow-ellipsis line-clamp-1">
                <p className='font-bold text-white opacity-80'>{item.name}</p>
              </div>
              <p>
                <span className=' text-white opacity-80'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dessert;


//first version
{/* display items */}
      {/* <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=> (
        <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
          <img src={item.image} alt={item.name} 
          className='w-full h-[200px] object-cover'/>
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='bg-orange text-white p-1 rounded-full'>{item.price}</span>
            </p>
          </div>
        </div>
        ) )}
      </div> */}


        // <div className='absolute w-full h-full bg-black/50 text-white'>
        //     <p className='font-bold text-2xl px-2 pt-4 sm:text-xl md:text-lg'>Khmer yellow pancake</p>
        //     <p className='px-2 sm:text-base'>It is made fresh</p>
        //     <div className='px-2'>
        //        <button className='bg-white text-black rounded-full px-2 py-2 sm:px-2 md:px-3 absolute bottom-4'>Order Now</button>
        //     </div>
        // </div>

      //second version
    //     <div className='max-w-[2560px] m-auto px-4 py-4'>
    //   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6 pt-4'>
    //     {foods.map((item, index) => (
    //       <div key={index} className='shadow-lg hover:scale-105 duration-300'>
    //         <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover' />
    //         <div className='flex justify-between px-2 py-4'>
    //           <p className='font-bold'>{item.name}</p>
    //           <p>
    //             <span className='bg-orange text-white p-1 rounded-full'>{item.price}</span>
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    // </div>

    //version3
//     import React, { useState } from 'react'
// import { data } from '../data/data.js'

// const Food = () => {
//   const [foods, setFoods] = useState(data)

//   return (
//     <div className='max-w-[2560px] m-auto px-4 py-4'>
//       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6 pt-4'>
//         {foods.map((item, index) => (
//           <div key={index} className='shadow-lg hover:scale-105 duration-300 relative'>
//             <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover' />
//             <div className=' justify-between px-2 py-4 absolute bottom-0 left-0 right-0 bg-black/50 h-1/2'>
//               <p className='font-bold text-white'>{item.name}</p>
//               <p>
//                 <span className=' text-white p-1'>{item.price}</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };