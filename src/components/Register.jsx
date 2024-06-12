import { useContext,  useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
        .then(data =>{
            console.log(data);
            from.reset('')
            navigate(from, {replace:true})
        }).catch(err =>{
          console.log(err.message);
          setError(err.message)
        })
            
    }

   
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col w-10/12">
                <div className="text-center mt-16">
                    <h1 className="text-5xl font-bold ">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered text-black" required />
                           
                        </div>
                        <div className="mt-2">
                            {error && <p className="text-red-500 ">{error.split(` `)[8]}</p>}
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;