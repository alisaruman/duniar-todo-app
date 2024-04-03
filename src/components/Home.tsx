import React, { ChangeEvent, useState } from "react";
import Header from "./Header/Header";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Tasks from "./Tasks/Tasks";
import Modal from "./UI/Modal";
import { taskActions } from "../store/task-slice";
import { useAppDispatch, useAppSelector } from "../store";

const HomePage = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const dispatch = useAppDispatch();

  const taskList = useAppSelector((state) => state.tasks);
  console.log(taskList);

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.length === 0 || taskDescription.length === 0) {
      (
        document.getElementById("homePageModal") as HTMLDialogElement
      ).showModal();
    } else {
      dispatch(
        taskActions.addTask({
          title: taskTitle,
          description: taskDescription,
        })
      );
      setTaskTitle('');
      setTaskDescription('');
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
        <h2 className="text-black font-semibold text-2xl py-5">
          Add a new Task
        </h2>
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
          <Button iconClass="icon-plus">Add</Button>
        </form>
      </Container>
      <Tasks taskList={taskList} />
    </>
  );
};

export default HomePage;
