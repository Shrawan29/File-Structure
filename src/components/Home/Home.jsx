import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { BarChart, LineChart, Shield, Zap, Brain, Clock, Cloud, ArrowRight, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";

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
      benefits: ["Real-time data visualization", "Custom report builder", "Interactive dashboards"],
      gradient: "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Predictions",
      desc: "Leverage machine learning for accurate sales forecasting and trend analysis",
      benefits: ["Predictive analytics", "Trend forecasting", "Anomaly detection"],
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Tracking",
      desc: "Monitor your business performance with live updates and instant notifications",
      benefits: ["Live performance metrics", "Instant alerts", "Custom notifications"],
      gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      desc: "Enterprise-grade security with encrypted data and role-based access control",
      benefits: ["End-to-end encryption", "Role-based access", "Compliance ready"],
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      desc: "Seamlessly connect with your existing tools and cloud services",
      benefits: ["Multi-cloud support", "API integration", "Data synchronization"],
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Reports",
      desc: "Schedule and automate your business reports with customizable templates",
      benefits: ["Scheduled reporting", "Custom templates", "Export flexibility"],
      gradient: "from-fuchsia-500/20 via-violet-500/20 to-purple-500/20"
    }
  ];
  const generateSalesElements = () => {
    return Array.from({ length: 20 }, (_, index) => ({
      type: index % 3 === 0 ? 'dollar' : index % 3 === 1 ? 'graph' : 'trend',
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5
    }));
  };

  const salesElements = generateSalesElements();

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('https://example.com/your-background-image.jpg')] opacity-30 bg-cover"></div>
      
      {/* Animated Accent Lights */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000 "></div>
      
      {/* Enhanced Parallax Sales Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        {salesElements.map((element, index) => (
          <div 
            key={index} 
            className="absolute opacity-20 hover:opacity-50 transition-all duration-300"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationName: 'floatAndScale',
              transform: `scale(${element.size})`
            }}
          >
            {element.type === 'dollar' ? (
              <DollarSign className="text-purple-500/30 w-6 h-6 animate-bounce" />
            ) : element.type === 'graph' ? (
              <BarChart className="text-fuchsia-500/30 w-8 h-8 animate-pulse" />
            ) : (
              <TrendingUp className="text-violet-500/30 w-7 h-7 animate-spin" />
            )}
          </div>
        ))}
      </div>

      {/* Global CSS for floating animation */}
      <style jsx global>{`
        @keyframes floatAndScale {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
      `}</style>

      <div className="relative">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-4 py-20">
          <div className="relative group space-y-12">
            {/* Animated Background Ring */}
            <div className="absolute inset-0 -m-20 bg-gradient-to-r from-purple-400/5 to-fuchsia-400/5 rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Title and Description */}
            <div className="relative space-y-6">
              <h1 className="text-8xl font-bold tracking-tight transition-transform duration-500 hover:scale-105">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Vendite</span>
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Analytics</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto backdrop-blur-sm leading-relaxed">
                Transform your business intelligence with our 
                <span className="text-purple-400"> next-generation </span> 
                analytics platform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <Link to={"/RegisterDashboard"}>
              <Button  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg rounded-full px-12 py-7 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 transform hover:scale-105 hover:-translate-y-1">
                Get Started 
              </Button>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent inline-block">
              Platform Features
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Discover the tools that will revolutionize your business analytics
            </p>
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
                <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8 h-full transition-all duration-500 group-hover:bg-black/50 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Icon Container */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-fuchsia-500/20 transition-all duration-500">
                    <span className="text-purple-400 transform transition-transform duration-500 group-hover:scale-110 block">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 transition-all duration-500 group-hover:translate-x-1 leading-relaxed">
                      {feature.desc}
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-2 pt-4 border-t border-white/5">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 mr-2 text-purple-500/50 group-hover:text-purple-400 transition-colors duration-300" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center justify-end">
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 ">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section (Optional) */}
        <section className="px-8 pb-32 max-w-7xl mx-auto">
          <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-purple-400/40 p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">10k+</div>
                <div className="text-zinc-400 mt-2">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-zinc-400 mt-2">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-zinc-400 mt-2">Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}