import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { data } from 'react-router'
type Inputs = {
    type: string,
    link: string,
    title: string,
    tags: string
  }
type Content = {
    type: string,
    link: string,
    title: string,
    tags: string[]
}

const AddLink = () => {
    const [message,setMessage] = useState("");
    const { register,handleSubmit, reset } = useForm<Inputs>()
    let onSubmit = async(data: Inputs)=>{
        let tagsArray:string[] = data.tags.split(",")
        let content: Content = {
            type: data.type,
            link: data.link,
            title: data.link,
            tags: tagsArray
        }
        let token = localStorage.getItem("token");
        if(!token){
            return;
        }
        let response = await fetch("http://localhost:3000/api/v1/content",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
            body:JSON.stringify(content)
        })

        let Data = await response.json();
        console.log(Data);
        if(Data.message){
            reset();
        }else{
            setMessage("Something went wrong");
        }
        
    }
    return (
        <div className='w-[100%] h-[92%]'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">Submit Data</h2>
                
                <label className="block mb-2 text-gray-700">Link</label>
                <input {...register("link")} type="url" className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter link" required />

                <label className="block mb-2 text-gray-700">Type</label>
                <input {...register("type")} type="text" className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter type" required />

                <label className="block mb-2 text-gray-700">Title</label>
                <input {...register("title")} type="text" className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter title" required />

                <label className="block mb-2 text-gray-700">Tags (enter in array)</label>
                <input {...register("tags")} type="text" name='tags[]' className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter tags" required />

                <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition">Submit</button>
            </form>
        </div>
    )
}

export default AddLink
