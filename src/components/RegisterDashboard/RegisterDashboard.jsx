import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Shield, ZapIcon, CheckCircle2, AlertTriangle, 
  InfoIcon, RefreshCcw, ArrowRight 
} from 'lucide-react';

export default function BusinessRegistrationDashboard() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    employees: '',
    annualRevenue: '',
    termsAccepted: false
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const industries = [
    'Technology', 'Finance', 'Retail', 'Healthcare', 
    'Manufacturing', 'Education', 'Other'
  ];

  const validateForm = () => {
    const errors = {};
    
    if (!formData.companyName.trim()) {
      errors.companyName = 'Company name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (!formData.industry) {
      errors.industry = 'Please select an industry';
    }

    if (formData.employees && (isNaN(formData.employees) || formData.employees < 0)) {
      errors.employees = 'Invalid number of employees';
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear specific error when user starts typing/selecting
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmissionStatus({
          type: 'success',
          message: 'Registration successful! We will contact you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          companyName: '',
          email: '',
          phone: '',
          industry: '',
          employees: '',
          annualRevenue: '',
          termsAccepted: false
        });
      } catch (error) {
        setSubmissionStatus({
          type: 'error',
          message: 'Registration failed. Please try again.'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4 pt-12">
        <div className="w-full max-w-2xl">
          <div className="relative group space-t-12">
            <div className="absolute inset-0 -m-20 bg-gradient-to-r from-purple-400/5 to-fuchsia-400/5 rounded-full blur-3xl animate-spin-slow"></div>
            
            <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-purple-500/50 p-12">
              {/* Status Messaging */}
              {submissionStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submissionStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {submissionStatus.type === 'success' 
                    ? <CheckCircle2 className="w-6 h-6" /> 
                    : <AlertTriangle className="w-6 h-6" />
                  }
                  {submissionStatus.message}
                </div>
              )}

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent inline-block mb-4 pb-2">
                  Business Registration
                </h2>
                <p className="text-zinc-400 flex items-center justify-center gap-2">
                  <InfoIcon className="w-5 h-5 text-purple-400" />
                  Join Vendite Analytics and transform your business intelligence
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-400 mb-2  ">Company Name</label>
                    <input 
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full bg-black/30  border-purple-500/50 border rounded-lg px-4 py-3 text-white focus:outline-none transition duration-300 ${
                        validationErrors.companyName 
                          ? 'border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      }`}
                    />
                    {validationErrors.companyName && (
                      <p className="text-red-400 text-sm mt-1">{validationErrors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-2">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-black/30 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:outline-none transition duration-300 ${
                        validationErrors.email 
                          ? 'border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-red-400 text-sm mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-400 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-black/30 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:outline-none transition duration-300 ${
                        validationErrors.phone 
                          ? 'border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      }`}
                    />
                    {validationErrors.phone && (
                      <p className="text-red-400 text-sm mt-1">{validationErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-2">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full bg-black/30 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:outline-none transition duration-300 ${
                        validationErrors.industry 
                          ? 'border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      }`}
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    {validationErrors.industry && (
                      <p className="text-red-400 text-sm mt-1">{validationErrors.industry}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-400 mb-2 border-purple-500/50">Number of Employees</label>
                    <input 
                      type="number"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-black/30 border  border-purple-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-2">Annual Revenue</label>
                    <input 
                      type="number"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition duration-300"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mt-6">
                  <label className="flex items-center text-zinc-400">
                    <input 
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="mr-3 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    I accept the Terms and Conditions
                  </label>
                  {validationErrors.termsAccepted && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.termsAccepted}</p>
                  )}
                </div>

                <div className="flex items-center justify-center mt-8">
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg rounded-full px-12 py-4 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCcw className="w-5 h-5 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ZapIcon className="w-5 h-5" />
                        Register Business
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Security Note */}
            <div className="text-center  flex items-center justify-center  text-zinc-500 pt-5">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Your data is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}