import { useForm, SubmitHandler } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { signUpErrors } from "../atoms/signUperr"
import { useState } from "react"
import { hostAtom } from "../atoms/host"

type Inputs = {
    username: string
    password: string
  }

const SignUp = () => {
    let errors = useRecoilValue(signUpErrors);
    let setErrors = useSetRecoilState(signUpErrors);
    const { register,handleSubmit } = useForm<Inputs>();
    let [loading,setLoading] = useState(false);
    let [messages,setMessages] = useState("");
    let hostUrl = useRecoilValue(hostAtom);

    let onSubmit = async(data: Inputs)=>{
        console.log(data);
        setLoading(true);
        let response = await fetch(`${hostUrl}api/v1/signUp`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        let Data = await response.json()
        console.log(Data);
        if(response.status !== 200){
            let errors = [];
            errors = Data.issues;
            for (const e of errors) {
                setErrors(e.message);
            }
        }else{
            setMessages(Data.message);
        }
        setLoading(false);
    }

    return (
        <div className='w-[100%] h-[92%] flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10 bg-gray-600 rounded-2xl shadow-2xl w-96'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>Sign Up</h2>
                {loading&&<div>Loading...</div>}
                {errors&&<div>{errors}</div>}
                {messages&&<div>{messages}</div>}
                <input {...register("username")} type='text' name='username' placeholder='Username' className='w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' required />
                <input {...register("password")} type='password' name='password' placeholder='Password' className='w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' required />
                <button type='submit' className='w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;
