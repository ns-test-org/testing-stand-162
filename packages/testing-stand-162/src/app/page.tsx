export default function Landing() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Aurora gradient layers */}
      <div className="absolute inset-0 bg-aurora-layer-1"></div>
      <div className="absolute inset-0 bg-aurora-layer-2"></div>
      <div className="absolute inset-0 bg-aurora-layer-3"></div>
      <div className="absolute inset-0 bg-particles"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
            v2
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-lg">
            Welcome to your new landing page
          </p>
        </div>
      </div>
    </div>
  );
}



