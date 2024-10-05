import { Link } from "react-router-dom";
import LogoForm from "../atoms/Form/LogoForm";
import { useForm } from "@tanstack/react-form";

export default function RegisterForm() {
  //Validacion de formulario
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Enviar los valores al backend
      console.log(value);
    },
  });

  return (
    <div className="bg-[--colorBlue1] h-screen text-[--colorWhite]">
      <div className="flex flex-col h-full justify-center items-center mx-auto">
        <h2 className="text-[--colorWhite] font-bold text-4xl mb-10">
          <LogoForm />
        </h2>
        <form
          className="text-center grid gap-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* Username */}
          <form.Field
            name="username"
            validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: ({ value }) =>
                value.length < 3 && "Nombre de usuario requiere 3 caracteres.",
            }}
            children={(field) => (
              <div className="flex flex-col gap-y-2 items-center">
                <input
                  className="w-60 p-2 text-center font-medium text-[--colorBlue2] rounded-lg rounded-tl-2xl rounded-br-2xl outline-none"
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors || (
                  <p className="text-red-600 text-sm">
                    {field.state.meta.errors}
                  </p>
                )}
              </div>
            )}
          />

          {/* Email */}
          <form.Field
            name="email"
            validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: ({ value }) =>
                value.length < 3 && "Correo requiere de 5 caracteres.",
            }}
            children={(field) => (
              <div className="flex flex-col gap-y-2 items-center">
                <input
                  className="w-60 p-2 text-center font-medium text-[--colorBlue2] rounded-lg rounded-tl-2xl rounded-br-2xl outline-none"
                  type="text"
                  name="email"
                  placeholder="Correo"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors || (
                  <p className="text-red-600 text-sm">
                    {field.state.meta.errors}
                  </p>
                )}
              </div>
            )}
          />
          {/* Password */}
          <form.Field
            name="password"
            validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: ({ value }) => {
                if (value.length < 6) {
                  return "Contraseña debe tener al menos 6 caracteres.";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Contraseña debe contener al menos una letra mayúscula.";
                }
                if (!/[a-z]/.test(value)) {
                  return "Contraseña debe contener al menos una letra minúscula.";
                }
                if (!/[0-9]/.test(value)) {
                  return "Contraseña debe contener al menos un número.";
                }
              },
            }}
            children={(field) => (
              <div className="flex flex-col gap-y-2 items-center">
                <input
                  className="w-60 p-2 text-center font-medium text-[--colorBlue2] rounded-lg rounded-tl-2xl rounded-br-2xl outline-none"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors || (
                  <p className="text-red-600 text-sm">
                    {field.state.meta.errors}
                  </p>
                )}
              </div>
            )}
          />
          {/* Submit button */}
          <Link
            className="w-40 mx-auto bg-[--colorSky] text-[--colorWhite] font-medium  px-4 py-2 rounded-xl hover:bg-[--colorGreen] hover:text-[--colorBlue1]"
            type="submit"
            // to="/home"
            onClick={form.handleSubmit}
          >
            Registrate
          </Link>
        </form>
        <p className="text-[--colorWhite] font-semibold mt-10">
          Ya tienes una cuenta?
          <Link
            className="pl-1 hover:text-[--colorGreen] hover:underline"
            to="/signin"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
