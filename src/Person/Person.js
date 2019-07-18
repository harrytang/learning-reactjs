/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */


import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>My name is {props.name} and I'm {props.age} years old. </p>
            <p>{props.children}</p>
        </div>

    )
};

export default person;