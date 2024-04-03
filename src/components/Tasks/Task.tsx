import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

interface propsValues {
  id: number;
  status: string;
  title: string;
  description: string;
}

const Task = (props: propsValues) => {
  const navigate = useNavigate();
  const editHandler = () => {
    navigate(`/edit-task/${props.id}`);
  }

  return (
    <div className="w-full rounded-lg shadow-2xl bg-white p-4">
      <h3 className="text-black font-semibold text-lg mb-5">{props.title}</h3>
      <p className="min-h-20 mb-12 text-base text-black line-clamp-3">
        {props.description}
      </p>
      <div className="w-full flex items-center justify-between gap-3">
        <button className="btn btn-primary px-8 font-semibold text-base">{props.status}</button>
        <i className="icon-edit w-7 h-7 cursor-pointer" onClick={editHandler}></i>
      </div>
    </div>
  );
};

export default Task;
