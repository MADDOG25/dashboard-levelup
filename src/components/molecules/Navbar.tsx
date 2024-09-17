import { IconContext } from "react-icons";
import { TiChartBar } from "react-icons/ti";
import { TiClipboard } from "react-icons/ti";
import { TiDeviceLaptop } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";
import { TiNews } from "react-icons/ti";
import { TiCloudStorage } from "react-icons/ti";

export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <nav className="text-[--colorBlue1] font-semibold text-lg h-[68px] flex justify-center items-center">
        <ul className="flex flex-row justify-between mx-10 w-3/4">
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiChartBar /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiClipboard />
              Tareas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiDeviceLaptop />
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiGroup />
              Clientes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiNews />
              Noticias
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <TiCloudStorage />
              Reporte
            </a>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
