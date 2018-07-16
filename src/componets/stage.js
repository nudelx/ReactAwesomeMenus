import React from 'react'

import Card from './card'
import { rowLoop, row1, row2, row3 } from './mainStageConfig'

const Stage = () => (
  <div className="stage">
    <Card title={'Circular Menu'}>{rowLoop(row1)}</Card>
    <Card title={'Spinning Menu'}>{rowLoop(row2)}</Card>
    <Card title={'Carousel Menu (checkbox)'}>{rowLoop(row3)}</Card>
  </div>
)

export default Stage
