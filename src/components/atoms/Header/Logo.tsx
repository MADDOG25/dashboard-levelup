import { IconContext } from "react-icons";
import { TiChartLine } from "react-icons/ti";

export default function Logo() {
  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <div className="text-[--colorWhite] font-semibold text-xl px-10">
        <h1 className="flex items-center gap-1 cursor-pointer">
          <TiChartLine />
          Level Up
        </h1>
      </div>
    </IconContext.Provider>
  );
}
