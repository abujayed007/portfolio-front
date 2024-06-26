import { useContext,  useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [error ,setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logIn(email, password)
        .then(data =>{
            console.log(data);
            form.reset('')
            navigate(from, {replace:true})
        }).catch(err =>{
          
          setError(err.message)
        })
    }

    

    return (
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-10/12">
                    <div className="text-center  mt-16">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />
                              
                            </div>
                            {error && <p className="text-red-500 ">{error.split(' ')[2]}</p>}
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;