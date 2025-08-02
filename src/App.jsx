import { useRoutes } from "react-router-dom";
import ViewCreators from "./pages/ViewCreators";

function App() {
  const routes = useRoutes([
    { path: "/", element: <ViewCreators/>}
  ])
  
  return routes;
}

export default App
