export default function DynamicButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
}) {
  const baseClasses =
    "rounded-[30px] font-medium transition-colors duration-300 ease-in-out";

  const sizeClasses = {
    sm: "px-8 py-1 text-sm",
    md: "px-8 py-2 text-sm",
    lg: "px-12 py-3 text-sm font-bold font-sans ",
  };

  const variantClasses = {
    primary:
      "bg-button text-white hover:bg-buttonHover dark:bg-button dark:hover:bg-buttonHover ",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 ",
    outlined:
      " bg-transparent border border-button text-heading hover:bg-primary/20 dark:border-button dark:text-primary dark:hover:bg-yellow-600/20 ",
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
