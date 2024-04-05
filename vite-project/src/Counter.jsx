import React, { useState } from "react"

function Counter() { 
    
    let [count,setCount] = useState(0);
    const insNum = ()=> { 
        setCount(count++)
    }
    const desNum = ()=> { 
        setCount(count--)
    }
    const resetNum = ()=> { 
        setCount(0)
    }

    return (
        <div className="container">
            <div className="displayed">
                <p>{count}</p>
            </div>
            <div className="containtButton">
                <button onClick={insNum}>+</button>
                <button onClick={resetNum}>reset</button>
                <button onClick={desNum}>-</button>
            </div>
        </div>
    )
}
export default Counter