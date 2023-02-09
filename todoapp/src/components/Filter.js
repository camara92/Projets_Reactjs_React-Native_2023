import React from 'react'
import { Button } from 'reactstrap'


function Filter(props) {

  return (
    <div className='mt-5 text-center'>
      <Button className='bg-primary m-3'>Show all</Button>
      <Button className='bg-success m-3'>Show completed </Button>
      <Button className='bg-warning '>Show active</Button>

    </div>
  )

}


export default Filter; 