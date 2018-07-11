import React from 'react'
import enhanceWithBasic from './HOC/basiEcnhancement'
import Box from './box'
import Card from './card'
import CircularMenu from './menuCatalog/circularMenu'
import SpinningMenu from './menuCatalog/spinningMenu'

const options = [
  { class: 'far fa-grin-beam', name: 'aa' },
  { class: 'far fa-grin-beam-sweat', name: 'bb' },
  { class: 'far fa-grin-alt', name: 'cc' },
  { class: 'fas fa-grin-tears', name: 'dd' },
  { class: 'fas fa-grin-tongue-wink', name: 'ee' },
  { class: 'far fa-grin-wink', name: 'ff' }
]
const options2 = [
  { class: 'fab fa-first-order', name: 'aa' },
  { class: 'fab fa-first-order-alt', name: 'bb' },
  { class: 'fab fa-galactic-republic', name: 'cc' },
  { class: 'fab fa-phoenix-squadron', name: 'dd' },
  { class: 'fab fa-rebel', name: 'ee' },
  { class: 'fab fa-jedi-order', name: 'ff' }
]

const CircularMenuEnhanced = enhanceWithBasic(CircularMenu)

const Stage = () => (
  <div className="stage">
    <Card title={'Circular Menu'}>
      <Box seporator>
        <CircularMenuEnhanced
          spinDirection={'left'}
          itemsDirection={'left'}
          btnIcon={'fas fa-cannabis'}
          btnColor={'#0bc46f'}
          options={options}
          startAngle={0}
          onChange={w => alert(w)}
        />
      </Box>
      <Box seporator>
        <CircularMenuEnhanced halfSpin onChange={w => alert(w)} />
      </Box>
      <Box seporator>
        <CircularMenuEnhanced
          btnColor={'#5e6fd1'}
          btnIcon={'fas fa-plus'}
          startAngle={0}
          onChange={w => alert(w)}
        />
      </Box>
      <Box>
        <CircularMenuEnhanced
          btnIcon={'fab fa-empire'}
          btnColor={'#495056'}
          options={options2}
          startAngle={90}
          onChange={w => alert(w)}
        />
      </Box>
    </Card>

    <Card title={'Spinning Menu'}>
      <Box seporator>
        <SpinningMenu />
      </Box>
      <Box seporator>
        <SpinningMenu
          btnIcon={'fab fa-rebel fa-2x'}
          btnBgColor={'#c48217'}
          ringBgColor={'#dba34a'}
          itemColor={'#7c5212'}
        />
      </Box>
      <Box seporator>
        <SpinningMenu
          btnborderColor={'#871414'}
          btnBgColor={'#d86d68'}
          btnIcon={'fab fa-empire fa-2x'}
          ringBgColor={'#c97f78'}
        />
      </Box>
      <Box>
        <SpinningMenu
          btnBgColor={'#4da556'}
          btnIcon={'fab fa-jedi-order fa-2x'}
          ringBgColor={'#9ac495'}
          itemColor={'#087040'}
        />
      </Box>
    </Card>
  </div>
)

export default Stage
