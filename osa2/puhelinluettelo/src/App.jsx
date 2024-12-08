import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter' 
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
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
    if (alreadyAdded.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
    personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }
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