import { useState, useCallback } from 'react';

interface CalculatorState {
  display: string;
  previousDisplay: string;
  operation: string | null;
  waitingForNewValue: boolean;
  previousValue: number | null;
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousDisplay: '',
    operation: null,
    waitingForNewValue: false,
    previousValue: null,
  });

  const calculate = useCallback((firstValue: number, operation: string, secondValue: number): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '−':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        if (secondValue === 0) {
          throw new Error('Cannot divide by zero');
        }
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  }, []);

  const formatNumber = useCallback((num: number): string => {
    if (num === 0) return '0';
    if (Math.abs(num) < 0.000001) return '0';
    if (Math.abs(num) > 999999999999) {
      return num.toExponential(6);
    }
    
    const str = num.toString();
    if (str.length > 12) {
      return parseFloat(num.toPrecision(12)).toString();
    }
    return str;
  }, []);

  const handleNumber = useCallback((number: string) => {
    setState(prev => {
      if (prev.waitingForNewValue) {
        return {
          ...prev,
          display: number,
          waitingForNewValue: false,
        };
      }
      
      if (prev.display === '0') {
        return {
          ...prev,
          display: number,
        };
      }
      
      if (prev.display.length >= 12) {
        return prev;
      }
      
      return {
        ...prev,
        display: prev.display + number,
      };
    });
  }, []);

  const handleOperator = useCallback((operator: string) => {
    setState(prev => {
      const currentValue = parseFloat(prev.display);
      
      if (prev.previousValue !== null && prev.operation && !prev.waitingForNewValue) {
        try {
          const result = calculate(prev.previousValue, prev.operation, currentValue);
          const formattedResult = formatNumber(result);
          
          return {
            ...prev,
            display: formattedResult,
            previousDisplay: `${prev.previousValue} ${prev.operation} ${currentValue} =`,
            previousValue: result,
            operation: operator,
            waitingForNewValue: true,
          };
        } catch (error) {
          return {
            ...prev,
            display: 'Error',
            previousDisplay: '',
            operation: null,
            waitingForNewValue: true,
            previousValue: null,
          };
        }
      }
      
      return {
        ...prev,
        previousValue: currentValue,
        operation: operator,
        waitingForNewValue: true,
        previousDisplay: `${currentValue} ${operator}`,
      };
    });
  }, [calculate, formatNumber]);

  const handleEquals = useCallback(() => {
    setState(prev => {
      if (prev.operation && prev.previousValue !== null) {
        const currentValue = parseFloat(prev.display);
        
        try {
          const result = calculate(prev.previousValue, prev.operation, currentValue);
          const formattedResult = formatNumber(result);
          
          return {
            ...prev,
            display: formattedResult,
            previousDisplay: `${prev.previousValue} ${prev.operation} ${currentValue} =`,
            operation: null,
            waitingForNewValue: true,
            previousValue: null,
          };
        } catch (error) {
          return {
            ...prev,
            display: 'Error',
            previousDisplay: '',
            operation: null,
            waitingForNewValue: true,
            previousValue: null,
          };
        }
      }
      
      return prev;
    });
  }, [calculate, formatNumber]);

  const handleClear = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: '0',
    }));
  }, []);

  const handleAllClear = useCallback(() => {
    setState({
      display: '0',
      previousDisplay: '',
      operation: null,
      waitingForNewValue: false,
      previousValue: null,
    });
  }, []);

  const handleDecimal = useCallback(() => {
    setState(prev => {
      if (prev.waitingForNewValue) {
        return {
          ...prev,
          display: '0.',
          waitingForNewValue: false,
        };
      }
      
      if (prev.display.includes('.')) {
        return prev;
      }
      
      return {
        ...prev,
        display: prev.display + '.',
      };
    });
  }, []);

  const handleKeyboard = useCallback((key: string) => {
    if (/[0-9]/.test(key)) {
      handleNumber(key);
    } else if (key === '+') {
      handleOperator('+');
    } else if (key === '-') {
      handleOperator('−');
    } else if (key === '*') {
      handleOperator('×');
    } else if (key === '/') {
      handleOperator('÷');
    } else if (key === '%') {
      handleOperator('%');
    } else if (key === '=' || key === 'Enter') {
      handleEquals();
    } else if (key === '.') {
      handleDecimal();
    } else if (key === 'Escape') {
      handleAllClear();
    } else if (key === 'Backspace') {
      handleClear();
    }
  }, [handleNumber, handleOperator, handleEquals, handleDecimal, handleClear, handleAllClear]);

  return {
    display: state.display,
    previousDisplay: state.previousDisplay,
    handleNumber,
    handleOperator,
    handleEquals,
    handleClear,
    handleAllClear,
    handleDecimal,
    handleKeyboard,
  };
}
