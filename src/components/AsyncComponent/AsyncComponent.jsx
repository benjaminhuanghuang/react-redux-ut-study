import React from 'react'

const AsyncComponent = () => {
  const [counter, setCounter] = React.useState(0)

  const delayCount = () => (
    setTimeout(() => {
      setCounter(counter + 1)
    }, 1000)
  )
  
return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={delayCount}> Up</button>
    <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
 </>
    )
  }
  
  export default AsyncComponent



