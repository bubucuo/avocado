import jsx from "./pages/ExamplePage";
import UseRefPage from "./pages/UseRefPage";
import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import ContextPage from "./pages/ContextPage";
import StatePage from "./pages/StatePage";

// redux的核心源码
// function createState() {
//   let state;

//   // get
//   // set

//   return {get,set}
// }

export default function App() {
  return (
    <>
      {/* {jsx} */}
      {/* <StatePage /> */}
      {/* <UseRefPage /> */}
      {/* <UseRefPage /> */}

      {/* <ContextPage /> */}
      <AntdFormPage />
      <MyRCFieldForm />
    </>
  );
}
