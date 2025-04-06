import CountryList from "./CountryList"
import CountryInfo from "./CountryInfo"

const DisplayResult = ({ filteredCountries, countryInfo, showCountry }) => {

    //filteredCountries is null at the beginning, which prevents rendering the components at the beginning
    if (filteredCountries !== null) {
        if (countryInfo !== null) {
            return <CountryInfo countryInfo={countryInfo} />
        } else {
            return <CountryList filteredCountries={filteredCountries} showCountry={showCountry} />
    }
    }
}

export default DisplayResult