

export default function App() {
  return (
    <>
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div>
    <button className="dice">1</button>
    <button className="dice">2</button>
    <button className="dice">3</button>
    <button className="dice">4</button>
    </div>
    <div>
    <button className="dice">5</button>
    <button className="dice">6</button>
    <button className="dice">7</button>
    <button className="dice">8</button>
    </div>
    <button className="roll">Roll</button>
    </>
)
}

