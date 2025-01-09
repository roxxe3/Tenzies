import Dice from "./Dice"

export default function App() {
  
  return (
    <>
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div>
    <Dice />
    </div>
    </>
)
}

