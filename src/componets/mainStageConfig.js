import React from 'react'
import enhanceWithBasic from './HOC/baseEnhancement'
import Box from './box'
import CircularMenu from './menuCatalog/circularMenu'
import SpinningMenu from './menuCatalog/spinningMenu'

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

const CircularMenuEnhanced = enhanceWithBasic(CircularMenu)
const SpinningMenuEnhanced = enhanceWithBasic(SpinningMenu)

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

export const rowLoop = row =>
  row.map((Item, i) => (
    <Box key={i} seporator={!!i}>
      {Item}
    </Box>
  ))
