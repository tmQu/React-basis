import './dice.css'
import { useState } from 'react';

function GuessInput(props)
{
    function getGuess(e)
    {
        console.log(e.target);
        var guess = e.target.value;

        var parent = e.target.parentNode;
        parent.classList = ['input-guess'];
        if (guess == '')
            return;

        if (guess == props.dice)
        {
            parent.classList.add('correct');
        }
        else{
            parent.classList.add('incorrect');

        }
    }
    return (
        <div class = 'input-guess'>
            <input type="number" onChange={getGuess}></input>
        </div>
    )
}

function Dice()
{
    var [dice, setDice] = useState(1)
    function rollDice(e)
    {
        var randomNumber =  Math.floor(Math.random() * 6 + 1);
        setDice(randomNumber);
    }
    return (
        <>
        <div class="container">
            <div class='dice'>
                <img src={'./images/dice' + dice + '.png'}/>
                <div class='overlay'>Make your guess before hover</div>
            </div>
            <button onClick={rollDice}>ROLL</button>
        </div>
        <GuessInput dice={dice}/>
        </>

    )
}

export default Dice;