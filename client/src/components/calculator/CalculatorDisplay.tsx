import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CalculatorDisplayProps {
  display: string;
  previousDisplay: string;
}

export default function CalculatorDisplay({ display, previousDisplay }: CalculatorDisplayProps) {
  return (
    <div className="glass-display rounded-2xl p-6 mb-6">
      <div className="text-right">
        {/* Previous calculation */}
        <motion.div 
          className="text-sm text-slate-500 h-6 font-mono"
          data-testid="display-previous"
          key={previousDisplay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {previousDisplay}
        </motion.div>
        
        {/* Current display */}
        <motion.div 
          className={cn(
            "text-4xl font-mono font-semibold text-slate-800 mt-2 min-h-[3rem]",
            "flex items-center justify-end break-all"
          )}
          data-testid="display-current"
          key={display}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          {display}
        </motion.div>
      </div>
    </div>
  );
}
