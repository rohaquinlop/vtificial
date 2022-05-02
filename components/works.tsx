import React from 'react'
import { TileWrapper, TileBackground, TileContent, Tile } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'
import Image from 'next/image'

const Works = () => {
  return (
  <TileWrapper numOfPages={2}>
    <TileBackground><WorkBackground/></TileBackground>
    <TileContent>
      <Tile page={0} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We built</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>automathon</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <p className='leading-tight max-w-5xl mx-auto text-3xl tracking-tight text-black'>
              Automathon is a <strong>Python library</strong> that helps you to simulate and visualize finite automata.<br/>
              Actually is being used on research to facilitate an advanced way of searching natural language text on the University of Zurich.
            </p>
            {/*
            <Image src='/assets/team/vtificial_faces_robin.png' layout='responsive' width={840} height={1620} alt='vtificial'/>
            */}
          </WorkRight>
        </WorkContainer>
      )}></Tile>
      <Tile page={1} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We built</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>automathon</div>
          </WorkLeft>
          <WorkRight progress={progress}>
          </WorkRight>
        </WorkContainer>
      )}></Tile>
    </TileContent>
  </TileWrapper>
  )
}

export default Works