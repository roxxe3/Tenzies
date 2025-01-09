import { useState } from "react"

export default function Dice() {
    function generateDices(){
        const dicesObj = {};
        for (let i = 0; i < 10; i++) {
            const value = Math.floor((Math.random() * 6) + 1);
            dicesObj[`dice${i + 1}`] = {
                value: value,
                isChosen: false
            }
        }
        console.log(dicesObj)
        return dicesObj
    }

    const [dices, setDices] = useState(generateDices)
    const dicesBtn = dices.map(dice => <button className="dice">{dice}</button>)
    return (
        <>
        {dicesBtn}
        <button className="roll" onClick={()=> setDices(generateDices)}>Roll</button>
        </>
    )
}