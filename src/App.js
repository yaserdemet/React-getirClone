import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import BlogContext from "./contexts/BlogContext";

function App() {

  

  return (
    <div className="App">
      <AuthContext>
        <BlogContext>
        <AppRouter />
        </BlogContext>
        <ToastContainer />
      </AuthContext>
    </div>
  );
}

export default App;
