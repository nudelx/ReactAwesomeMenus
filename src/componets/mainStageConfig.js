import React from 'react'
import enhanceWithBasic from './HOC/baseEnhancement'
import Box from './box'
import CircularMenu from './menuCatalog/circularMenu'
import SpinningMenu from './menuCatalog/spinningMenu'
import CarouselMenu from './menuCatalog/carouselMenu'
import FlowerMenu from './menuCatalog/flowerMenu'

export const options = [
  { class: 'far fa-grin-beam', name: 'aa' },
  { class: 'far fa-grin-beam-sweat', name: 'bb' },
  { class: 'far fa-grin-alt', name: 'cc' },
  { class: 'fas fa-grin-tears', name: 'dd' },
  { class: 'fas fa-grin-tongue-wink', name: 'ee' },
  { class: 'far fa-grin-wink', name: 'ff' }
]
export const options2 = [
  { class: 'fab fa-first-order', name: 'aa' },
  { class: 'fab fa-first-order-alt', name: 'bb' },
  { class: 'fab fa-galactic-republic', name: 'cc' },
  { class: 'fab fa-phoenix-squadron', name: 'dd' },
  { class: 'fab fa-rebel', name: 'ee' },
  { class: 'fab fa-jedi-order', name: 'ff' }
]
export const options3 = [
  { class: 'fab fa-apple fa-4x', name: 'Apple', color: '#BEB8EB' },
  { class: 'fab fab fa-android fa-4x', name: 'Android', color: '#5299D3' },
  { class: 'fab fa-aws fa-4x', name: 'Amazon', color: '#A2BCE0' },
  { class: 'fab fa-bitcoin fa-4x', name: 'Bitcoin', color: '#5E5C6C' }
]

const CircularMenuEnhanced = enhanceWithBasic(CircularMenu)
const SpinningMenuEnhanced = enhanceWithBasic(SpinningMenu)
const CarouselMenuEnhanced = enhanceWithBasic(CarouselMenu)
const FlowerMenuEnhanced = enhanceWithBasic(FlowerMenu)

export const row1 = [
  <CircularMenuEnhanced
    spinDirection={'left'}
    itemsDirection={'left'}
    btnIcon={'fas fa-cannabis'}
    btnColor={'#0bc46f'}
    options={options}
    startAngle={0}
    onChange={w => alert(w)}
  />,
  <CircularMenuEnhanced halfSpin onChange={w => alert(w)} />,
  <CircularMenuEnhanced
    btnColor={'#5e6fd1'}
    btnIcon={'fas fa-plus'}
    startAngle={0}
    onChange={w => alert(w)}
  />,
  <CircularMenuEnhanced
    btnIcon={'fab fa-empire'}
    btnColor={'#495056'}
    options={options2}
    startAngle={90}
    onChange={w => alert(w)}
  />
]

export const row2 = [
  <SpinningMenuEnhanced />,
  <SpinningMenuEnhanced
    btnIcon={'fab fa-rebel fa-2x'}
    btnBgColor={'#c48217'}
    ringBgColor={'#dba34a'}
    itemColor={'#7c5212'}
  />,
  <SpinningMenuEnhanced
    btnborderColor={'#871414'}
    btnBgColor={'#d86d68'}
    btnIcon={'fab fa-empire fa-2x'}
    ringBgColor={'#c97f78'}
  />,
  <SpinningMenuEnhanced
    btnBgColor={'#4da556'}
    btnIcon={'fab fa-jedi-order fa-2x'}
    ringBgColor={'#9ac495'}
    itemColor={'#087040'}
  />
]

export const row3 = [
  <CarouselMenuEnhanced btnBgColor={'#e86190'} itemColor={'#e5e160'} />,
  <CarouselMenuEnhanced
    btnIcon={'fab fa-empire fa-2x'}
    btnLabel={''}
    options={options}
  />,
  <CarouselMenuEnhanced
    options={options2}
    btnLabel={''}
    btnIcon={'fab fa-rebel fa-2x'}
    btnBgColor={'#4da556'}
    itemColor={'#8ad892'}
  />,
  <CarouselMenuEnhanced />
]
export const row4 = [
  <FlowerMenuEnhanced />,
  <FlowerMenuEnhanced
    options={options3}
    btnBgColor={'#647692'}
    btnIcon={'fas fa-bug fa-4x'}
    btnColor={'#fdc739'}
  />,
  <FlowerMenuEnhanced
    options={options3}
    btnBgColor={'#2179BC'}
    btnIcon={'fab fa-bluetooth fa-4x'}
    btnColor={'#fff'}
  />,
  <FlowerMenuEnhanced
    options={options3}
    btnBgColor={'#5D4157'}
    btnIcon={'fas fa-chess-knight fa-4x'}
    btnColor={'#EBE3AA'}
  />
]

export const rowLoop = row =>
  row.map((Item, i) => (
    <Box key={i} seporator={!!i}>
      {Item}
    </Box>
  ))
