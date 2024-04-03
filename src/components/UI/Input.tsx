import React, { ChangeEventHandler } from "react";

interface propsValues {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = (props: propsValues) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="input input-bordered block border-0 border-b rounded-md border-gray2 w-full focus:outline-none focus:border-darkBlue1 bg-gray1 placeholder:text-darkGray1 text-black p-3 mb-5"
    />
  );
};

export default Input;
