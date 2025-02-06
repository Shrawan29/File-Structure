import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogOut, Check, User } from 'lucide-react';
import { Link } from "react-router-dom";

export default function LogoutPage() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    // Implement actual logout logic here
    setIsLoggedOut(true);
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      
      {/* Animated Accent Lights */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8 text-center space-y-6 shadow-2xl shadow-purple-500/20">
          {!isLoggedOut ? (
            <>
              <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-full p-4 w-fit mx-auto mb-4">
                <User className="w-12 h-12 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Log Out
              </h2>
              <p className="text-zinc-400 mb-6">
                Are you sure you want to log out of Vendite Analytics?
              </p>
              <div className="flex flex-col space-y-4">
                <Button 
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full hover:opacity-90 transition-all duration-300"
                >
                  <LogOut className="mr-2 w-5 h-5" /> Confirm Logout
                </Button>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    className="w-full text-zinc-400 border-white/10 hover:bg-white/5 rounded-full"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full p-4 w-fit mx-auto mb-4">
                <Check className="w-12 h-12 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Logged Out
              </h2>
              <p className="text-zinc-400 mb-6">
                You have been successfully logged out of Vendite Analytics.
              </p>
              <Link to="/login">
                <Button 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:opacity-90 transition-all duration-300"
                >
                  Return to Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}