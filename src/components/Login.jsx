import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContext";

function Login() {

  const { user, login } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    login(data.name)
  };

  return (
    <div className="border w-80 h-auto p-5 flex flex-col justify-center items-center gap-5 border-gray-400 shadow-md rounded-[8px]">
      <h1 className=" text-xl">Login</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)} className="bg-[]">
        <div className="bg-[] p-1 flex justify-between items-center">
          <label className="text-gray-600" htmlFor="">
            Name:{" "}
          </label>
          <input
            className="border border-gray-500 outline-none focus:ring-2 focus:ring-blue-500 rounded-[3px]"
            type="text"
            name=""
            id=""
            {...register("name", {
              required: "Name is required",
            })}
          />
        </div>
        {errors.name && (
          <p className="text-xs text-red-500">{errors.text.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-[3px] mt-5"
        >
          Submit
        </button>
      </form>
      {user.isAuth && <p>User is active</p>}
    </div>
  );
}

export default Login;
