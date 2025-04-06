import CountryList from "./CountryList"
import CountryInfo from "./CountryInfo"

const DisplayResult = ({ filteredCountries, countryInfo }) => {

    if (filteredCountries !== null) {
        if (filteredCountries.length === 1 && countryInfo !== null) {
            return <CountryInfo countryInfo={countryInfo} />
        } else {
            return <CountryList filteredCountries={filteredCountries} />
    }
    }
}

export default DisplayResult