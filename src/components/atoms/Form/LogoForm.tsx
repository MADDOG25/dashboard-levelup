import { IconContext } from "react-icons";
import { TiChartLine } from "react-icons/ti";

export default function LogoForm() {
  return (
    <IconContext.Provider value={{ size: "60px", className: "cursor-pointer" }}>
      <div className="text-[--colorWhite] font-semibold px-10">
        <h1 className="flex items-center gap-1 cursor-pointer text-5xl">
          <TiChartLine />
          Level Up
        </h1>
      </div>
    </IconContext.Provider>
  );
}
