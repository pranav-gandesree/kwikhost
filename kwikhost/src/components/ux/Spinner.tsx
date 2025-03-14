const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-12 h-12">
       
        <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-pink-500 border-solid rounded-full animate-spin-reverse"></div>
      </div>

      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
