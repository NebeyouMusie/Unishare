import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard"

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>

      </Route>
      <Route path="/login" element={<Login />}/>
    </>
  ));

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
