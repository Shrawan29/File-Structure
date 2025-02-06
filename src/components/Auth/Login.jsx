import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Shield, ArrowRight, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState({ email: true, password: true });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    
    setIsValid({
      email: emailValid,
      password: passwordValid
    });

    if (!emailValid || !passwordValid) {
      setError("Please check your input and try again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Add your actual login logic here
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Background Effects */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Enhanced Animated Accent Lights */}
      <div 
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-fuchsia-400/20 rounded-full blur-3xl animate-pulse delay-75"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-xl px-8">
        <div className="relative group">
          {/* Enhanced Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          
          {/* Login Form Container */}
          <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8 transform transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-xl">
            {/* Logo and Title with Animation */}
            <div className="text-center mb-8">
              
              <h1 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Welcome to </span>
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Vendite</span>
              </h1>
              <p className="text-zinc-400 mt-2">Sign in to your account</p>
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/20 text-red-400">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Enhanced Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(prev => ({ ...prev, email: true }));
                    }}
                    
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.email ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Enter your email"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500 " />
                </div>
                {!isValid.email && (
                  <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setIsValid(prev => ({ ...prev, password: true }));
                    }}
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.password ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Enter your password"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {!isValid.password && (
                  <p className="text-red-400 text-sm mt-1">Password must be at least 8 characters</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="rounded border-white/10 bg-black/50 text-purple-500 focus:ring-purple-500/20 transition-colors duration-200" 
                  />
                  <span className="ml-2 text-sm text-zinc-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Social Login Options */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-zinc-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-black/50 border border-white/10 text-white hover:bg-black/70 transition-colors"
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-black/50 border border-white/10 text-white hover:bg-black/70 transition-colors"
                >
                  GitHub
                </Button>
              </div>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-zinc-400">
              Don't have an account?{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CSS for floating particles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}