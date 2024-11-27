import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const PersonInfo = ({name}) => {
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
    const alreadyAdded = persons.filter((person) => person.name === newName);
    //If the name is already on the list, prevent addition and give an alert. If not, add the name to the list
    alreadyAdded.length > 0 ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPerson))
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
            <PersonInfo name={person.name} key={person.name} />
          )
        })}
        </ul>
      </div>
    </div>
  )

}

export default App