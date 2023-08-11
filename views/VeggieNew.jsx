import React from 'react'

function VeggieNew() {
return (
<div>
<form action='/veggies' method='Post'>
Name: <input type='text' name="name"/>
<br/>
Color: <input type="text" name="color" />
<br/>
Ready to Eat: <input type='checkbox' name='readyToEat'/>
<br/>
<input type="submit" name="" value="Create Veggie"/>
</form>
</div>
)
}

export default VeggieNew