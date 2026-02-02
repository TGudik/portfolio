import { createBrowserRouter } from "react-router-dom";

/* Site imports */
import App from "./App";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

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
            {
              path: "/about",
              element: <About />,
            },
        ],
    }
])

export default router