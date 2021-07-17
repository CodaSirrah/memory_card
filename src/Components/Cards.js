import React, { useState } from 'react';
import Info from '../Assets/CardInfo'
import Score from './Score'

let numbersDisplayed = [];
let numbersPicked = [];
let newCard = null;
let counter = 1;

const NUM_GEN = () => {
  let number = null;
    if (counter === newCard) {
      do {
        number = Math.round(Math.random() * 18);
      }
      while (numbersPicked.includes(number) || numbersDisplayed.includes(number))
    }
    else {
      do {
        number = Math.round(Math.random() * 18);
      }
      while (numbersDisplayed.includes(number))
    }
    numbersDisplayed.push(number);
    counter +=1;
    return number;
}

const Cards = () => {
  const [card1, setCard1] = useState(NUM_GEN);
  const [card2, setCard2] = useState(NUM_GEN());
  const [card3, setCard3] = useState(NUM_GEN());
  const [card4, setCard4] = useState(NUM_GEN());
  const [score, setScore] = useState(0);

  const INCREMENT_SCORE = () => {
    setScore(score + 1);
  }

  const RESET_SCORE = () => {
    setScore(0);
  }

  const CHANGE_CARDS = (e) => {
    numbersDisplayed = [];
    counter = 1;  
    if (score >= 2) {
      newCard = Math.ceil(Math.random() * 4);
      console.log(newCard);
    }
    if (numbersPicked.includes(parseInt(e.target.dataset.number))) {
      RESET_SCORE();
      numbersPicked = [];
    } else {
      numbersPicked.push(parseInt(e.target.dataset.number));
      console.log(numbersPicked);
      INCREMENT_SCORE();
    }
    if (score === 18) {
      numbersPicked = [];
      RESET_SCORE();
    }
    setCard1(NUM_GEN());
    setCard2(NUM_GEN());
    setCard3(NUM_GEN());
    setCard4(NUM_GEN());
  }

  return(
    <div>
      <Score currentScore={score} />
      <div id='card-container'>
        <div className='Cards'>
          <img className= 'card-image' src={Info[card1][0]} alt='' data-number={card1} onClick={CHANGE_CARDS} />
          <p className='card-title'>{Info[card1][1]}</p>
        </div>
        <div className='Cards'>
          <img className= 'card-image' src={Info[card2][0]} alt='' data-number={card2} onClick={CHANGE_CARDS}/>
          <p className='card-title'>{Info[card2][1]}</p>
        </div>
        <div className='Cards'>
          <img className= 'card-image' src={Info[card3][0]} alt='' data-number={card3} onClick={CHANGE_CARDS}/>
          <p className='card-title'>{Info[card3][1]}</p>
        </div>
        <div className='Cards'>
          <img className= 'card-image' src={Info[card4][0]} alt='' data-number={card4} onClick={CHANGE_CARDS}/>
          <p className='card-title'>{Info[card4][1]}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
