import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import ZustandExample from "./pages/ZustandExample.jsx";
import ReactQueryExample from "./pages/ReactQueryExample.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ReactQueryExample/>}
          ></Route>
          <Route
            path="/react-query"
            element={<ReactQueryExample/>}
          ></Route>
          <Route
            path="/react-zustand"
            element={<ZustandExample/>}
          ></Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
