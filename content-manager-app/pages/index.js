import { useState } from 'react'

export default function Home() {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue(value + 1)
  }

  const decrement =  () => setValue(value - 1)

  return (
    <>
      Current value: <h1>{ value }</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
