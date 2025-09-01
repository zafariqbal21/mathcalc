import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CalculatorButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: 'number' | 'operator' | 'equals' | 'clear';
  children: React.ReactNode;
}

const CalculatorButton = forwardRef<HTMLButtonElement, CalculatorButtonProps>(
  ({ variant = 'number', children, className, onClick, ...props }, ref) => {
    const baseClasses = "glass-button ripple rounded-xl h-16 font-semibold transition-all duration-200 active:scale-95 select-none";
    
    const variantClasses = {
      number: "text-xl text-slate-800 hover:text-slate-900",
      operator: "operator-button text-lg text-blue-600 hover:text-blue-700",
      equals: "equals-button text-lg font-bold text-blue-700 hover:text-blue-800",
      clear: "clear-button text-lg text-red-600 hover:text-red-700"
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent double-tap zoom on mobile
      e.preventDefault();
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

CalculatorButton.displayName = "CalculatorButton";

export default CalculatorButton;
