import Weather from "./Weather"

const CountryInfo = ({ countryInfo }) => {

    return (
        <>
        <h2>{countryInfo.name.common}</h2>

        <p>Capital: {countryInfo.capital[0]}</p>
        <p>Area: {countryInfo.area} square kilometres</p>

        <h3>Languages</h3>

        <ul>
        {Object.values(countryInfo.languages).map((lng, i) => <li key={i}>{lng}</li>)}
        </ul>

        <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />

        <Weather capital={countryInfo.capital[0]} lat={countryInfo.latlng[0]} lon={countryInfo.latlng[1]} />
        </>
    )
}

export default CountryInfo