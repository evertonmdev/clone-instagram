import React from "react";
import { twMerge } from "tw-merge";

const RigthContainerMain = ({ children, className }) => {
  return (
    <div className={twMerge(`flex-1 hidden lg:flex ${className}`)}>
      {children}
    </div>
  );
};

export default RigthContainerMain;
