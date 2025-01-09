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
        return dicesObj
    }

    const [dices, setDices] = useState(generateDices)
    const handleClick = (key) => {
        console.log("Button key:", key);
      };
    let dicesComp = []
    Object.values(dices).forEach((dice, index) => {
        dicesComp.push(<button onClick={handleClick} key={index + 1} className="dice"> {dice.value}</button>)
      });



    return (
        <>
        {dicesComp}
        <button className="roll" onClick={()=> setDices(generateDices)}>Roll</button>
        </>
    )
}