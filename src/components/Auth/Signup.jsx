import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Shield, ArrowRight, Mail, Lock, Eye, EyeOff, AlertCircle, User, Check, X } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isValid, setIsValid] = useState({
    fullName: true,
    email: true,
    password: true,
    confirmPassword: true
  });

  // Password strength requirements
  const requirements = [
    { re: /.{8,}/, label: 'At least 8 characters' },
    { re: /[0-9]/, label: 'At least one number' },
    { re: /[a-z]/, label: 'At least one lowercase letter' },
    { re: /[A-Z]/, label: 'At least one uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'At least one special character' }
  ];

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

  // Calculate password strength
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    requirements.forEach(requirement => {
      if (requirement.re.test(password)) {
        strength += 20;
      }
    });
    setPasswordStrength(strength);
  }, [formData.password]);

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateName = (name) => {
    return name.length >= 2 && /^[a-zA-Z\s]*$/.test(name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setIsValid(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const validations = {
      fullName: validateName(formData.fullName),
      email: validateEmail(formData.email),
      password: passwordStrength >= 80,
      confirmPassword: formData.password === formData.confirmPassword
    };

    setIsValid(validations);

    if (!Object.values(validations).every(Boolean)) {
      setError("Please check your input and try again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Add your actual signup logic here
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center py-12">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Animated Accent Lights */}
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

      <div className="relative w-full max-w-xl px-8">
        <div className="relative group">
          {/* Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          
          {/* Form Container */}
          <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              
              <h1 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Join </span>
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Vendite</span>
              </h1>
              <p className="text-zinc-400 mt-2">Create your account</p>
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/20 text-red-400">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Full Name</label>
                <div className="relative">
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.fullName ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Enter your full name"
                    required
                  />
                  <User  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
                </div>
                {!isValid.fullName && (
                  <p className="text-red-400 text-sm mt-1">Please enter a valid name</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.email ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Enter your email"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
                </div>
                {!isValid.email && (
                  <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.password ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Create a password"
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

                {/* Password Strength Indicator */}
                <div className="space-y-2">
                  <Progress value={passwordStrength} className="h-1 bg-white/10" />
                  <div className="text-sm text-zinc-400">
                    Password strength: {passwordStrength >= 80 ? 'Strong' : passwordStrength >= 60 ? 'Medium' : 'Weak'}
                  </div>
                  
                 
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 block">Confirm Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border pl-10 ${
                      !isValid.confirmPassword ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-300`}
                    placeholder="    Confirm your password"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-400 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {!isValid.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg rounded-full px-4 py-3 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20">
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}