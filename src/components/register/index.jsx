import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      username,
      email,
      password,
      basket:[{productId:"",count:0}],
      wishList:[{productId:""}]
    };

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("User created succesfully");
     navigate('/login') 
    } 
      
    catch (error) {
      alert("Error creating user");
    }
  
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[128px] mb-[148px]">
        <button className="py-[9px] px-[71px] border border-[#B6B7BC] rounded-[4px] flex items-center justify-center flex-row gap-2">
          <img src="" alt="" />
          <p className="text-[14px] font-medium text-[#5C5F6A]">
            Continue with Google
          </p>
          <FaGoogle />
        </button>

        <div className="flex flex-row">
          <div className="border-[#E6E7E8] border mt-[40px] w-[136px] h-0 "></div>
          <h1 className="text-[12px] text-[#5C5F6A] font-medium my-8 mx-4">
            OR
          </h1>
          <div className="border-[#E6E7E8] border mt-[40px] w-[136px] h-0 "></div>
        </div>
        <form className="flex flex-col w-[320px]" onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="text-[14px] font-medium text-[#474B57] text-start"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]"
          />

          <label
            htmlFor="email"
            className="text-[14px] font-medium text-[#474B57] text-start"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]"
          />

          <label
            htmlFor="password"
            className="text-[14px] font-medium text-[#474B57] text-start"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]"
          />
          
          <label
            htmlFor="confirm-password"
            className="text-[14px] font-medium text-[#474B57] text-start"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]"
          />
          
          <div>
            <button className="bg-[#0E1422] py-3 px-6 w-full justify-center items-center gap-[6px] text-[#FFFFFF] text-[14px] hover:bg-[#0075ff] font-medium rounded-[4px] flex ">
              Create Account
            </button>
          </div>
          <Link to={"/login"}>
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;