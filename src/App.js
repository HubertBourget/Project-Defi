import Main from "./main";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Main></Main>
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </>
  );
}

export default App;
