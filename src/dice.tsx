import icon from './icons.tsx';
import { useState, useEffect } from 'react';


const DiceProp : string = `
h-60 w-50
text-8xl
text-white
justify-center items-center 
flex flex-col`

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

function Animation({randomNumber}: {randomNumber: () => number}) {

    const [value, setValue] = useState(randomNumber());

    useEffect(() => {

        const interval = setInterval(() => {
            setValue(randomNumber());
        }, 100);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className={DiceProp}>
            {dice[value].icon}
            {dice[value].value}
        </div>
    )
   
}

function Dice({number}: {number: number}) {

    return (
        <div className = {DiceProp}>
            {dice[number].icon}
            {dice[number].value}
        </div>
    )
}

function Result ({loading, randomNumber, number}: {loading: boolean, randomNumber: () => number, number: number}) {

    if (loading) {
        return <Animation randomNumber={randomNumber} />;

    } else {
        return <Dice number={number} />
    }

    
}

export {Result, Animation};