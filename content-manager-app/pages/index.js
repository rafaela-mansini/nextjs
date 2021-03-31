import React, { useState } from 'react'

const ComponentA = () => {
  return(
    <>
      <h1>ComponentA</h1>
    </>
  )
}

class ComponentB extends React.Component{
  state = {
    value: 10
  }

  changeState(incrementor){
    this.setState({value: incrementor})
  }

  render(){
    return(
      <>
        Current value CompB: <h1>{ this.state.value }</h1>
        <button onClick={() => this.changeState(this.state.value+1)}>+</button>
        <button onClick={() => this.changeState(this.state.value-1)}>-</button>
      </>
    )
  }
}

function Home() {
  const [value, setValue] = useState(0)

  const change = (incrementor) => {
    setValue(value + incrementor)
  }

  return (
    <>
      Current value: <h1>{ value }</h1>
      <button onClick={() => change(+1)}>+</button>
      <button onClick={() => setValue(value-1)}>-</button>
      <ComponentA />
      <ComponentB />
    </>
  )
}

export default Home