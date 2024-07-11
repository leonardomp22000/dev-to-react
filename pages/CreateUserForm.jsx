import { useForm } from "react-hook-form";
import { registration } from "@/api";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";


export default function CreateUserForm() {
  const router = useRouter()
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    try {
      const response = await registration(data.name, data.email, data.password);

      if (response) {
        // Apartados para sonner
        console.log("Registrado correctamente");
        reset()
        router.push('/Login')
        
      } else {
        // Apartado para sonner
        console.log("Las credenciales ya estan en uso");
      }
    } catch (error) {
      console.error("Error al registrar: ", error);
    }
  }
  const password = watch("password");

  // Updating the screen with a past event or the logical order
  const [showHidePass, setShowHidePass] = useState(true);
  function handleVisiblePassword() {
    setShowHidePass(!showHidePass);
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
                className={clsx(
                  "w-full p-2 border border-[color:var(--border-color-input)] rounded-lg",
                  { "border border-red-600 bg-red-100": errors.name }
                )}
                type="text"
                {...register("name", {
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 letras",
                  },
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className={clsx(
                  "w-full p-2 border border-[color:var(--border-color-input)] rounded-lg",
                  { "border border-red-600 bg-red-100": errors.email }
                )}
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                    message: "No es un correo valido",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className={clsx(
                  "w-full p-2 border border-[color:var(--border-color-input)] rounded-lg",
                  { "border border-red-600 bg-red-100": errors.password }
                )}
                type={showHidePass ? "password" : "text"}
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "La contraseña debe ser de al menos 6 caracteres",
                  },

                  maxLength: {
                    value: 20,
                    message: "La contraseña debe tener menos de 20 caracteres",
                  },
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
              <input
                className={clsx(
                  "w-full p-2 border border-[color:var(--border-color-input)] rounded-lg",
                  {
                    "border border-red-600 bg-red-100":
                      errors.passwordConfirmation,
                  }
                )}
                /* DIFERENTES FORMAS DE ESCRIBIR EL CALLBACK DE VALIDACION

                value => {
                    return value === password || "The passwords do not match";
                }


                value => value === password ? true : "The passwords do not match";


                value => {
                    if (value === password) {
                          return true;
                    } else {
                          return "The passwords do not match";
                    }
                }

                value => value === password || undefined ----> Este ultimo es una mala practica para la lectura del codigo
                
                */
                type={showHidePass ? "password" : "text"}
                {...register("passwordConfirmation", {
                  validate: (value) =>
                    value === password || "El password no coincide",

                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            </div>

            {errors.passwordConfirmation && (
              <p className="text-red-600">
                {errors.passwordConfirmation?.message}
              </p>
            )}
            <span className="p-2 w-2/5 " onClick={handleVisiblePassword}>
              {" "}
              {showHidePass ? "Mostrar" : "Ocultar"} password
            </span>
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
