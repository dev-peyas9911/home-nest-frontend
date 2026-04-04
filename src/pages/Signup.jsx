import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUserFunc, updateUserFunc, googleSigninfunc } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const onSubmit = async (data) => {
    const { name, photo, email, password } = data;
    // console.log(photo);

    // image upload to imagebb
    const imageFile = photo[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    // console.log(formData);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData,
      );
      const imageUrl = data.data.url;

      createUserFunc(email, password)
        .then((res) => {
          // console.log(res.user);
          updateUserFunc(name, imageUrl);
          toast.success("Sign up Successfully.");
          navigate(from);
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message == "Firebase: Error (auth/email-already-in-use).") {
            toast.error(
              "Account already created with this email. Please login",
            );
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignin = () => {
    googleSigninfunc()
      .then((res) => {
        console.log(res.user);
        toast.success("Sign up Successfully.");
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-90 bg-white p-8 rounded-2xl shadow-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">New Here?</h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">
          Please create your account with your details.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          {/* Photo */}
          <div>
            <label className="text-sm text-gray-700">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              placeholder="Choose your photo"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          {/* Email */}
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="**********"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Row */}
          {/* <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              Remember me
            </label>

            <button type="button" className="text-gray-500 hover:text-red-500">
              Forgot password
            </button>
          </div> */}

          {/* Sign up Button */}
          <button
            type="submit"
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
          >
            Sign up
          </button>
        </form>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignin}
          className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700">
            Sign up with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-red-500 font-medium cursor-pointer"
          >
            Log in for free!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
