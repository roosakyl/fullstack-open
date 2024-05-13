const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  const name = 'Anna'
  const ika = 12
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Roosa" age="33" />
      <Hello name="Elisa" />
      <Hello name={name} age={ika} />
  </div>
  )
  }

export default App