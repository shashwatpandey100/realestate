import React from 'react';

const Properties = ({params}) => {

  return (
    <section className='h-[100vh] w-[100vw] flex items-center justify-center text-black'>properties/{params?.slug}</section>
  )
}

export default Properties