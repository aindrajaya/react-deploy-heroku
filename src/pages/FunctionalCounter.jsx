import React from 'react'
import { Button } from '../components/Button';

export const FunctionalCounter = (props) => {
  const {count, inc, dec} = props; //desctructuring
  return (
    <div>
      <div className='box'>
          <h1>{count}</h1>
        </div>
        <div className='boxCenter'>
          {/* Mengirim props ke Button, dan menambah props baru */}
          {/* Mengirim props ke Button, dan menambah props baru */}
          <Button act={inc} label="increment"/>
          <Button act={dec} label="decrement"/>
        </div>
    </div>
  )
}
