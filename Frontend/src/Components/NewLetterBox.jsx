import React from 'react'

const NewLetterBox = () => {

  const onSubmitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Be the first to know about exclusive deals, new arrivals, and special offers. Join our community of fashion-forward shoppers and never miss out on the latest trends.
      </p>
      <form 
      onSubmit={onSubmitHandler}
      className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" name="email" placeholder='Enter Your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewLetterBox