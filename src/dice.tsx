import icon from './icons.tsx';
import { useState, useEffect } from 'react';

const dice = [
    {
        icon: icon.dice1,
        value: 1
    },
    {
        icon: icon.dice2,
        value: 2
    },
    {
        icon: icon.dice3,
        value: 3
    },
    {
        icon: icon.dice4,
        value: 4
    },
    {
        icon: icon.dice5,
        value: 5
    },
    {
        icon: icon.dice6,
        value: 6
    }
];

function RandomNumber() {
    const number = Math.floor(Math.random() * 6);

    return number;
}

function Animation() {

    const [value, setValue] = useState(RandomNumber);

    useEffect(() => {

        const interval = setInterval(() => {
            setValue(RandomNumber());
        }, 100);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="bg-blue-500 justify-center items-center flex flex-col">
            {dice[value].icon}
            {dice[value].value}
        </div>
    )
   
}

function Result () {

    const [value, setValue] = useState(RandomNumber);

    return (
        <div className="bg-blue-500 justify-center items-center flex flex-col">
            {dice[value].icon}
            {dice[value].value}
        </div>
        
    )
}

export {Result, Animation};