import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);

     const handleAdd=()=>{
        const newCnt = count+1;
        setCount(newCnt);
     }

     const handleSub=()=>{
        const newCnt = count-1;
        setCount(newCnt);
     }

     return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleSub}>Sub</button>
        </div>
     )

}