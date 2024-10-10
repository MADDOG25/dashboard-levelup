import Logo from "../atoms/LogoProfile/Logo";
import Notification from "../atoms/LogoProfile/Notification";
import ProfileMenu from "../atoms/LogoProfile/ProfileMenu";
import NavbarMenu from "../atoms/NavbarMenu/NavbarMenu";

export default function Header() {
  return (
    <header className="bg-[--colorBlue1] h-full pt-6 grid">
      <div className="grid gap-y-4">
        <div className="grid grid-flow-cols-1 mx-auto gap-y-4 lg:gap-0 lg:mx-0 lg:grid-cols-2">
          <div className="flex items-center justify-start">
            <Logo />
          </div>
          <div className="flex items-center justify-end">
            <Notification />
            <ProfileMenu />
          </div>
        </div>
        <div>
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
}
