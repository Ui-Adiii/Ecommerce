import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({ settoken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        settoken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium tex-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="rounded border border-gray-300 w-full px-3 py-2 outline-none"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium tex-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="rounded border border-gray-300 w-full px-3 py-2 outline-none"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
