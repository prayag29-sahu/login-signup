import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Reset = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  async function resetPass(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/reset-password/${resetToken}`,
        { newPassword: password }
      );

      alert("Password reset successful!");

      // 🔥 Redirect to Login
      navigate("/login");

    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-6">
        
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>

        <form onSubmit={resetPass} className="space-y-5">

          <input 
            type="password" 
            placeholder="Enter new password"
            className="w-full px-4 py-3 border rounded-xl"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            Reset
          </button>
        </form>

      </div>
    </div>
  );
};

export default Reset;
