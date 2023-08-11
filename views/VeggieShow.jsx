import React from 'react'

function VeggieShow(props) 
{
    const veggies = props.veggie
return (
    <div>
        <h1>ShowPage</h1>
        <h3>the {veggies.name} is {veggies.color}</h3>
        <h1>{veggies.readyToEat ? "Its ready to eat" : "Its not ready yet"}</h1>
    </div>
)
}


export default VeggieShow