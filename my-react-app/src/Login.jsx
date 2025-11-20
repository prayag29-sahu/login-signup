// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const Login = () => {
//   const [input, setInput] = useState({
//     email: "",
//     passWord: ""
//   });

//   function loginFun(e) {
//     const { name, value } = e.target;
//     setInput(prev => ({ ...prev, [name]: value }));
//   }

//   async function done() {
//     try {
//       console.log("DATA GOING TO BACKEND:", input);

//       const res = await axios.post("http://localhost:4000/login", input);
//       console.log("SERVER RESPONSE →", res.data);

//     } catch (error) {
//       console.log("ERROR:", error);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">

//       <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-white/40 space-y-8 transition-all">

//         <div className="text-center space-y-1">
//           <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
//           <p className="text-gray-500">Login to continue</p>
//         </div>

//         <div className="space-y-5">

//           {/* Email */}
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700">Email</label>
//             <input 
//               type="email"
//               name="email"
//               onChange={loginFun}
//               value={input.email}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 
//               focus:ring-blue-600 focus:outline-none transition-all"
//             />
//           </div>

//           {/* Password */}
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700">Password</label>
//             <input 
//               type="password"
//               name="passWord"
//               onChange={loginFun}
//               value={input.passWord}
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 
//               focus:ring-blue-600 focus:outline-none transition-all"
//             />
//           </div>

//           {/* Login button */}
//           <button 
//             onClick={done}
//             className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold 
//             hover:bg-blue-700 active:scale-95 shadow-md transition-all"
//           >
//             Login
//           </button>

//           {/* Forget password link */}
//           <div className="text-right">
//             <Link to="/forget" className="text-blue-600 text-sm hover:underline">
//               Forgot password?
//             </Link>
//           </div>

//         </div>

//         {/* Footer Navigation */}
//         <div className="text-center text-gray-600">
//           Don’t have an account?
//           <Link to="/" className="text-blue-600 font-semibold ml-1 hover:underline">
//             Sign Up
//           </Link>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Login;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    passWord: ""
  });

  const [moveStyle, setMoveStyle] = useState("");

  const effects = [
    "translate-x-24",      // right bhaago
    "-translate-x-24",     // left bhaago
    "-translate-y-4",      // jump up
    "translate-y-4",       // jump down
    "rotate-12",           // rotate right
    "-rotate-12",          // rotate left
    "scale-75",            // shrink
    "opacity-0",           // disappear
    "animate-pulse",       // pulse shake
    "animate-bounce"       // bounce funny
  ];

  function loginFun(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  function funnyMove() {
    if (input.email === "" || input.passWord === "") {
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      setMoveStyle(randomEffect);
    } else {
      setMoveStyle(""); // normal ho jao
    }
  }

  async function done() {
    try {
      console.log("DATA GOING TO BACKEND:", input);

      const res = await axios.post("http://localhost:4000/login", input);
      console.log("SERVER RESPONSE →", res.data);

    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-100 to-gray-200 p-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl 
      rounded-3xl p-8 border border-white/40 space-y-8 transition-all">

        <div className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500">Login to continue</p>
        </div>

        <div className="space-y-5">

          {/* Email */}
          <div className="space-y-1">
            <label className="font-medium text-gray-700">Email</label>
            <input 
              type="email"
              name="email"
              onChange={loginFun}
              value={input.email}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white 
              focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="font-medium text-gray-700">Password</label>
            <input 
              type="password"
              name="passWord"
              onChange={loginFun}
              value={input.passWord}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white 
              focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            />
          </div>

          {/* FUNNY LOGIN BUTTON */}
          <button 
            onMouseEnter={funnyMove}
            onClick={done}
            className={`w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold 
              hover:bg-blue-700 active:scale-95 shadow-md transition-all duration-300 ease-in-out
              ${moveStyle}
            `}
          >
            {moveStyle === "" ? "Login" : "Pehle Form Bhar Bhai 😜"}
          </button>

          {/* Forget password link */}
          <div className="text-right">
            <Link to="/forget" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </Link>
          </div>

        </div>

        {/* Footer Navigation */}
        <div className="text-center text-gray-600">
          Don’t have an account?
          <Link to="/" className="text-blue-600 font-semibold ml-1 hover:underline">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login;
