import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./router";

const App = () => {
  return (
    <div>
      <Toaster />
      <Router />
    </div>
  );
}

export default App;
