import React, { useState } from 'react';
import _, { attempt } from 'lodash';

import CharacterCard from './CharacterCard';

var answer;

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
   
export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    answer = state.guess;

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('You Win!')
                setState({...state, guess: '', completed: true})
                alert("You Win!")
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                alert("Please try again.")
            }
        }
    }
           

    return (
        <div> <br></br><b2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 𝑌𝑜𝑢𝑟 𝐴𝑛𝑠𝑤𝑒𝑟 : {answer} </b></b2><br></br>
           { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    )
            }
        </div>
    );
}




