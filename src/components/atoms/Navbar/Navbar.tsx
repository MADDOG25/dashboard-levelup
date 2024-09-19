import { IconContext } from "react-icons";
import {
  TiChartBar,
  TiClipboard,
  TiDeviceLaptop,
  TiGroup,
  TiNews,
  TiCloudStorage,
} from "react-icons/ti";

const navigation = {
  dashboard: { icon: <TiChartBar />, title: "Dashboard", href: "#" },
  tasks: { icon: <TiClipboard />, title: "Tareas", href: "#" },
  projects: { icon: <TiDeviceLaptop />, title: "Proyectos", href: "#" },
  groups: { icon: <TiGroup />, title: "Clientes", href: "#" },
  news: { icon: <TiNews />, title: "Noticias", href: "#" },
  insights: { icon: <TiCloudStorage />, title: "Reporte", href: "#" },
  // Add more navigation items here...
};

export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <nav className="text-[--colorWhite] w-full font-semibold text-lg h-full grid grid-cols-1 md:grid-cols-3 gap-y-2 lg:grid-cols-6 mx-auto px-16 pb-6 pt-4 justify-center items-center">
        {Object.values(navigation).map((item) => (
          <ul className="mx-auto w-fit ">
            <li key={item.title}>
              <a
                href={item.href}
                className="flex gap-1 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                {item.icon}
                {item.title}
              </a>
            </li>
          </ul>
        ))}
      </nav>
    </IconContext.Provider>
  );
}
