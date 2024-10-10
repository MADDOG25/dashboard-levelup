import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { IconContext } from "react-icons";
import { TiArrowSortedDown } from "react-icons/ti";
import { signOut } from "firebase/auth";
import { useAuth } from "../../../AuthProvider";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  //Navegador
  const navigate = useNavigate();

  //Contexto de la aplicación
  const { user } = useAuth();

  //Cerrar sesion
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Cierre de sesion exitoso");
      //Redirigir al inicio de sesion
      navigate("/signin");
    } catch (error) {
      console.log("🚀 ~ handleSignOut ~ error:", error);
    }
  };

  return (
    <IconContext.Provider value={{ size: "30px", className: "cursor-pointer" }}>
      <Menu as="div" className="relative">
        <div>
          <MenuButton className="relative">
            <div className="text-[--colorWhite] font-semibold text-xl px-6">
              <p className="flex items-center gap-x-2 cursor-pointer">
                {/* {user ? user.displayName : "Invitado"} */}
                DevJeffrey25
                <TiArrowSortedDown />
              </p>
            </div>
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-10 z-10 origin-top-right rounded-md bg-[--colorWhite]  font-semibold mt-2 py-2 shadow-lg ring-1 ring-[--colorBlue1] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[--colorBlue1] hover:text-[--colorWhite] data-[focus]:bg-[--colorBlue1]"
            >
              Tu perfil
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[--colorBlue1] hover:text-[--colorWhite] data-[focus]:bg-[--colorBlue1]"
            >
              Ajustes
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={handleSignOut}
              href="#"
              className="block px-4 py-2 text-sm text-[--colorBlue1] hover:text-[--colorWhite] data-[focus]:bg-[--colorBlue1]"
            >
              Cerrar sesión
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </IconContext.Provider>
  );
}
