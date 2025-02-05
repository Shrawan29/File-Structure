import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "◈",
      title: "Innovation",
      desc: "Push boundaries with cutting-edge technology",
      gradient: "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20"
    },
    {
      icon: "◎",
      title: "Excellence",
      desc: "Unparalleled quality in every detail",
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20"
    },
    {
      icon: "⬡",
      title: "Security",
      desc: "Advanced protection for your digital world",
      gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Dynamic Accent Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Parallax Stars */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: `radial-gradient(2px 2px at ${Math.random() * 100}% ${Math.random() * 100}%, white, transparent)`
        }}
      ></div>

      <div className="relative">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-4 py-20">
          <div className="relative group">
            <div className="absolute "></div>
            <div className="relative ">
              <div className="absolute"></div>
              <h1 className="text-8xl font-bold tracking-tight transition-transform duration-500 hover:scale-105">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Next</span>
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Gen</span>
              </h1>
              <p className="mt-8 text-xl text-zinc-400 max-w-lg mx-auto backdrop-blur-sm">
                Experience the perfect blend of innovation and elegance
              </p>
              <Button className="mt-12 bg-white/10 hover:bg-white/15 text-white text-lg rounded-full px-10 py-7 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 hover:-translate-y-1">
                Begin Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="relative group"
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative backdrop-blur-xl bg-black/40 rounded-xl border border-white/10 p-8 transition-all duration-500 group-hover:bg-black/50 transform group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text transform transition-transform duration-500 group-hover:scale-110">
                      {feature.icon}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-gradient-to-r from-purple-500/50 via-fuchsia-500/30 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">{feature.title}</h3>
                  <p className="text-zinc-400 transition-all duration-500 group-hover:translate-x-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}