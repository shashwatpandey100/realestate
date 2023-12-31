import React from 'react';

const Property = ({params}) => {

  return (
    <section className='h-[100vh] w-[100vw] flex items-center justify-center text-black'>property/{params?.slug}</section>
  )
};

export default Property;