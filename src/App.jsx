import Homepage from "./pages/Homepage";
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreators";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Homepage/>},
    { path: "/creators", element: <ShowCreators/>},
    { path: "/add", element: <AddCreators/>},
    { path: "/creators/:id", element: <ViewCreator/>}
  ])
  
  return <>
    <Toaster position="top-right" reverseOrder={false}/>
    {routes}
  </>;
}

export default App
