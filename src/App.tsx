import { useState, useRef, useCallback } from "react";

const App = () => {
  const [digit, setDigit] = useState(0);
  const sequenceRef = useRef<number>();
  const randomRef = useRef<number>();
  const historyRef = useRef<number[]>([]);

  const onSequenceClick = useCallback(() => {
    if (sequenceRef.current) {
      clearInterval(sequenceRef.current);
      sequenceRef.current = undefined;
    } else {
      sequenceRef.current = setInterval(() => {
        setDigit((prev) => (prev + 1) % 10);
      }, 500);
    }
  }, []);

  const onRandomClick = useCallback(() => {
    if (randomRef.current) {
      clearInterval(randomRef.current);
      randomRef.current = undefined;
    } else {
      randomRef.current = setInterval(() => {
        const remain_digits = Array(10)
          .fill(0)
          .map((_, index) => index)
          .filter((value) => !historyRef.current.includes(value));
        const random_digit =
          remain_digits[Math.floor(Math.random() * remain_digits.length)];
        setDigit(random_digit);
        historyRef.current.push(random_digit);
        if (historyRef.current.length === 10) {
          clearInterval(randomRef?.current);
          randomRef.current = undefined;
          historyRef.current = [];
        }
      }, 500);
    }
  }, []);

  const onResetClick = useCallback(() => {
    historyRef.current = [];
  }, []);

  return (
    <div className="container">
      <div>{digit}</div>
      <div className="button-list">
        <button onClick={onSequenceClick}>Sequence</button>
        <button onClick={onRandomClick}>Random</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default App;
