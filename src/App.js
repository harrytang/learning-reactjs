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


    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: "Harry Tang", age: 35},
                {name: "Quynh Tran", age: 27}
            ],
            extra: personsState.extra
        });
    };


    return (
        <div className="App">
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I like cooking</Person>
        </div>
    );

};

export default App;
