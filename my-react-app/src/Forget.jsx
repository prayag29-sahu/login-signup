import React, { useState } from 'react'
import axios from 'axios'

const Forget = () => {
  const [email, setEmail] = useState("");

  async function fun1(e) {
    e.preventDefault(); // page reload stop

    try {
      const res = await axios.post("http://localhost:4000/forgot-password", {
        email: email   // 🔥 backend expects { email }
      });

      console.log("SERVER RESPONSE:", res.data);
      alert("Reset link sent to your email.");
      
    } catch (error) {
      console.log("ERROR:", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/40 p-8 space-y-8">

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Forgot Password?</h1>
          <p className="text-gray-600 text-sm">Enter your email to get the reset link</p>
        </div>

        <form onSubmit={fun1} className="space-y-6">

          <div className="space-y-1">
            <label className="text-gray-700 font-medium">Email Address</label>
            <input 
              type="email"
              placeholder="Enter your email"
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 shadow-md transition"
          >
            Send Reset Link
          </button>

        </form>

      </div>
    </div>
  )
}

export default Forget;
