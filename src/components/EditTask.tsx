import React, { ChangeEvent, useState } from "react";
import Header from "./Header/Header";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Modal from "./UI/Modal";
import { useAppSelector, useAppDispatch } from "../store";
import { useParams, useNavigate } from "react-router-dom";
import {
  taskActions,
  TaskStatus,
  statusTransitions,
} from "../store/task-slice";

const EditTask = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const taskId = id ? parseInt(id) : "";
  const singleTask = useAppSelector((state) => state.tasks).filter(
    (task) => task.id === taskId
  );
  console.log(singleTask);
  const [taskTitle, setTaskTitle] = useState(singleTask[0].title);
  const [taskDescription, setTaskDescription] = useState(
    singleTask[0].description
  );
  const [status, setStatus] = useState<TaskStatus>(singleTask[0].status);

  const previousStatus = statusTransitions[status][0];
  const nextStatus = statusTransitions[status][1];


  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as TaskStatus);
  };

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.length === 0 || taskDescription.length === 0) {
      (
        document.getElementById("homePageModal") as HTMLDialogElement
      ).showModal();
    } else {
      dispatch(
        taskActions.editTask({
          id: taskId,
          title: taskTitle,
          description: taskDescription,
          status,
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      <Modal
        id="homePageModal"
        title="Whoops!"
        description="Title or description is empty. check your values before editing task."
      />
      <Header />
      <Container>
        <h2 className="text-black font-semibold text-2xl py-5">Edit Task</h2>
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextArea
            placeholder="Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <select value={status} onChange={handleStatusChange} className="select select-bordered w-full text-xl mb-5">
            {previousStatus && (
              <option value={previousStatus}>{previousStatus}</option>
            )}
            <option value={status}>{status}</option>
            {nextStatus && (
              <option value={nextStatus}>{nextStatus}</option>
            )}
          </select>
          <Button iconClass="icon-edit invert">Edit</Button>
        </form>
      </Container>
    </>
  );
};

export default EditTask;
