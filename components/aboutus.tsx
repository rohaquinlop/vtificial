import React from 'react'
import Member from './member'

const AboutUs : React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
          <strong>We will help you get the full potential that Artificial Intelligence have for your business.</strong> We have dedicated ourselves to learning and understanding all the benefits that these techniques have for business today, from understanding customers to support in tasks to improve performance and results obtained.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Our team</h2>
        {/*
        <div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
        */}
        <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-20'>
          <Member
            id="robin"
            name="Robin"
            socialId="@rohaquinlop"
            link="https://github.com/rohaquinlop"
          />
          <Member
            id="alvaro"
            name="Alvaro"
            socialId="@alvarobertin"
            link="https://github.com/alvarobertin"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs