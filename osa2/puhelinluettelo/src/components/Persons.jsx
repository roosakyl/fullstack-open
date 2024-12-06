import Person from './Person'

const Persons = ({persons, filter}) => {

    persons = filter === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {persons.map((person) =>
                <Person key={person.name} person={person} />
            )}
        </div>
    )
}

export default Persons