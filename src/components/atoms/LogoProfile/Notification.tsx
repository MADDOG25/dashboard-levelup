import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { IconContext } from "react-icons";
import { TiBell } from "react-icons/ti";

export default function Notification() {
  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <Menu as="div" className="relative">
        <div>
          <MenuButton>
            <div className="flex justify-between gap-x-12 text-[--colorWhite] font-semibold text-xl pr-10">
              <div>
                <p>
                  <div className="relative">
                    <TiBell />
                    <span className="top-0 start-4 absolute w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                </p>
              </div>
            </div>
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-10 z-10 origin-top-right rounded-md bg-[--colorWhite]  font-semibold mt-2 py-2 shadow-lg ring-1 ring-[--colorBlue1] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <ul role="list" className="max-w-sm divide-y divide-[--colorBlue2]">
              <li className="py-3 sm:py-4">
                <div className="flex mx-auto px-4 gap-x-6 items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[--colorBlue1]">
                      Tarea 1
                    </p>
                  </div>
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    Completado
                  </span>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex mx-auto px-4 items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[--colorBlue1]">
                      Tarea 2
                    </p>
                  </div>
                  <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                    Pendiente
                  </span>
                </div>
              </li>
            </ul>
          </MenuItem>
        </MenuItems>
      </Menu>
    </IconContext.Provider>
  );
}
