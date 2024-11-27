import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const NumberList = ({name}) => {
    return (
      <li key={name}>{name}</li>
    )
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson));
    console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>

      <div>
        <ul>
          {persons.map((person) => {
          return (
            <NumberList name={person.name} />
          )
        })}
        </ul>
      </div>
    </div>
  )

}

export default App