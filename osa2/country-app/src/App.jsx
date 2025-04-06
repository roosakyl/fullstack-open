import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayResult from './components/DisplayResult'

const App = () => {
  const [value, setValue] = useState('')
  const [foundCountry, setFoundCountry] = useState('')
  const [countryInfo, setCountryInfo] = useState(null)
  const [allCountries, setAllCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [queryInfo, setQueryInfo] = useState(null)

  useEffect(() => {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setAllCountries(response.data)
        })
  }, [])

  useEffect(() => {
    if (foundCountry.length > 1) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${foundCountry}`)
        .then(response => {
          setCountryInfo(response.data)
          setFoundCountry('')
          console.log(response.data)
        })
    }
  }, [foundCountry])

  const handleChange = (event) => {
    setValue(event.target.value)
    let filtered = allCountries.filter((country) => country.name.common.toLowerCase().includes(event.target.value))
    //handle short inputs
    if (event.target.value.length == 0) {
      console.log('length 0')
      setQueryInfo('')
      setFilteredCountries([])
      return null
    } else if (event.target.value.length < 3) {
      setQueryInfo('Please enter at least three characters')
      setFilteredCountries([])
      return null
    }
    
    //handle too many results
    if (filtered.length > 10) {
      setQueryInfo('Too many results, please specify')
    } else if (filtered.length <= 10 || filtered.length > 1) {
      setQueryInfo('')
      setFilteredCountries(filtered)
    }
    
    //handle finding just one country
    if (filtered.length === 1) {
      setFilteredCountries(filtered)
      setFoundCountry(filtered[0].name.common)
      console.log('maa: ', filtered[0].name.common)
    }
  }

  const QueryInfo = ({ queryInfo }) => {
    return (
      <div>{queryInfo}</div>
    )
  }

  return (
    <div>
      <form>
        Find countries: <input value={value} onChange={handleChange} />
        <QueryInfo queryInfo={queryInfo} />
      </form>
      <DisplayResult filteredCountries={filteredCountries} countryInfo={countryInfo} />
    </div>
  )
}

export default App
