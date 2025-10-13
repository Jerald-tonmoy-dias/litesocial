"use client";
import { useState } from "react";

// Reusable Input Component
interface InputBoxProps {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

export const InputBox = ({
  type = "text",
  label,
  name = "",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  icon,
  className = "",
  disabled = false,
  ...props
}: InputBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-2.5 
            ${icon ? "pl-10" : "pl-4"}
            border rounded-lg 
            transition-all duration-200
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                : isFocused
                ? "border-blue-500 ring-2 ring-blue-500"
                : "border-gray-300 hover:border-gray-400"
            }
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            focus:outline-none
            placeholder-gray-400
          `}
          {...props}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Demo Component showing different input variations
export default function InputDemo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    website: "",
    disabled: "This is disabled",
  });

  const [errors, setErrors] = useState({});

  //   const handleChange = (field) => (e) => {
  //     setFormData({ ...formData, [field]: e.target.value });

  //     // Clear error when user starts typing
  //     if (errors[field]) {
  //       setErrors({ ...errors, [field]: '' });
  //     }
  //   };

  //   const validateEmail = () => {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (formData.email && !emailRegex.test(formData.email)) {
  //       setErrors({ ...errors, email: 'Please enter a valid email address' });
  //     }
  //   };

  //   const handleSubmit = () => {
  //     const newErrors = {};

  //     if (!formData.username) newErrors.username = 'Username is required';
  //     if (!formData.email) newErrors.email = 'Email is required';
  //     if (!formData.password) newErrors.password = 'Password is required';

  //     if (Object.keys(newErrors).length > 0) {
  //       setErrors(newErrors);
  //     } else {
  //       alert('Form submitted successfully!');
  //       console.log('Form Data:', formData);
  //     }
  //   };

  // Icon components
  const UserIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  const LockIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );

  const GlobeIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Reusable Input Component
          </h1>
          <p className="text-gray-600 mb-8">
            A flexible and customizable input component with various features
          </p>

          <div className="space-y-5">
            {/* Basic Input */}
            {/* <Input
              label="Username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange('username')}
              error={errors.username}
              required
              icon={<UserIcon />}
            /> */}

            {/* Email Input with Validation */}
            {/* <Input
              type="email"
              label="Email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange('email')}
              onBlur={validateEmail}
              error={errors.email}
              required
              icon={<EmailIcon />}
            /> */}

            {/* Password Input */}
            {/* <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange('password')}
              error={errors.password}
              required
              icon={<LockIcon />}
            /> */}

            {/* Phone Input */}
            {/* <Input
              type="tel"
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange('phone')}
              icon={<PhoneIcon />}
            /> */}

            {/* URL Input */}
            {/* <Input
              type="url"
              label="Website"
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange('website')}
              icon={<GlobeIcon />}
            /> */}

            {/* Disabled Input */}
            {/* <Input
              label="Disabled Input"
              value={formData.disabled}
              onChange={handleChange('disabled')}
              disabled
            /> */}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Form
              </button>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Component Features:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Customizable labels with required indicators</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Icon support for enhanced visual design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Error validation and display</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Focus states with smooth transitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Disabled state support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fully responsive and accessible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
