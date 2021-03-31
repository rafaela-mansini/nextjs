import React, { useState } from 'react'

// const ComponentA = ({prop1}) => {
const ComponentA = (props) => {
  const {prop1, prop2, prop3, prop4} = props
  return(
    <>
      <h1>ComponentA</h1>
      <p>Props1: {prop1}</p>
      <p>Props2: {prop2}</p>
      <p>Props3: {prop3.toString()}</p>
      <div>My Prop4: {<prop4 />}</div>
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
        <button onClick={() => this.changeState(this.state.value-1)}>-</button>
        <button onClick={() => this.changeState(this.state.value+1)}>+</button>
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
      <button onClick={() => setValue(value-1)}>-</button>
      <button onClick={() => change(+1)}>+</button>
      <ComponentA 
        prop1={value}
        prop2="Olá peste"
        prop3={true}
        prop4={() => <div>My NEW JSX!</div>}
      />
    </>
  )
}

export default Home