
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";


const MainForm = () => {
    const [data,setData] = useState({name: "", room:""})
    const [error,setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        // Check if the user is logged in by checking for token in localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");  // If no token, redirect to login page
        }
      }, [navigate]);  useEffect(() => {
        // Check if the user is logged in by checking for token in localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");  // If no token, redirect to login page
        }
      }, [navigate]);

    const handleChange = (e) => {
        console.log(e.target.name,e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const validation = () => {
        if(!data.name){
            setError("Please enter your name")
            return false
        }
        if(!data.room){
            setError("Please select a room")
            return false
        }
        setError("")
        return true
    }

const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validation()
    if(isValid){
        navigate(`/chat/${data.room}`, {state: data})
    }
}

  return (
    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
<form onSubmit={handleSubmit}>
    <div className="form-group mb-4">
        <h2 className="text-warning mb-4">Welcome to Chatclub</h2>
    </div>
    <div className="form-group mb-4">
        <input type="text" className="form-control bg-light" placeholder="Enter your name" name="name" onChange={handleChange}/>
    </div>
    <div className="form-group mb-4">
        <select className="form-control bg-light" name="room" onChange={handleChange}>
            <option value="">Select Room</option>
            <option value="gaming">Gaming</option>
            <option value="coding">Coding</option>
            <option value="socialMedia">Social Media</option>
        </select>
    </div>
    <button type="submit" className="btn btn-warning w-100 mb-2">Submit</button>
{error && <p className="text-danger">{error}</p>}
</form>
    </div>
  )
}

export default MainForm