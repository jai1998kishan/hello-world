import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import User from "./components/User";
// import CounterTwo from "./components/CounterTwo";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ErrorBoundary from "./components/ErrorBoundary";
// import Hero from "./components/Hero";
// import PortalDemo from "./components/PortalDemo";
// import FRParentInput from "./components/FRParentInput";
// import FocusInput from "./components/FocusInput";
// import RefsDemo from "./components/RefsDemo";
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
      {/* ===================================================== */}

      {/* React Context  */}
      {/* <UserProvider value="Mahi">
        <ComponentC />
      </UserProvider> */}
      {/* ========================================================== */}

      {/* Render Props Pattern  */}

      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Mahi" : "Guest")} /> */}

      {/* ==================================================  */}

      {/* Higher order Components  */}
      {/* <ClickCounter name="Mahi" /> */}
      {/* <HoverCounter /> */}

      {/* ============================================= */}

      {/* error boundary */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* =========================================== */}

      {/* Portals in react  */}
      {/* <PortalDemo /> */}

      {/* ================================================ */}

      {/* forwarding refs focusing child component throw parent  */}

      {/* <FRParentInput /> */}

      {/* focusing input field */}

      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}

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
