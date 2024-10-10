import { IconContext } from "react-icons";
import { TiChartLine } from "react-icons/ti";

export default function Logo() {
  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <div className="text-[--colorWhite] font-semibold px-10">
        <h1 className="flex items-center gap-1 text-xl cursor-pointer">
          <TiChartLine />
          Level Up
        </h1>
      </div>
    </IconContext.Provider>
  );
}
