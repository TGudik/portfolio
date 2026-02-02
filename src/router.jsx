import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/projects",
              element: <Projects />,
            },
        ],
    }
])

export default router