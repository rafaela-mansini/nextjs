import { useState } from 'react'

export default function Home() {
  const [value, setValue] = useState(0)

  const change = (incrementor) => {
    setValue(value + incrementor)
  }

  return (
    <>
      Current value: <h1>{ value }</h1>
      <button onClick={() => change(+1)}>+</button>
      <button onClick={() => setValue(value-1)}>-</button>
    </>
  )
}
