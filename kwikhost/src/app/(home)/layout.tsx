import HomeNavbar from "@/components/ux/HomeNavbar";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      
      <HomeNavbar/>

      <div className="flex-grow flex">
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}