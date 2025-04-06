import CountryList from "./CountryList"
import CountryInfo from "./CountryInfo"

const DisplayResult = ({ filteredCountries, countryInfo }) => {
    if (filteredCountries === null || countryInfo === null) { return null }
    if (filteredCountries.length === 1) {
        return <CountryInfo countryInfo={countryInfo} />
    } else {
        return <CountryList filteredCountries={filteredCountries} />
    }
}

export default DisplayResult