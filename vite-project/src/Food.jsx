function Food(){ 
    const arrFoods=[
        {name:"orange",color:"orange"},
        {name:"apple",color:"green"},
        {name:"mango",color:"yellow"},
    ]

    
    return (
        <ul>
            <li>name: {arrFoods[0].name},color: {arrFoods[0].color}</li>
            <li>name: {arrFoods[1].name},color: {arrFoods[1].color}</li>
            <li>name: {arrFoods[2].name},color: {arrFoods[2].color}</li>
        </ul>
    )
}
export default Food