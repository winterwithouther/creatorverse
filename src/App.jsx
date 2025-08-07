import { useRoutes } from "react-router-dom";
import ViewCreators from "./pages/ViewCreator";
import Homepage from "./pages/Homepage";
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreators";
import ShowCreators from "./pages/ShowCreators";
import CreatorDetails from "./pages/CreatorDetails";

import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
      const fetchCreators = async () => {
          const { data, error } = await supabase.from('creators').select('*');
          if (error) {
              console.error('fetching creators error:', error);
          } else {
              console.log('successfully fetched creators', data);
              setCreators(data);
          }
      };

      fetchCreators();
    }, [])

  const routes = useRoutes([
    { path: "/", element: <Homepage/>},
    { path: "/creators", element: <ShowCreators creators={creators}/>},
    { path: "/add", element: <AddCreators/>},
    { path: "/creators/:id", element: <CreatorDetails/>}
  ])
  
  return <>
    <Toaster position="top-right" reverseOrder={false}/>
    {routes}
  </>;
}

export default App
