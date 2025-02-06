import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { BarChart, LineChart, Shield, Zap, Binary, Brain, Clock, Cloud } from 'lucide-react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Advanced Analytics",
      desc: "Deep dive into your business data with powerful visualization tools and custom reports",
      gradient: "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Predictions",
      desc: "Leverage machine learning for accurate sales forecasting and trend analysis",
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Tracking",
      desc: "Monitor your business performance with live updates and instant notifications",
      gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      desc: "Enterprise-grade security with encrypted data and role-based access control",
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      desc: "Seamlessly connect with your existing tools and cloud services",
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Reports",
      desc: "Schedule and automate your business reports with customizable templates",
      gradient: "from-fuchsia-500/20 via-violet-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Animated Accent Lights */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Enhanced Parallax Stars */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: `radial-gradient(2px 2px at ${Math.random() * 100}% ${Math.random() * 100}%, white, transparent)`
        }}
      ></div>

      <div className="relative">
        {/* Enhanced Hero Section */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-4 py-20">
          <div className="relative group space-y-12">
            {/* Animated Background Ring */}
            <div className="absolute inset-0 -m-20 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Logo and Title */}
            <div className="relative space-y-6">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl rotate-45 transform hover:rotate-180 transition-transform duration-1000">
                <div className="w-full h-full bg-black/90 m-1 rounded-lg"></div>
              </div>
              <h1 className="text-8xl font-bold tracking-tight transition-transform duration-500 hover:scale-105">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Vendite</span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <p className="text-2xl text-zinc-400 max-w-2xl mx-auto backdrop-blur-sm leading-relaxed">
              Transform your business intelligence with our 
              <span className="text-purple-400"> next-generation </span> 
              analytics platform
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg rounded-full px-12 py-7 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 transform hover:scale-105 hover:-translate-y-1">
                Get Started Free
              </Button>
              <Button className="bg-white/10 hover:bg-white/15 text-white text-lg rounded-full px-12 py-7 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 hover:-translate-y-1">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Features Grid */}
        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-white">Platform Features</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Discover the tools that will revolutionize your business analytics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="relative group"
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8 transition-all duration-500 group-hover:bg-black/50 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Enhanced Icon Container */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-xl p-4 w-fit mb-6">
                    <span className="text-purple-400 transform transition-transform duration-500 group-hover:scale-110 block">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 transition-all duration-500 group-hover:translate-x-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}