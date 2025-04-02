import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter' 
import Notification from './components/Notification' 
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

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

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const deletePerson = (event) => {
    event.preventDefault();
    //get the person object that we want to delete
    const person = persons.find((p) => p.id === event.target.value)
    if (window.confirm(`Delete ${person.name}?`)) {
      //chain promises
      personService
        .deletePerson(person.id)
        .then(() => personService.getAll())
        .then(response => {
          setPersons(response.data)
          setNotification(
            {type: 'success',
              message: `${person.name} was deleted from contacts`
            })
      })
      .catch (error => {
        console.error("Error: ", error)
      })
    }
  }

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {name: newName, number: newNumber}
    const alreadyAdded = persons.filter((person) => person.name === newName);
    //If the name is already on the list, prevent addition and give an alert. If not, add the name to the list
    if (alreadyAdded.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook. Do you want to update the number?`)) {
        const personId = alreadyAdded[0].id
        personService
          .updatePerson(personId, newPerson)
          .then(() => personService.getAll())
          .then(response => {
            setPersons(response.data)
            setNotification(
              {type: 'success',
                message: `The number of ${newName} was updated`
              })
          })
          .catch (error => {
            console.error("Error: ", error)
            setNotification(
              {type: 'error',
                message: `${newName} does not exist`
              })
          })
      }
    } else {
    personService
      .create(newPerson)
      .then(response => {
        console.log(response.data)
        setPersons(persons.concat(response.data))
        setNotification(
          {type: 'success',
            message: `${newName} was added to contacts`
          })
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h3>Add name</h3>
      <Notification notification={notification} />
      <PersonForm addName={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter filter={filter} handler={handleFilterChange} />
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />

    </div>
  )

}

export default App