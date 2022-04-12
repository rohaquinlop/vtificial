import React from 'react'
import Member from './member'

const AboutUs : React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
          <strong>We will help you solve your problems, faster.</strong> Our team of engineers and designers has created the best solutions for different problems in different contexts.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Our team</h2>
        {/*
        <div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
        */}
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
          <Member
            id="robin"
            name="Robin"
            socialId="@rohaquinlop"
            link="https://github.com/rohaquinlop"
          />
          <Member
            id="juan"
            name="Juan"
            socialId="@juanpatinoro"
            link="https://www.instagram.com/juanpatinoro/"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs