import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [emailId, setEmailId] = useState("namratha@tinder.com");
    const [password, setPassword] = useState("Namratha@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        
        try{
            const res = await axios.post(
                "http://localhost:7777/login", 
                {
                emailId,
                password
                },
                {withCredentials : true}
        );
            dispatch(addUser(res.data));
            navigate('/')
        } catch(err) {
            console.log("ERROR : " + err.message)
        }
        
    }
    return (
<div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title justify-center">LogIn</h2>
            <div>
            <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                    <span className="label-text">EmailId : {emailId}</span>
                </div>
                <input 
                type="text" 
                value={emailId} 
                onChange={(e) => {setEmailId(e.target.value)}}
                className="input input-bordered w-full max-w-xs" 
                />
            </label>
            <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
                <input type="password"
                 value={password} 
                 onChange={(e) => {setPassword(e.target.value)}}
                 className="input input-bordered w-full max-w-xs" />
            </label>
            </div>
        <div className="card-actions justify-center m-2">
        <button className="btn btn-primary" onClick={handleLogin}>LogIn</button>
        </div>
        </div>
    </div>
</div>
     )
};

export default Login;