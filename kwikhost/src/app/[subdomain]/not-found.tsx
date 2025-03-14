
import Image from "next/image";

export default async function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cal text-4xl">Page not found 404</h1>
      <Image
        alt="missing site"
        src="https://illustrations.popsy.co/gray/timed-out-error.svg"
        width={400}
        height={400}
      />
      <p className="text-lg text-stone-500">
                You've found a page that doesn't exist."
      </p>
    </div>
  );
}