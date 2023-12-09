import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard"
import Posts from "./pages/posts/Posts";
import { useGlobalContext } from "./context/context";

export default function App() {
  const {user} = useGlobalContext();
  console.log(user);
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={user ? <Layout /> : <Login />}>
        <Route index element={<Dashboard />}/>
        <Route path="/posts" element={<Posts />}/>
      </Route>
      <Route path="/login" element={user ? <Dashboard/> : <Login />}/>
    </>
  ));

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
