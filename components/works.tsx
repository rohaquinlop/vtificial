import React from 'react'
import { TileWrapper, TileBackground, TileContent, Tile } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'

const Works = () => {
  return (
  <TileWrapper numOfPages={2}>
    <TileBackground><WorkBackground/></TileBackground>
    <TileContent>
      <Tile page={0} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>Applications of AI</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Survey Analytics</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <p className='leading-tight max-w-5xl mx-auto text-3xl tracking-tight text-black'>
              Think that you created a survey to get feedback about a new feature on your product or service that you&apos;re selling, and you get thousands and thousands of responses, without AI you would have to invest your time reading and interpreting all the responses but <strong>with AI it will only take seconds</strong> to give you a sentiment analysis.
            </p>
          </WorkRight>
        </WorkContainer>
      )}></Tile>
      <Tile page={1} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>Applications of AI</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Text Summarization</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <p className='leading-tight max-w-5xl mx-auto text-3xl tracking-tight text-black'>
              In the case that a lot of files containing a lot of text, and you need to get the main idea without reading all those files it&apos;s probably that you would like to have a summary, but this task will also require to someone that reads everything and <strong>spend time</strong>, <strong>AI will only take seconds doing this and without losing the meaning</strong>.
            </p>
          </WorkRight>
        </WorkContainer>
      )}></Tile>
    </TileContent>
  </TileWrapper>
  )
}

export default Works