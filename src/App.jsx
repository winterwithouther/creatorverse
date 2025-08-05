import { useRoutes } from "react-router-dom";
import ViewCreators from "./pages/ViewCreator";
import Homepage from "./pages/Homepage";
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreators";
import ShowCreators from "./pages/ShowCreators";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Homepage/>},
    { path: "/creators", element: <ShowCreators/>},
    { path: "/add", element: <AddCreators/>}
  ])
  
  return <>
    <Toaster position="top-right" reverseOrder={false}/>
    {routes}
  </>;
}

export default App
