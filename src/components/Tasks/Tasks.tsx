import React, { useEffect } from "react";
import Container from "../UI/Container";
import { useSelector } from "react-redux";
import { taskState } from "../../store/task-slice";
import Task from "./Task";

interface TaskInterface {
  id: number;
  title: string;
  description: string;
}

interface Props {
  taskList: TaskInterface[];
}

const Tasks: React.FC<Props> = ({ taskList }) => {
  // const taskList = useSelector((state: taskState) => state.tasks);

  return (
    <section id="tasks" className="w-full rounded-3xl bg-primary mt-10">
      <Container>
        <h2 className="text-white font-semibold text-2xl py-5">Tasks</h2>
      </Container>

      <div className="tasks-container bg-info rounded-t-3xl py-10">
        {taskList.length === 0 ? (
          <h2 className="text-2xl text-center font-semibold w-full flex items-center justify-center py-36 px-3 lg:px-0">
            You Have nothing to do.
            <br />
            Go get some sleep.
          </h2>
        ) : (
          <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {taskList.map((task) => (
              <Task key={task.id} title={task.title} description={task.description} />
            ))}
          </Container>
        )}
      </div>
    </section>
  );
};

export default Tasks;
