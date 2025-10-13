import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "gray" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "prefix" | "suffix";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "prefix",
  className = "",
  href,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center cursor-pointer justify-center font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    gray: "bg-gray-300 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-300",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const iconSpacing =
    icon && text
      ? iconPosition === "prefix"
        ? "space-x-2"
        : "flex-row-reverse space-x-reverse space-x-2"
      : "";

  const content = (
    <span className={`flex items-center ${iconSpacing}`}>
      {icon && <span className="flex items-center">{icon}</span>}
      {text && <span>{text}</span>}
    </span>
  );

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  // If href exists, render Link instead of button
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
