import React from 'react'

function VeggieIndex(props) {
    const veggies = props.allVeggies
return (
    <div>
    <nav>
        <a href="/veggies/new">Create a New Veggie</a>
    </nav>
    {veggies.map((veggie, i) => {
        return (
        <div key={i}>
            <a href={`/veggies/${veggie._id}`}>
            <h2>{veggie.name}</h2>
            </a>
        </div>
        );
    })}
    </div>
);
}


export default VeggieIndex