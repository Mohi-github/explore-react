import Box from "./Box.css";

export default function Show({user}){
    const {name,email}=user;
    return(
        <div className="box">
            Name:{name}
            Email:{email}
        </div>
    )
}