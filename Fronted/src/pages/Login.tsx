import { useForm } from "react-hook-form";
import { useAuthStore } from "../stores/auth.stores";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../interfaces/user.interface";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } = useForm<Login>();
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.loginUser);

  const onSubmit = async (data: Login) => {
    try {
      await loginUser(data.userName, data.password);
      navigate("/");
      toast.success("Login successful!");
    } catch (error) {
      if (error === "Unauthorized") {
        toast.error("Invalid Username or Password");
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <h1 className="text-center text-4xl font-medium">User Managements</h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-10"
          >
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                required
                {...register("userName")}
                type="text"
                placeholder="Username"
                autoComplete="off"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                required
                {...register("password")}
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-800"
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-center text-lg">
          Don't have an account?
          <Link
            to={"/register"}
            className="font-medium text-indigo-500 underline-offset-4 hover:underline ml-2"
          >
            Register
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
