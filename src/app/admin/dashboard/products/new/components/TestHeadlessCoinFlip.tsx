import React, { ReactNode, useState } from "react";

const random = () => Math.random();

interface TestHeadlessCoinFlipProps {
  children: (childrenParams: {
    rerun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isHeads: boolean;
  }) => ReactNode;
}

const TestHeadlessCoinFlip: React.FC<TestHeadlessCoinFlipProps> = ({
  children,
}) => {
  const [flipResult, setFlipResult] = useState<number>(random);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFlipResult(random);
  };

  return children({
    rerun: clickHandler,
    isHeads: flipResult < 0.5,
  });
};

export default TestHeadlessCoinFlip;
