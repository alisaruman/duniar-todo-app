import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import EditTask from "./components/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/edit-task/:id",
    element: <EditTask />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
