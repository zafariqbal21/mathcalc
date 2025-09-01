import { motion } from "framer-motion";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";
import { useEffect } from "react";

export default function Calculator() {
  const {
    display,
    previousDisplay,
    handleNumber,
    handleOperator,
    handleEquals,
    handleClear,
    handleAllClear,
    handleDecimal,
    handleKeyboard
  } = useCalculator();

  // Add keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyboard(event.key);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyboard]);

  // Add vibration feedback for mobile
  const vibrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const handleButtonClick = (callback: () => void) => {
    vibrate();
    callback();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="calc-container w-full max-w-sm mx-auto rounded-3xl p-6"
    >
      {/* App Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Glass Calculator</h1>
        <p className="text-sm text-slate-600">Modern • Simple • Beautiful</p>
      </div>

      {/* Calculator Display */}
      <CalculatorDisplay 
        display={display} 
        previousDisplay={previousDisplay}
      />

      {/* Calculator Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1: Clear and operations */}
        <CalculatorButton
          variant="clear"
          onClick={() => handleButtonClick(handleAllClear)}
          className="col-span-1"
          data-testid="button-all-clear"
        >
          AC
        </CalculatorButton>
        <CalculatorButton
          variant="clear"
          onClick={() => handleButtonClick(handleClear)}
          data-testid="button-clear"
        >
          C
        </CalculatorButton>
        <CalculatorButton
          variant="operator"
          onClick={() => handleButtonClick(() => handleOperator('%'))}
          data-testid="button-percentage"
        >
          %
        </CalculatorButton>
        <CalculatorButton
          variant="operator"
          onClick={() => handleButtonClick(() => handleOperator('÷'))}
          data-testid="button-divide"
        >
          ÷
        </CalculatorButton>

        {/* Row 2: Numbers 7-9 and multiply */}
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('7'))}
          data-testid="button-number-7"
        >
          7
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('8'))}
          data-testid="button-number-8"
        >
          8
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('9'))}
          data-testid="button-number-9"
        >
          9
        </CalculatorButton>
        <CalculatorButton
          variant="operator"
          onClick={() => handleButtonClick(() => handleOperator('×'))}
          data-testid="button-multiply"
        >
          ×
        </CalculatorButton>

        {/* Row 3: Numbers 4-6 and subtract */}
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('4'))}
          data-testid="button-number-4"
        >
          4
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('5'))}
          data-testid="button-number-5"
        >
          5
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('6'))}
          data-testid="button-number-6"
        >
          6
        </CalculatorButton>
        <CalculatorButton
          variant="operator"
          onClick={() => handleButtonClick(() => handleOperator('−'))}
          data-testid="button-subtract"
        >
          −
        </CalculatorButton>

        {/* Row 4: Numbers 1-3 and add */}
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('1'))}
          data-testid="button-number-1"
        >
          1
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('2'))}
          data-testid="button-number-2"
        >
          2
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('3'))}
          data-testid="button-number-3"
        >
          3
        </CalculatorButton>
        <CalculatorButton
          variant="operator"
          onClick={() => handleButtonClick(() => handleOperator('+'))}
          data-testid="button-add"
        >
          +
        </CalculatorButton>

        {/* Row 5: Zero, decimal, and equals */}
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(() => handleNumber('0'))}
          className="col-span-2"
          data-testid="button-number-0"
        >
          0
        </CalculatorButton>
        <CalculatorButton
          variant="number"
          onClick={() => handleButtonClick(handleDecimal)}
          data-testid="button-decimal"
        >
          .
        </CalculatorButton>
        <CalculatorButton
          variant="equals"
          onClick={() => handleButtonClick(handleEquals)}
          data-testid="button-equals"
        >
          =
        </CalculatorButton>
      </div>

      {/* App Info Footer */}
      <div className="text-center mt-6 pt-4 border-t border-white/20">
        <p className="text-xs text-slate-500">Version 1.0 • Made for Android</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="text-xs text-slate-400">PWA Ready</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-400">Touch Optimized</span>
        </div>
      </div>
    </motion.div>
  );
}
