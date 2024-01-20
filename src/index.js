// Importing the necessary function from the react-dom library
import {
    createRoot
} from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Importing the main App component from the "./App" file
import App from "./App"
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import { Courses as TopCourses } from './pages/home/Courses'

import QuickOptions from './pages/home/QuickOptions'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import TeachProfile from './pages/TeacherProfile'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlayList from './pages/Playlist'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Update from './pages/Update'
import WatchVideo from './pages/WatchVideo'

// Getting the DOM element with the id "root"
const divContainer = document.getElementById("root")

// Creating a root for the React application using createRoot and associating it with the divContainer
const root = createRoot(divContainer)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <>Error Page</>,
        // errorElement: <ErrorPage />,
        // loader: appLoader,
        // action: appAction,
        children: [
            {
                errorElement: <>Error Page</>,
                children: [
                    {
                        index: true, element: <Home />
                    },
                    {
                        path: "top-courses",
                        element: <TopCourses />,
                    },
                    {
                        path: "about",
                        element: <About />,
                    },

                    {
                        path: "courses",
                        element: <Courses />,
                    },

                    {
                        path: "teachers",
                        element: <Teachers />,
                    },

                    {
                        path: "contact",
                        element: <Contact />,
                    },
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "register",
                        element: <Register />,
                    },
                    {
                        path: "teacher-profile",
                        element: <TeachProfile />,
                    },
                    {
                        path: "update",
                        element: <Update />,
                    },
                    {
                        path: "watch-video",
                        element: <WatchVideo />,
                    },
                    {
                        path: "playlist",
                        element: <PlayList />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ]
            },

        ],
    },
])

// Rendering the main App component within the root
root.render(<RouterProvider router={router} />)