/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */


import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old. </p>
            <p>{props.children}</p>
            <input onChange={props.nameChange} value={props.name}/>
        </div>

    )
};

export default person;