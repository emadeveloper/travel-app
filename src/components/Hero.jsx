import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1689647829647-2ec4dfa18013?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" 
        className='w-full h-full object-cover' 
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With WEEKAWAY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure expedita, quibusdam neque debitis adipisci illo possimus ea deserunt. Quia, debitis? Fugit quidem dolorum expedita nostrum quaerat rerum blanditiis aspernatur.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero