import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isMatchPass, setIsMatchPass] = useState(null);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  useEffect(() => {
    if (!password || !confirmPass) {
      setIsMatchPass(null);
    } else {
      setIsMatchPass(password === confirmPass);
    }
  }, [password, confirmPass]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Submitted Successfully`);
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
            {...register("text", {
              required: "Name is required",
            })}
          />
        </div>
        {errors.text && (
          <p className="text-xs text-red-500">{errors.text.message}</p>
        )}

        

        <div className="bg-[] p-1 flex justify-between items-center">
          <label className="text-gray-600" htmlFor="">
            Password:{" "}
          </label>
          <input
            className="border border-gray-500 outline-none focus:ring-2 focus:ring-blue-500 rounded-[3px]"
            type="password"
            name=""
            id=""
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Need atleast 4 characters",
              },
              maxLength: {
                value: 12,
                message: "Need most 12 characters",
              },
            })}
            onChange={(e) => {
              handlePassword(e);
            }}
          />
        </div>
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-[3px] mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
