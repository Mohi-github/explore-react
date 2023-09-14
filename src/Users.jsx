import { useEffect, useState } from "react";
import Show from "./Show";

export default function Users(){

    const [users,setUsers]=useState([]);//initially no users..

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[])


    return(
        <div>
            <h1>hey</h1>
            <h3>Users:{users.length}</h3>
            {
                users.map(u =><Show user={u}></Show>)
            }
        </div>
    )
}