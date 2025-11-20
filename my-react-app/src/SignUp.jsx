// import React from 'react'
// import { Link } from 'react-router-dom'

// const SignUp = () => {
//   return (
    
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">


//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

//         <h2 className="text-3xl font-semibold text-center text-gray-800">
//           Create Account
//         </h2>

//         <div className="space-y-4">

//           <input 
//             type="text" 
//             placeholder="Enter your Name"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input 
//             type="email" 
//             placeholder="Enter your Email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input 
//             type="password" 
//             placeholder="Enter your Password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
//             Sign Up
//           </button>
//         </div>

//         <div className="text-center">
//           <p className="text-gray-600">
//             Already have an account?
//           </p>

//           <Link to="/login">
//             <button className="mt-2 w-full bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition">
//               Login
//             </button>
//           </Link>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default SignUp









import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    userName: "",
    email: "",
    passWord: ""
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  async function submitData() {
    try {
      console.log("DATA SENDING:", input);

      const res = await axios.post("http://localhost:4000/create", input);

      console.log("SERVER RESPONSE:", res.data);

      alert("Account created successfully!");

      // redirect to login
      navigate("/login");

    } catch (err) {
      console.log("ERROR:", err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Create Account
        </h2>

        <div className="space-y-4">

          {/* NAME */}
          <input 
            type="text" 
            name="userName"
            value={input.userName}
            onChange={handleInput}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* EMAIL */}
          <input 
            type="email"
            name="email"
            value={input.email}
            onChange={handleInput}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* PASSWORD */}
          <input 
            type="password"
            name="passWord"
            value={input.passWord}
            onChange={handleInput}
            placeholder="Enter your Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* BUTTON */}
          <button 
            onClick={submitData}
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link to="/login">
            <button className="mt-2 w-full bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition">
              Login
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default SignUp