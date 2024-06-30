import React from 'react';

function App() {
  // state 
  const [diceValue, setDiceValue] = React.useState([
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    },
    {
      fix: false,
      value:0
    }
  ])

  // fixedFunc
  function fixedFunc(i){
    const diceValueCopy = diceValue.slice()
    diceValueCopy[i].fix = !diceValueCopy[i].fix
    setDiceValue(diceValueCopy)
  }

  // dies
  const dices = []
  for (let i=0; i<8; i++){
    dices.push(<button id={i} className={`dice ${diceValue[i].fix? "lock" : ""}`} onClick={()=>fixedFunc(i)}>{diceValue[i].value}</button>)
  }

  // random number
  function randomNumber(){
    return (Math.floor(Math.random() * 6) + 1)
  }

  //roll
  function roll(){
    setDiceValue(diceValue.map((preValue)=>{
      return {
        ...preValue,
        value: preValue.fix? preValue.value : randomNumber()
        }
      }))
  }

  function clickButton(){
    // judge1: all fixed?
    // judge2: all same?
    let judge1 = diceValue.every(item => item.fix === true)
    let judge2 = diceValue.every(item => item.value === diceValue[0].value)
    if (judge1 && judge2) {
      alert("successful!")
      // unfixed
      for (let i=0; i<diceValue.length;i++){
        fixedFunc(i)
      }
      roll()

    }
    else if (judge1) {
      alert("fixed but numbers not same")
    }
    else{
      roll()
    }
  }


    

  return (
    <div className="main">
      <div className="title">Tenzies</div>
      <div className="description">Roll unitl all dice are the same. Click each die to freeze it at its current value between rolls</div>
      <div className="dices">
        {dices}
      </div>
      <button className="button" onClick={clickButton}>Roll</button>
    </div>
  );
}

export default App;
