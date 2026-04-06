import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { loginUserFunc, googleSigninfunc } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  // The Demo Function
  // const handleDemoLogin = (role) => {
  //   if (role === 'admin') {
  //     setEmail("admin@homenest.com");
  //     setPassword("123456"); // Use your actual test credentials
  //   } else {
  //     setEmail("user@homenest.com");
  //     setPassword("123456");
  //   }
    
  //   // Optional: You can also auto-trigger the submit after a tiny delay
  //   // setTimeout(() => document.getElementById('login-btn').click(), 100);
  // };

  // Login functionality
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUserFunc(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successfully.");
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Google signin
  const handleGoogleSignin = () => {
    googleSigninfunc()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successfully.");
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-white">
      <div className="w-90 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-300">WELCOME BACK</h1>
        <p className="text-gray-500 dark:text-gray-200 text-sm mt-2 mb-6">
          Please enter your details for log in.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              // value={email} onChange={(e) => setEmail(e.target.value)}
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-lg border text-gray-800 dark:text-gray-300 border-gray-300 focus:outline-none focus:ring-2
               focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              // value={password} onChange={(e) => setPassword(e.target.value)}
              {...register("password", { required: true })}
              placeholder="**********"
              className="w-full mt-1 px-4 py-3 rounded-lg border text-gray-800 dark:text-gray-300 border-gray-300 focus:outline-none focus:ring-2
               focus:ring-blue-400"
            />
          </div>

          {/* Row */}
          <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
              <input type="checkbox" className="accent-blue-500 " />
              Remember me
            </label>

            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-blue-500">
              Forgot password
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-900 dark:bg-blue-600  hover:bg-blue-700 dark:hover:bg-blue-900 text-white py-3 rounded-lg font-medium transition"
          >
            Log in
          </button>
        </form>

        {/* Demo Buttons Section */}
       {/* <div className="space-y-3">
         <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest">
           Quick Explore
         </p>
         <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleDemoLogin('user')}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all border border-transparent hover:border-blue-400"
            >
              Demo User
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('admin')}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all border border-transparent hover:border-red-400"
            >
              Demo Admin
            </button>
         </div>
       </div> */}

        {/* Google Button */}
        <button
          onClick={handleGoogleSignin}
          className="mt-4 w-full flex items-center  justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50  transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700 dark:text-black">
            Log in with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link
            to={"/signup"}
            state={location.state}
            className="text-blue-500 font-medium cursor-pointer"
          >
            Sign up for free!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
