import HomeNavbar from "@/components/ux/HomeNavbar";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full">
      
      <HomeNavbar/>
      <div>
        <main className=" p-6">{children}</main>
      </div>
    </div>
  );
}