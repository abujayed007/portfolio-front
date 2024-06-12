import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardLayout from "../Pages/MyDashboard/DashboardLayout";
import MyRoutes from "./MyRoutes";
import MyDashboard from "../Pages/MyDashboard/MyDashboard";
import AddProject from "../components/AddProject";
import EditProject from "../components/EditProject";
import MyProjects from "../Pages/MyDashboard/MyProjects";
import ProjectDetails from "../components/ProjectDetails";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:'/details/:id',
                element:<ProjectDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/project/${params.id}`)
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
        {
            path:'/dashboard',
            element:<MyRoutes><MyDashboard/></MyRoutes>
        },
        {
            path:'/dashboard/addproject',
            element:<MyRoutes><AddProject/></MyRoutes>
        },
        {
            path:'/dashboard/editproject/:id',
            element:<MyRoutes><EditProject/></MyRoutes>,
            loader:({params}) => fetch(`http://localhost:5000/project/${params.id}`)
        },
        {
            path:'/dashboard/myproject',
            element:<MyRoutes><MyProjects/></MyRoutes>
        }
        ]
    }
])