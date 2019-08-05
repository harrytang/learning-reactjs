/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person';

const App = () => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Harry", age: 35},
            {name: "Quynh", age: 27}
        ],
        extra: "Will not be touched"
    });


    const switchNameHandler = (name) => {
        setPersonsState({
            persons: [
                {name: name, age: 35},
                {name: "Quynh Tran", age: 27}
            ],
            extra: personsState.extra
        });
    };

    const nameUpdateHandler = (event) => {
        setPersonsState({
            persons: [
                {name: "Harry", age: 35},
                {name: event.target.value, age: 27}
            ],
            extra: personsState.extra
        });
    };

    const style={
        padding: '8px',
        border: '1px solid green'
    };

    return (

        <div className="App">
            <button
                style={style}
                onClick={switchNameHandler.bind(this, "Gia Duy DUONG")}>
                Switch Name
            </button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                click={()=>switchNameHandler("Gia Duy DUONG")}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                nameChange={nameUpdateHandler}
            >I like cooking</Person>
        </div>
    );

};

export default App;
