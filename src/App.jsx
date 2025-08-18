import Homepage from "./pages/Homepage";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreator from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Homepage/>},
    { path: "/creators", element: <ShowCreator/>},
    { path: "/add", element: <AddCreator/>},
    { path: "/creators/:id", element: <ViewCreator/>},
    { path: "/creators/:id/edit", element: <EditCreator/>}
  ])
  
  return <>
    <Toaster position="top-right" reverseOrder={false}/>
    {routes}
  </>;
}

export default App
