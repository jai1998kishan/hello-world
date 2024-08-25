import "./App.css";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Greet from "./components/Greet"; // for default export
// import { Greet } from "./components/Greet"; // for name export
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <FunctionClick />

      <ClassClick />

      {/* ====================================================== */}

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* ========================================================== */}

      {/* props in function component */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}

      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}

      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}

      {/* props in class Component */}
      {/* <Welcome name="mahi" heroName="lightman" /> */}

      {/* <Welcome name="moto" heroName="waterman" /> */}

      {/* <Welcome name="rocky" heroName="stoneman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
