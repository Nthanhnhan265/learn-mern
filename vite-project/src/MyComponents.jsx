import { useState } from "react"

function MyComponents() { 
    //declare variables
    let [name,setName] = useState("")
    let [quanity,setquanity] = useState(1)
    let [comment,setComment] = useState("")
    let [payment,setPayment] = useState("")
    let [shipping,setShipping] = useState("")

    //functions to handle onChange() 
    const handleNameChanged = (e)=>{ 
        setName(e.target.value)
    }
    const handleQuanityChanged = (e)=>{ 
        setquanity(e.target.value)
    }
    const handleCommentChanged = (e)=>{ 
        setComment(e.target.value)
    }
    const handlePaymentChanged = (e)=>{ 
        setPayment(e.target.value)
    }
    const handleShippingChanged = (e)=>{ 
        setShipping(e.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e)=> handleNameChanged(e)}/>
            <p>Name: {name}</p>
            <input type="text" value={quanity} onChange={(e)=> handleQuanityChanged(e)}/>
            <p>quanity: {quanity}</p>
            <textarea name="" id="" cols="30" rows="3" placeholder="Enter commnent" value={comment} onChange={(e)=>handleCommentChanged(e)}></textarea>
            <p>comment: {comment}</p>

            <select name="" id="" value={payment} onChange={(e)=>handlePaymentChanged(e)}>
                <option value="" disabled>select one</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>payment: {payment}</p>
            <label>
                <input type="radio" value="Delivery" checked= {shipping=="Delivery"} onChange={handleShippingChanged}/>
                Delivery
            </label>
            <label>
                <input type="radio" value="PickUp" checked= {shipping=="PickUp"} onChange={handleShippingChanged}/>
                Pick up
            </label>
            <p>Shiping: {shipping}</p>
        </div>
    ) 
}
export default MyComponents