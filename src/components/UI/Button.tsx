import React, { ReactNode } from "react";

const Button = (props: {children?: ReactNode, iconClass?: string}) => {
  return (
    <button className="btn bg-primary hover:bg-secondary text-white w-full h-auto py-5 gap-3 text-base">
      <i className={`${props.iconClass} w-7 h-7`}></i>
      {props.children}
    </button>
  );
};

export default Button;
