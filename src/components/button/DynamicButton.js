export default function DynamicButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
}) {
  const baseClasses =
    "rounded-lg font-medium transition-colors duration-300 ease-in-out";

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    outlined:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-600/20",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
