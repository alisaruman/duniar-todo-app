import React from "react";
import Button from "../UI/Button";

interface propsValues {
  title: string;
  description: string;
}

const Task = (props: propsValues) => {
  return (
    <div className="w-full rounded-lg shadow-2xl bg-white p-4">
      <h3 className="text-black font-semibold text-lg mb-5">{props.title}</h3>
      <p className="min-h-20 mb-12 text-base text-black line-clamp-3">
        {props.description}
      </p>
      <div className="w-full flex items-center justify-between gap-3">
        <button className="btn btn-primary px-8 font-semibold text-base">Todo</button>
        <i className="icon-edit w-7 h-7 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Task;
