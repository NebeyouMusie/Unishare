import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Login from "./pages/login/Login";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />}/>
    </Route>
  ));

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
