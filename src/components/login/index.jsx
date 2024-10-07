import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../../store/store";



const Login = () => {
  const {setLogin}=useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        alert("Login successfull");
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userEmail", user.email);
        setLogin(true);
        navigate("/")
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Error fetching users");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[128px] mb-[148px]">
        <button className="py-[9px] px-[71px] border border-[#B6B7BC] rounded-[4px] flex items-center justify-center flex-row gap-2">
          <FaGoogle />
          <p className="text-[14px] font-medium text-[#5C5F6A]">
            Continue with Google
          </p>
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

          <Link
            to={"#"}
            className="text-[12px] text-[#474B57] font-medium text-end mb-6"
          >
            Forgot Password?
          </Link>

          <div>
            <button className="bg-[#0E1422] py-3 px-6 w-full justify-center items-center gap-[6px] text-[#FFFFFF] text-[14px] hover:bg-[#0075ff] font-medium rounded-[4px] flex ">
              Login
            </button>
          </div>

          <Link
            to={"/register"}
            className="text-[14px] font-normal text-[#5C5F6A] mt-6 text-center"
          >
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;