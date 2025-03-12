export default function SubdomainPage({ params }: { params: { subdomain: string } }) {
    const { subdomain } = params;
  
    console.log('SubdomainPage: Rendering page for subdomain:', subdomain);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to {subdomain}.kwikhost.site
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          This is a multi-tenant site for <span className="font-semibold">{subdomain}</span>.
        </p>
      </div>
    );
  }
  