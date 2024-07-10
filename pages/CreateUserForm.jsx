import { useForm } from "react-hook-form";
import { registration } from "@/api";


export default function CreateUserForm() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(data) {
 
    try {
      const response = await registration(data.name, data.email, data.password);
      
      if (response) {
        // Apartados para sonner
        console.log("Registrado correctamente");
      }else{
        // Apartado para sonner
        console.log("Las credenciales ya estan en uso")
      }
      
    } catch (error) {
      console.error("Error al registrar: ", error)
    }
 
  }
  return (
    <main className="bg-white min-h-screen p-12 ">
      <section className="flex justify-center">
        <div className=" p-10 border border-[color:var(--border-color)] w-2/5 rounded-lg">
          <h1 className="text-[Helvetica] font-bold mb-8 text-lg text-[#171717]">
            Create your account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-[color:var(--border-color-input)] rounded-lg"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-[color:var(--border-color-input)] rounded-lg"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className="w-full p-2 border border-[color:var(--border-color-input)] rounded-lg"
                type="text"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password-confirmation">
                Password Confirmation
              </label>
              <input
                className="w-full p-2 border border-[color:var(--border-color-input)] rounded-lg"
                type="text"
                {...register("pasword-confirmation", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            <div>
              <input
                className="p-2 px-5 bg-[color:var(--button-color)] rounded-lg text-[color:var(--text-button-color)] hover:bg-[#2F3AB2]"
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
