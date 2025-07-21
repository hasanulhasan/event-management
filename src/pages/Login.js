import React from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Facebook,
  Chrome,
  Github,
  Apple,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    acceptTerms: false, // Added terms acceptance
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      // Terms validation for signup
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = "You must accept the terms and conditions";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when user starts typing/checking
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        if (isSignUp) {
          console.log("Sign up attempt:", formData);
          setSuccessMessage("Account created successfully! Redirecting...");
        } else {
          console.log("Sign in attempt:", {
            email: formData.email,
            password: formData.password,
          });
          setSuccessMessage("Logged in successfully! Redirecting...");
          const demoUser = {
            email: formData.email,
          };
          localStorage.setItem("user", JSON.stringify(demoUser));

          // Redirect to protected page
          navigate(from, { replace: true });
        }

        setIsSubmitting(false);

        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          acceptTerms: false,
        });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }, 1000);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      acceptTerms: false,
    });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl h-[850px] md:h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Sliding Panel */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-700 ease-in-out transform ${
              isSignUp ? "translate-x-[-100%] rounded-l-3xl" : "rounded-r-3xl"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {isSignUp ? "Welcome Back!" : "Hello Users!"}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {isSignUp
                  ? "To keep connected with us please login with your personal info"
                  : "Create an account to unlock all the features and personalized content waiting for you"}
              </p>
              <button
                onClick={toggleForm}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300 uppercase tracking-wide"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>

          {/* Login Form */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${
              isSignUp ? "translate-x-[-100%]" : "translate-x-0"
            }`}
          >
            <div className="w-full max-w-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Log In
              </h2>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  {successMessage}
                </div>
              )}

              {/* Social Login Icons */}
              <div className="flex justify-center space-x-4 mb-6">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Chrome className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5 text-gray-800" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Apple className="w-5 h-5 text-gray-800" />
                </button>
              </div>

              <p className="text-gray-600 text-center mb-6">
                or use your email for registration
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pr-12 ${
                      errors.password ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>

          {/* Sign Up Form */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${
              isSignUp ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <div className="w-full max-w-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Create Account
              </h2>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  {successMessage}
                </div>
              )}

              {/* Social Login Icons */}
              <div className="flex justify-center space-x-4 mb-6">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Chrome className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5 text-gray-800" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Apple className="w-5 h-5 text-gray-800" />
                </button>
              </div>

              <p className="text-gray-600 text-center mb-6">
                or use your email for registration
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.name ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.address ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pr-12 ${
                      errors.password ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pr-12 ${
                      errors.confirmPassword ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="relative">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className={`mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${
                        errors.acceptTerms ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Sign Up"}
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Responsive Overlay */}
          <div className="md:hidden absolute inset-0 bg-white flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <div className="w-full max-w-sm">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                  {isSignUp ? "Create Account" : "Log In"}
                </h2>

                {/* Success Message */}
                {successMessage && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                    {successMessage}
                  </div>
                )}

                {/* Social Login Icons */}
                <div className="flex justify-center space-x-4 mb-6">
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Chrome className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Github className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Apple className="w-5 h-5 text-gray-800" />
                  </button>
                </div>

                <p className="text-gray-600 text-center mb-6">
                  or use your email for registration
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSignUp && (
                    <>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.name ? "ring-2 ring-red-500" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Address"
                          className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.address ? "ring-2 ring-red-500" : ""
                          }`}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.address}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                        errors.email ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pr-12 ${
                        errors.password ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {isSignUp && (
                    <>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm Password"
                          className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pr-12 ${
                            errors.confirmPassword ? "ring-2 ring-red-500" : ""
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                        {errors.confirmPassword && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>

                      {/* Terms and Conditions for Mobile */}
                      <div className="relative">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleInputChange}
                            className={`mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${
                              errors.acceptTerms ? "ring-2 ring-red-500" : ""
                            }`}
                          />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            I agree to the{" "}
                            <a
                              href="/terms"
                              target="_blank"
                              className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                              Terms and Conditions
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy"
                              target="_blank"
                              className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                        {errors.acceptTerms && (
                          <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
                        )}
                      </div>
                    </>
                  )}

                  {!isSignUp && (
                    <div className="text-right">
                      <a
                        href="#"
                        className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? "Processing..."
                      : isSignUp
                      ? "Sign Up"
                      : "Sign In"}
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
              <p className="text-white mb-4">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <button
                onClick={toggleForm}
                className="px-6 py-2 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300 uppercase tracking-wide"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}