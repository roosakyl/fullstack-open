const Filter = ({filter, handler}) => {
    return(
        <div>
        <p>Filter names: <input value={filter} onChange={handler}/></p>
        </div>
    )
}

export default Filter