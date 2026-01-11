import Die from "./components/Die.js"
import {useState} from "react"
import {nanoid} from "nanoid"

function generateallNewDice(){
    const randomNumbers = []

    for(let i = 0; i < 10; i++){
      const randomNumber = {value: Math.floor(Math.random() * 6), isHeld: false, id:nanoid()};
      randomNumbers.push(randomNumber)
    }
    return randomNumbers
  }

function App() {
  const [dice, setDice] = useState(generateallNewDice())

  function handleReRoll(){
    setDice(prevDice => 
      prevDice.map(prevDie => {
        if(prevDie.isHeld === true){
          return prevDie
        }
        else {
          return {
            ...prevDie,
            value: Math.floor(Math.random() * 6)
          }
        }
      })
    )
  }

  function hold(id){
    setDice(prevDice => 
       prevDice.map(prevDie => {
        if (prevDie.id === id){
          return {
            ...prevDie,
            isHeld: !prevDie.isHeld
          }
        }
        return prevDie
      })
    )
     console.log(id)
  }

  const diceElements = dice.map(num => (
  <Die key={num.id}
       number={num.value} 
       isHeld={num.isHeld} 
       hold={hold} 
       id={num.id}
       />
      )
    )

  return (
    <main>
      <header><h1>Tenzies</h1></header>
      <p>Roll until all dice are the same. Click Each die to freeze it at its current value between rolls</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="re-roll" onClick={handleReRoll}>Re-Roll the dice</button>
    </main>
  );
}

export default App;
