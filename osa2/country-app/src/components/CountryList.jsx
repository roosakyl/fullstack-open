const showCountry =() => {
    
}

const CountryList = ({ filteredCountries}) => {
    if (filteredCountries) {
      return (
        <>{filteredCountries.map((country, i) => <li key={i}>{country.name.common}</li>)}
        </>
      )
    }
  }

  export default CountryList