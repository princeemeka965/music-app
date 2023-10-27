import MenuBar from "./MenuBar";
import SideBar from "./SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-darkCloud flex h-full">
      <div className="w-18 flex flex-col h-screen relative">
        <MenuBar />
      </div>
      <div className="w-66 flex">{children}</div>
      <div className="w-18 flex flex-col h-screen relative">
        <SideBar />
      </div>
    </div>
  );
}
