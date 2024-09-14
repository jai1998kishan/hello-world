import "./App.css";
import RefsDemo from "./components/RefsDemo";
// import ParentComp from "./components/ParentComp";
// import Table from "./components/Table";
// import FragmentDemo from "./components/FragmentDemo";
// import LifecycleA from "./components/LifecycleA";
// import Form from "./components/Form";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import Inline from "./components/Inline";
// import Stylesheet from "./components/Stylesheet";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import ParentComponent from "./components/ParentComponent";
// import EventBind from "./components/EventBind";
// import ClassClick from "./components/ClassClick";
// import FunctionClick from "./components/FunctionClick";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Greet from "./components/Greet"; // for default export
// import { Greet } from "./components/Greet"; // for name export
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* focusing input field */}
      <RefsDemo />

      {/* =============================================== */}

      {/* PureComponent  */}
      {/* <ParentComp /> */}
      {/* ============================================ */}
      {/* <Table /> */}
      {/* .................................... */}
      {/* fragment  */}
      {/* <FragmentDemo /> */}
      {/* ========================================= */}
      {/* lifecycle mounting */}
      {/* <LifecycleA /> */}
      {/* ============================================= */}
      {/* form inputs */}
      {/* <Form /> */}
      {/* ======================================================== */}

      {/* regular stylesheet  */}
      {/* <h1 className="error">Error</h1> */}
      {/* module stylesheet css  */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* ........................................................ */}

      {/* inline styleing */}
      {/* <Inline /> */}

      {/* ....................................................... */}

      {/* styling css  */}
      {/* <Stylesheet primary={true} /> */}
      {/* ========================================================= */}

      {/* List Rendering  */}

      {/* <NameList /> */}
      {/* ====================================================== */}

      {/* conditional rendering */}

      {/* <UserGreeting /> */}

      {/* ================================================ */}

      {/* video 15 codevolution */}
      {/* <ParentComponent /> */}
      {/* =================================================== */}
      {/* event binding */}

      {/* <EventBind /> */}

      {/* ========================================================== */}
      {/* event click  */}

      {/* <FunctionClick /> */}

      {/* <ClassClick /> */}

      {/* ====================================================== */}

      {/* state  */}

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

      {/* ....................................................... */}

      {/* props in class Component */}

      {/* <Welcome name="mahi" heroName="lightman" /> */}

      {/* <Welcome name="moto" heroName="waterman" /> */}

      {/* <Welcome name="rocky" heroName="stoneman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
