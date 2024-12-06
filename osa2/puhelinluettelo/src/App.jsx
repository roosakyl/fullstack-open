import { useState } from 'react'
import Filter from './components/Filter' 
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
   setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {name: newName, number: newNumber}
    const alreadyAdded = persons.filter((person) => person.name === newName);
    //If the name is already on the list, prevent addition and give an alert. If not, add the name to the list
    alreadyAdded.length > 0 ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add name</h3>
      <PersonForm addName={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter filter={filter} handler={handleFilterChange} />
      <Persons persons={persons} filter={filter} />

    </div>
  )

}

export default App