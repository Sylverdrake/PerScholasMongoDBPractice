import React from 'react'

function Show(props) 
{
    const fruit = props.fruit
return (
    <div>
        <h1>ShowPage</h1>
        <h3>the {fruit.name} is {fruit.color}</h3>
        <h1>{fruit.readyToEat ? "Its ready to eat" : "Its not ready yet"}</h1>
    </div>
)
}

export default Show