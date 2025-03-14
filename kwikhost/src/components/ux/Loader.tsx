const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        {/* Typing Effect */}
        <div className="text-4xl font-bold text-white">
          {Array.from("KwikHost").map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Spinning Pulse */}
        <div className="mt-4 relative">
          <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-pink-500 border-solid rounded-full animate-spin-reverse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

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

export default Loader;
