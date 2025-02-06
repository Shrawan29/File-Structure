import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { User, Mail, MapPin, Edit, Camera, Building, Phone, Lock, Settings, Save, X } from 'lucide-react';

export default function UserProfile() {
  const [scrollY, setScrollY] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Thompson",
    role: "Marketing Manager",
    email: "alex.thompson@vendite.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    department: "Marketing",
    bio: "Experienced marketing professional with a focus on digital analytics and campaign optimization."
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSave = () => {
    // Here you would typically save changes to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset any changes
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      
      {/* Animated Accent Light */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Parallax Stars */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: `radial-gradient(2px 2px at ${Math.random() * 100}% ${Math.random() * 100}%, white, transparent)`
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-4 py-16 pt-20">
        {/* Profile Header */}
        <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex flex-col items-center gap-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10">
                <img 
                  src="/public/download.png" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button className="z-10 absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full hover:bg-purple-500 transition-colors">
                  <Camera className="z-10 w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Edit Profile Button */}
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/15 text-white rounded-full"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>

            {/* Profile Form */}
            <div className="w-full space-y-6">
              <div className="text-center space-y-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-2xl font-bold text-center text-white w-full"
                  />
                ) : (
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {profile.name}
                  </h1>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => setProfile({...profile, role: e.target.value})}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-purple-400 text-center w-full"
                  />
                ) : (
                  <p className="text-xl text-purple-400">{profile.role}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full"
                      />
                    ) : (
                      <p className="text-white">{profile.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full"
                      />
                    ) : (
                      <p className="text-white">{profile.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full"
                      />
                    ) : (
                      <p className="text-white">{profile.location}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 flex items-center gap-2">
                      <Building className="w-4 h-4" /> Department
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.department}
                        onChange={(e) => setProfile({...profile, department: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full"
                      />
                    ) : (
                      <p className="text-white">{profile.department}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full h-32"
                  />
                ) : (
                  <p className="text-white">{profile.bio}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end gap-4 pt-4">
                  <Button
                    onClick={handleCancel}
                    className="bg-white/10 text-white rounded-full px-6 hover:bg-white/15"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Account Settings Link */}
        <div className="backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-6">
          <Button 
            className="w-full bg-white/10 hover:bg-white/15 text-white flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Account Settings
            </div>
            <Lock className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}