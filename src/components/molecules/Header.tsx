import { IconContext } from "react-icons";
import { TiChartLine } from "react-icons/ti";
import { TiBell } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <header className="bg-[--colorWhite] text-[--colorBlue1] font-semibold text-xl h-full pt-6 grid items-center">
        <div className="flex justify-between items-center">
          <div className="px-10">
            {/* Logo */}
            <h1 className="flex items-center gap-1 cursor-pointer">
              <TiChartLine />
              Level Up
            </h1>
          </div>

          <div className="flex justify-between gap-x-12">
            {/* Icono de notificacion */}
            <div>
              <p>
                <TiBell />
              </p>
            </div>

            {/* Perfil desplegable */}
            <div className="px-10">
              <p className="flex items-center gap-x-2 cursor-pointer">
                DevJeffrey
                <TiArrowSortedDown />
              </p>
            </div>
          </div>
        </div>
        {/* Barra de navegacion */}
        <Navbar/>
      </header>
    </IconContext.Provider>
  );
}
