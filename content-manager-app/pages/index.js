import React, { useState, useEffect } from 'react'

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
  constructor(){
    super()
    this.state = {
      value: 10
    }
  }

  changeState(incrementor){
    this.setState({value: incrementor})
  }

  render(){
    const {myProps: MyProps, OtherProps} = this.props
    return(
      <>
        Current value CompB: <h1>{ this.state.value }</h1>
        <button onClick={() => this.changeState(this.state.value-1)}>-</button>
        <button onClick={() => this.changeState(this.state.value+1)}>+</button>
        <MyProps />
        <OtherProps />
      </>
    )
  }
}

function MyComponent() {
  return <h1>My Component</h1>
}
function MyComponent2() {
  return <h1>My Component Two</h1>
}

function Home() {
  const [value, setValue] = useState(0)

  const change = (incrementor) => {
    setValue(value + incrementor)
  }

  useEffect(() => {
    // if passing parameters in [dependencies] is only change if the parameters change, if empty [] will be call only one time.
    console.log('Function callback called when react is rendering')
  }, [])

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
      <ComponentB myProps={MyComponent}
        OtherProps={MyComponent2} />
    </>
  )
}

export default Home