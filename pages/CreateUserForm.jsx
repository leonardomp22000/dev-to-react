import { registration } from "@/api";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { clsx } from "clsx";

export default function CreateUserForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  async function onSend(data) {
    console.log("Entra en la funcion");
    console.log(data);
    try {
      console.log(data);
      const response = await registration(data);
      if (response === true) {
        toast.success("Usuario creado");
        console.log("Success");
      } else {
        console.log("Algo paso");
      }
    } catch (error) {
      toast.error("Error al crear usuario");
      console.error("Login error", error);
    }
  }

  return (
    <main className="flex justify-center p-10 w-full  ">
      
      <section className="p-8 bg-white w-2/5">
        <h1 className="text-[Helvetica], text-lg font-semibold text-[#171726] mb-4">
          Create your account
        </h1>

        <form onSubmit={handleSubmit(onSend)} action="">
          <div className="flex flex-col w-full my-4">
            {/* <label  htmlFor="name"> 
              Nombre <span className="text-red-600 text-xs">*</span>{" "}
            </label>
            */}
            <input
              className="font-Helvetica text-base rounded-md px-4 border border-[#A3A3A3] focus:border-2 focus:border-[#0000FF] focus:outline-none p-1"
              type="text "

              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre de usuario requerido",
                },
              })}
            />
          </div>

          <div className="flex flex-col w-full my-4">
            {/* <label className="" htmlFor="email">
              Email <span className="text-red-600 text-xs">*</span>
            </label>*/}

            <input
              className="font-Helvetica text-base rounded-md px-4 border border-[#A3A3A3] focus:border-2 focus:border-[#0000FF] focus:outline-none p-1"
              type="text "
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email requerido",
                },
              })}
            />
          </div>
          <div className="flex flex-col w-full my-4">
            {/*  <label className="" htmlFor="password">
              Password <span className="text-red-600 text-xs">*</span>
            </label>*/}

            <input
              className="font-Helvetica text-base rounded-md px-4 border border-[#A3A3A3] focus:border-2 focus:border-[#0000FF] focus:outline-none p-1"
              type="text "
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "email requerido",
                },
              })}
            />
          </div>
          <div className="flex flex-col w-full my-4">
            {/*
                <label className="" htmlFor="passwordConfirmation">
              Password Confirmation{" "}
              <span className="text-red-600 text-xs">*</span>
            </label>
             */}

            <input
              className="font-Helvetica text-base rounded-md px-4 border border-[#A3A3A3] focus:border-2 focus:border-[#0000FF] focus:outline-none p-1"
              type="text "
              id="passwordConfirmation"
              {...register("passwordConfirmation", {
                required: {
                  value: true,
                  message: "email requerido",
                },
              })}
            />
          </div>

          <button type="submit"  className=" p-2 px-4 text-white bg-[#3B49DF] rounded-lg">
            Sign Up
          </button>
          
        </form>

    
      </section>
    </main>
  );
}
