/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person';
import Button from "@material-ui/core/Button";

const App = () => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {id: '1', name: "Harry", age: 35},
            {id: '2', name: "Quynh", age: 27},
            {id: '3', name: "Dat", age: 33}
        ],
        showPersons: false,
        extra: "Will not be touched"
    });


    const deletePersonHandler = (idx) => {
        //const persons = personsState.persons.slice();
        const persons = [...personsState.persons];
        persons.splice(idx, 1);
        const newState = {...personsState, persons};
        setPersonsState(newState);
    };

    const showPersonsHandler = () => {
        const doesShow = personsState.showPersons;
        setPersonsState({
            persons: personsState.persons,
            extra: personsState.extra,
            showPersons: !doesShow
        });

    };

    const nameChangeHandler = (event, id) => {
        const personIdx = personsState.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...personsState.persons[personIdx]};
        person.name = event.target.value;

        const persons = [...personsState.persons];
        persons[personIdx] = person;

        const newState = {...personsState, persons};

        setPersonsState(newState);

    };


    let persons = null;

    if (personsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, idx) => {
                    return (
                        <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            deletePerson={() => deletePersonHandler(idx)}
                            changeName={(event) => nameChangeHandler(event, person.id)}
                        />
                    )
                })}

            </div>
        );
    }

    return (


        <div className="App">
            <Button variant="contained" color="primary" onClick={showPersonsHandler}>
                Show Persons
            </Button>
            {persons}
        </div>
    );

};

export default App;
