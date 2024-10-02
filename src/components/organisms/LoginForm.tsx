import { Link } from "react-router-dom";
import InputText from "../atoms/Form/Login/InputText";
import InputPassword from "../atoms/Form/Login/InputPassword";
import ButtonSubmit from "../atoms/Form/Login/ButtonSubmitLogin";
import LogoForm from "../atoms/Form/Login/LogoForm";

export default function LoginForm() {
  return (
    <div className="bg-[--colorBlue1] h-screen text-[--colorWhite]">
      <div className="flex flex-col h-full justify-center items-center mx-auto">
        <h2 className="text-[--colorWhite] font-bold text-4xl mb-10">
          <LogoForm />
        </h2>
        <form className="text-center grid gap-y-4">
          {/* Email */}
          <InputText />
          {/* Password */}
          <InputPassword />
          {/* Submit button */}
          <ButtonSubmit />
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
