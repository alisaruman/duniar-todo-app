import React, { ChangeEvent, useState, useEffect } from "react";
import Header from "./Header/Header";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Tasks from "./Tasks/Tasks";
import { taskActions } from "../store/task-slice";
import { useDispatch, useSelector } from "react-redux";
import { taskState } from "../store/task-slice";
import { useAppDispatch, useAppSelector } from "../store";

const HomePage = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const dispatch = useAppDispatch();
  // const taskList: any = [
  //   {
  //     id: 0,
  //     title: "test",
  //     description: "test",
  //   },
  //   // {
  //   //   id: 1,
  //   //   title: "test2",
  //   //   description: "test2",
  //   // },
  // ];
  const taskList = useAppSelector((state) => state.tasks);
  console.log(taskList);

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      taskActions.addTask({
        title: taskTitle,
        description: taskDescription,
      })
    );
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className="text-black font-semibold text-2xl py-5">
          Add a new Task
        </h2>
        <form onSubmit={submitHandler}>
          <Input
            placeholder="test"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextArea
            placeholder="Description"
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
