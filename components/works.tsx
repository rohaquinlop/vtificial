import React from 'react'
import { TileWrapper, TileBackground, TileContent, Tile } from './tile'

const Works = () => {
  return (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile page={0} renderContent={({progress}) => <span className=''>Foo {progress}</span>}></Tile>
    </TileContent>
  </TileWrapper>
  )
}

export default Works