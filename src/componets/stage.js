import React from 'react'
import Box from './box'
import Row from './row'
import CircularMenu from './menuCatalog/circularMenu'
import SpinningMenu from './menuCatalog/spinningMenu'
import Welcome from './welcome'
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

const Stage = () => (
  <div className="stage">
    <Welcome />
    <Row title={'Circular Menu'}>
      <Box>
        <CircularMenu
          spinDirection={'left'}
          itemsDirection={'left'}
          buttonIcon={'fas fa-cannabis'}
          buttonColor={'#0bc46f'}
          options={options}
          startAngle={0}
          onChange={w => alert(w)}
        />
      </Box>
      <Box>
        <CircularMenu halfSpin onChange={w => alert(w)} />
      </Box>
      <Box>
        <CircularMenu
          buttonColor={'#5e6fd1'}
          buttonIcon={'fas fa-plus'}
          startAngle={0}
          onChange={w => alert(w)}
        />
      </Box>
      <Box>
        <CircularMenu
          buttonIcon={'fab fa-empire'}
          buttonColor={'#495056'}
          options={options2}
          startAngle={90}
          onChange={w => alert(w)}
        />
      </Box>
    </Row>

    <Row title={'Spinning Menu'}>
      <Box>
        <SpinningMenu />
      </Box>
      <Box>
        <SpinningMenu btnIcon={'fab fa-rebel fa-2x'} />
      </Box>
      <Box>
        <SpinningMenu btnIcon={'fab fa-empire fa-2x'} />
      </Box>
      <Box>
        <SpinningMenu btnIcon={'fab fa-jedi-order fa-2x'} />
      </Box>
    </Row>
  </div>
)

export default Stage
