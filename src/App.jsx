import { useRoutes } from "react-router-dom";
import ViewCreators from "./pages/ViewCreators";
import Homepage from "./pages/Homepage";
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreators";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Homepage/>}
  ])
  
  return routes;
}

export default App
