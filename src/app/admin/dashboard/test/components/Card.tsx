import React from "react";
import cn from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(className, "bg-white p-4 rounded-xl product-shadow")}>
      {children}
    </div>
  );
};

export default Card;
