import "./styles/index.css";
//import { NavBar } from "./components/navbar/NavBar";
import { CustomBanner } from "./components/banners/CustomBanner";
import { Gimoji } from "./Gimoji";
import { Task } from "./components/task/Task";
function App() {
  return (
    <>
      <CustomBanner />
      <Gimoji />
      <Task />
    </>
  );
}

export default App;
