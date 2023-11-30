import React, { ReactNode, useState } from "react";

const random = () => Math.random();

interface TestHeadlessCoinFlipProps {
  children: ({rerun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, isHeads: boolean}) => ReactNode;
}

const TestHeadlessCoinFlip: React.FC<TestHeadlessCoinFlipProps> = ({
  children,
}) => {
  const [flipResult, setFlipResult] = useState<number>(random);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFlipResult(random)
  }
    return <>
  <button onClick={e => {}}></button></>;
};

export default TestHeadlessCoinFlip;
