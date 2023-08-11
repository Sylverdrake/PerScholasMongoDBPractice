import React from 'react'

function New() {
return (
<div>
<form action='/fruits' method='Post'>
Name: <input type='text' name="name"/>
<br/>
Color: <input type="text" name="color" />
<br/>
Ready to Eat: <input type='checkbox' name='readyToEat'/>
<br/>
<input type="submit" name="" value="Create Fruit"/>
</form>
</div>
)
}

export default New