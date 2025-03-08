import { ToastContainer } from "react-toastify";
import "./App.scss";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <div className="fixed-bottom">
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
