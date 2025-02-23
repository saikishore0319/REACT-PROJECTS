import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";


function Login(){

    const [username, setUsername] = useState('');
    const [password , setPassword] =    useState('');
    
    const { setUser } = useContext( UserContext );

    const HandleLogin =(e) =>{
        e.preventDefault();
        console.log("setting user", {username, password});
        setUser({username, password});
    };
    return(
        <div>
            <h2>Login</h2>

            <input type="text" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="User name"
             />
            <input type="text" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password" 
            />

            <button
            onClick={HandleLogin}
            >Login</button>

        </div>       
    );
}

export default Login;