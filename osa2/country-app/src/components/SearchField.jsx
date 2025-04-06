const SearchField = ( { value, handleChange, queryInfo }) => {
    return (
        <form>
        Find countries: <input value={value} onChange={handleChange} />
        <p>{queryInfo}</p>
      </form>
    )
}

export default SearchField