import { useForm } from "react-hook-form";
import { Register } from "../interfaces/user.interface";
import { useRegisterUser } from "../hooks/mutations/user.mutations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit, reset } = useForm<Register>();
  const navigate = useNavigate();
  const registerMutation = useRegisterUser();

  const onSubmit = async (data: Register) => {
    try {
      await registerMutation.mutateAsync(data);
      reset();
      navigate("/login");
      toast.success("Successful user registration!");
    } catch (error) {}
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <h1 className="text-center text-5xl font-abhaya font-bold">
          Users Management
        </h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-10"
          >
            {/* Group first name and last name */}
            <div className="flex space-x-4">
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First name"
                  autoComplete="off"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last name"
                  autoComplete="off"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
            </div>

            {/* Group username and email */}
            <div className="flex space-x-4">
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  {...register("userName")}
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
            </div>

            {/* Password and address remain unchanged */}
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                autoComplete="off"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="transform rounded-sm bg-indigo-700 py-2 duration-300 hover:bg-indigo-800 font-bold"
            >
              Register
            </button>
          </form>
        </div>
        <p className="text-center text-lg">
          Already have an account?
          <Link
            to={"/login"}
            className="font-medium text-indigo-500 underline-offset-4 hover:underline ml-2"
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
