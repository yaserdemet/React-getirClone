import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

function App() {

  

  return (
    <div className="App">
      <AuthContext>
        <AppRouter />
        <ToastContainer />
      </AuthContext>
    </div>
  );
}

export default App;
