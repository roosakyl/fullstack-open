const Persons = ({persons, filter, deletePerson}) => {

    persons = filter === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <ul>
            {persons.map((person) =>
                <li key={person.id}>{person.name}: {person.number} <button value={person.id} onClick={deletePerson}>Delete</button></li>
            )}
            </ul>
        </div>
    )
}

export default Persons