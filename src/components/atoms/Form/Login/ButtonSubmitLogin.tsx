import { Link } from "react-router-dom";

export default function ButtonSubmitLogin() {
  return (
    <div>
      <Link
        className="w-40 bg-[--colorSky] text-[--colorWhite] font-medium  px-4 py-2 rounded-xl hover:bg-[--colorGreen] hover:text-[--colorBlue1]"
        type="submit"
        to="/home"
      >
        Inicia Sesión
      </Link>
    </div>
  );
}
