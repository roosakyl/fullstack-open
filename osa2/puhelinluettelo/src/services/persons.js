import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson)
}

const deletePerson = id => {
    return axios.delete(baseUrl + '/' + id)
}

const updatePerson = (personId, personData) => {
    return axios.put(baseUrl + '/' + personId, personData)
}

export default { getAll, create, deletePerson, updatePerson }