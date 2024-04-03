import React, { ChangeEvent, useState } from "react";
import Header from "./Header/Header";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Modal from "./UI/Modal";
import { useAppSelector, useAppDispatch } from "../store";
import { useParams, useNavigate } from "react-router-dom";
import { taskActions } from "../store/task-slice";

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
        description="Title or description is empty. check your values before adding new task."
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
          <Button iconClass="icon-edit invert">Edit</Button>
        </form>
      </Container>
    </>
  );
};

export default EditTask;
