import {
  useState,
  useCallback,
  useMemo,
  memo,
  useEffect,
  PureComponent,
  Component,
} from "react";

// {}==={}
// function (){} ===function (){}

// function useState(props) {
//   return <div></div>;
// }

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const addClick = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  // const addClick = () => {
  //   let sum = 0;
  //   for (let i = 0; i < count; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // };

  // const addClick = useMemo(() => {
  //   return () => {
  //     let sum = 0;
  //     for (let i = 0; i < count; i++) {
  //       sum += i;
  //     }
  //     return sum;
  //   };
  // }, [count]);

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}

// const ChildMemo = memo(
//   function Child({ addClick }) {
//     useEffect(() => {
//       return () => {
//         console.log("destroy"); //sy-log
//       };
//     }, []);
//     console.log("Child"); //sy-log
//     return (
//       <div className="border">
//         <button onClick={() => console.log(addClick())}>add</button>
//       </div>
//     );
//   },
//   (prev, next) => {
//     return prev.addClick === next.addClick;
//   }
// );

// PureComponent内置了shouldComponentUpdate的Component
// class Child extends PureComponent {
//   render() {
//     console.log("child render");
//     const { addClick } = this.props;
//     return (
//       <div>
//         <h3>Child</h3>
//         <button onClick={() => console.log(addClick())}>add</button>
//       </div>
//     );
//   }
// }

class Child extends Component {
  // 组件更新之前执行
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.addClick !== this.props.addClick;
  }

  render() {
    console.log("child render");
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}
