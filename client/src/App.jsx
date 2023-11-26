import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Login from "./pages/login/Login";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={<Login />}/>
    </Route>
  ));

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
