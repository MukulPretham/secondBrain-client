import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { logAtom } from "../atoms/log"
import { useNavigate } from "react-router"
import { hostAtom } from "../atoms/host"

type Inputs = {
    username: string
    password: string
  }

const SignIn = () => {
    let navigate = useNavigate();
    const { register,handleSubmit } = useForm<Inputs>()
    const [errors,setErrors] = useState("");
    const setLogged = useSetRecoilState(logAtom);
    const [loading,setLoading] = useState(false);
    let hostUrl = useRecoilValue(hostAtom);
    

    let onSubmit = async(data: Inputs)=>{
        setLoading(true);
        let response = await fetch(`${hostUrl}api/v1/signIn`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }
        );
        let Data = await response.json();
        if(Data.token){
            let token = Data.token;
            localStorage.setItem("token",token);
            setLogged(true);
            navigate("/");
        }else{
            setErrors(Data.message);
        }
        setLoading(false);
    }

    return (
        <div className='w-[100%] h-[92%] flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10 rounded-2xl bg-gray-600 shadow-2xl w-96'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>Sign In</h2>
                {errors&&<div>{errors}</div>}
                <input {...register("username")} type='text' name='username' placeholder='Username' className='w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' required />
                <input {...register("password")} type='password' name='password' placeholder='Password' className='w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' required />
                <button type='submit' className='w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;
