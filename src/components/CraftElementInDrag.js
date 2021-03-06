import React, { useEffect, useState, memo } from 'react'
import CraftElement from './CraftElement'



const CraftElementInDrag = memo(({ path, title, height }) => {
    // const [tickTock, setTickTock] = useState(false)
    
    // useEffect(
    //   function subscribeToIntervalTick() {
    //     const interval = setInterval(() => setTickTock(!tickTock), 500)
    //     return () => clearInterval(interval)
    //   },
    //   [tickTock],
    // )

  const styles = {
    display: 'inline-block',
    // height: height,
  //   transform: 'rotate(-7deg)',
  //   WebkitTransform: 'rotate(-7deg)',
  }

  return (
    <div style={styles}>
      <CraftElement path={path} title={title} height={height}/>
    </div>
  )
})
export default CraftElementInDrag