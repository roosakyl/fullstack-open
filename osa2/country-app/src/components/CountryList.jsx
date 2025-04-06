const CountryList = ({ filteredCountries, showCountry}) => {
    if (filteredCountries) {
      return (
        <>{filteredCountries.map((country, i) => <li key={i}>{country.name.common} <button value={country.name.common} onClick={() => showCountry(country.name.common)}>Show</button></li>)}
        </>
      )
    }
  }

  export default CountryList