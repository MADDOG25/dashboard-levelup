import { Link } from "react-router-dom";
import LogoForm from "../atoms/Form/LogoForm";

export default function LoginForm() {
  return (
    <div className="bg-[--colorBlue1] h-screen text-[--colorWhite]">
      <div className="flex flex-col h-full justify-center items-center mx-auto">
        <h2 className="text-[--colorWhite] font-bold text-4xl mb-10">
          <LogoForm />
        </h2>
        <form className="text-center grid gap-y-4">
          {/* Email */}
          <input
            className="w-60 p-2 text-center font-medium text-[--colorBlue2] rounded-lg rounded-tl-2xl rounded-br-2xl outline-none"
            type="text"
            name="email"
            placeholder="Correo"
          />
          {/* Password */}
          <input
            className="w-60 p-2 text-center font-medium  text-[--colorBlue2] rounded-lg rounded-tl-2xl rounded-br-2xl outline-none"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          {/* Submit button */}
          <Link
            className="w-40 mx-auto bg-[--colorSky] text-[--colorWhite] font-medium  px-4 py-2 rounded-xl hover:bg-[--colorGreen] hover:text-[--colorBlue1]"
            type="submit"
            to="/home"
          >
            Inicia Sesión
          </Link>
        </form>
        <p className="text-[--colorWhite] font-semibold mt-10">
          No tienes una cuenta?
          <Link
            className="pl-1 hover:text-[--colorGreen] hover:underline"
            to="/signup"
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
