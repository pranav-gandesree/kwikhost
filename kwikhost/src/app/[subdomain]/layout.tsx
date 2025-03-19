import React from "react";

export default function SubdomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow">
        <main className="p-6">{children}</main>
      </div>

      {/* ✅ Footer Banner */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3">
        <span className="text-sm md:text-base">
          Shared with <a href="https://kwikhost.xyz" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">KwikHost</a> – Upload for free!
        </span>
      </footer>
    </div>
  );
}
