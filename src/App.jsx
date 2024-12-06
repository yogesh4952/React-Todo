import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="h-[100vh] flex-col w-[100vw] bg-slate-900 text-white flex justify-center items-center">
      <Form />
      <Todos />
    </div>
  );
}

export default App;
