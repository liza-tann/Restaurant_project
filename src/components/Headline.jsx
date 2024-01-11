import React from 'react'

const Headline = () => {
  return (
    <>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rouded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
            <p className='font-bold text-2xl px-2 pt-4 sm:text-xl md:text-lg'>Khmer yellow pancake</p>
            <p className='px-2 sm:text-base'>It is made fresh</p>
            <div className='px-2'>
               <button className='bg-white text-black rounded-full px-2 py-2 sm:px-2 md:px-3 absolute bottom-4'>Order Now</button>
            </div>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://img.taste.com.au/JusFpkEI/w1200-h630-cfill/taste/2016/11/banh-xeo-crispy-pancakes-77516-1.jpeg" alt="#" />
      </div>

      {/* card */}
      <div className='rouded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
            <p className='font-bold text-2xl px-2 pt-4 sm:text-xl md:text-lg'>Khmer yellow pancake</p>
            <p className='px-2 sm:text-base'>It is made fresh</p>
            <div className='px-2'>
               <button className='bg-white text-black rounded-full px-2 py-2 sm:px-2 md:px-3 absolute bottom-4'>Order Now</button>
            </div>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://img.taste.com.au/JusFpkEI/w1200-h630-cfill/taste/2016/11/banh-xeo-crispy-pancakes-77516-1.jpeg" alt="#" />
      </div>

      {/* card */}
      <div className='rouded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
            <p className='font-bold text-2xl px-2 pt-4 sm:text-xl md:text-lg'>Khmer yellow pancake</p>
            <p className='px-2 sm:text-base'>It is made fresh</p>
            <div className='px-2'>
               <button className='bg-white text-black rounded-full px-2 py-2 sm:px-2 md:px-3 absolute bottom-4'>Order Now</button>
            </div>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://img.taste.com.au/JusFpkEI/w1200-h630-cfill/taste/2016/11/banh-xeo-crispy-pancakes-77516-1.jpeg" alt="#" />
      </div>

    </div>
    </>
  )
}

export default Headline
