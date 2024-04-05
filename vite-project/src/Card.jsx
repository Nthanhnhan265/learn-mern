import demo from "./assets/demo.png";
function Card() { 
    return (
        <div className="card">
            <img className="cardImg" src={demo} />
            <h2 className="cardTitle">Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere dignissimos assumenda autem modi nostrum repellendus,</p>
        </div>
    ) 
}
export default Card; 