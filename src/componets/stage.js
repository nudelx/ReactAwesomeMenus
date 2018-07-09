import React from 'react'
import Box from './box'
import CircularMenu from './menuCatalog/circularMenu'

const Stage = () => (
  <div className="stage">
    <Box>
      <CircularMenu halfSpin />
    </Box>
    {/* <Box>
      <CircularMenu />
    </Box>
    <Box>
      <CircularMenu />
    </Box>
    <Box>
      <CircularMenu />
    </Box> */}
  </div>
)

export default Stage
