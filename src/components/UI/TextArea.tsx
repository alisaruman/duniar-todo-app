import React, { ChangeEventHandler } from "react";

interface propsValues {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

const TextArea = (props: propsValues) => {
  return (
    <textarea
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="w-full h-48 input block input-bordered border-0 border-b rounded-md border-gray2 focus:outline-none focus:border-darkBlue1 bg-gray1 placeholder:text-darkGray1 text-black p-3 mb-5"
    />
  );
};

export default TextArea;
