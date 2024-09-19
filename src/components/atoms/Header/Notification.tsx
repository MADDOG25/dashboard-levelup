import { IconContext } from "react-icons";
import { TiBell } from "react-icons/ti";

export default function Notification() {
  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <div className="flex justify-between gap-x-12 text-[--colorWhite] font-semibold text-xl">
        <div>
          <p>
            <TiBell />
          </p>
        </div>
      </div>
    </IconContext.Provider>
  );
}
