import Die from "./components/Die.js"
import {useState} from "react"

function generateallNewDice(){
    const randomNumbers = []

    for(let i = 0; i < 10; i++){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      randomNumbers.push(randomNumber)
    }
    return randomNumbers
  }

function App() {
  const [dice, setDice] = useState(generateallNewDice())

  function handleReRoll(){
    setDice(generateallNewDice())
  }

  const diceElements = dice.map(num => <Die number={num}/>)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      
      <button className="re-roll" onClick={handleReRoll}>Re-Roll the dice</button>
    </main>
  );
}

export default App;
