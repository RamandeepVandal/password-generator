import React from 'react'

export const Display = ({password}) => {
  return (
    <div className='card text-center pt-2 pb-2' style={{width: 20 + 'em'}}>
        {password}
    </div>
  )
}
