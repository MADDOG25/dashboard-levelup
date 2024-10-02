import { Link } from "react-router-dom";
import InputText from "../atoms/Form/Login/InputText";
import InputPassword from "../atoms/Form/Login/InputPassword";
import LogoForm from "../atoms/Form/Login/LogoForm";
import InputUsername from "../atoms/Form/Register/InputUsername";
import InputCheckPassword from "../atoms/Form/Register/InputCheckPassword";
import ButtonSubmitRegister from "../atoms/Form/Register/ButtonSubmitRegister";

export default function RegisterForm() {
  return (
    <div className="bg-[--colorBlue1] h-screen text-[--colorWhite]">
      <div className="flex flex-col h-full justify-center items-center mx-auto">
        <h2 className="text-[--colorWhite] font-bold text-4xl mb-10">
          <LogoForm />
        </h2>
        <form className="text-center grid gap-y-4">
          {/* Username */}
          <InputUsername />
          {/* Email */}
          <InputText />
          <InputPassword />
          {/* Check password */}
          <InputCheckPassword />
          {/* Submit button */}
          <ButtonSubmitRegister />
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
