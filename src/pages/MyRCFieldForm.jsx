import React, { Component, useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Input from "../components/Input";
import Form, { Field, useForm } from "../components/my-rc-field-form";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

// state (state提升) / ref / effect/ custom hook /

export default function MyRCFieldForm(props) {
  // const [form] = Form.useForm();

  const [username, setUsername] = React.useState("admin");

  // 数据仓库实例
  const [form] = useForm();

  const onFinish = (val) => {
    console.log(
      "%c [  ]-20",
      "font-size:13px; background:pink; color:#bf2c9f;",
      store.getFieldValue()
    );

    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  React.useLayoutEffect(() => {
    console.log("form", form); //sy-log
    form.setFieldsValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
          {/* <input value={} onChange={}/> */}
        </Field>

        <Field name="password" rules={[passworRules]}>
          <Input type="password" placeholder="input UR Password" />
        </Field>

        {username === "admin" && (
          <Field name="age" rules={[passworRules]}>
            <Input type="age" placeholder="input UR age" />
          </Field>
        )}

        <button>Submit</button>
      </Form>
    </div>
  );
}

// 实现一个第三方的状态管理库

// export default class MyRCFieldForm extends Component {
//   formRef = React.createRef();
//   componentDidMount() {
//     console.log("form", this.formRef.current); //sy-log
//     this.formRef.current.setFieldsValue({ username: "default" });
//   }

//   onFinish = (val) => {
//     console.log("onFinish", val); //sy-log
//   };

//   // 表单校验失败执行
//   onFinishFailed = (val) => {
//     console.log("onFinishFailed", val); //sy-log
//   };
//   render() {
//     return (
//       <div>
//         <h3>MyRCFieldForm</h3>
//         <Form
//           ref={this.formRef}
//           onFinish={this.onFinish}
//           onFinishFailed={this.onFinishFailed}
//         >
//           <Field name="username" rules={[nameRules]}>
//             <Input placeholder="Username" />
//           </Field>
//           <Field name="password" rules={[passworRules]}>
//             <Input placeholder="Password" />
//           </Field>
//           <button>Submit</button>
//         </Form>
//       </div>
//     );
//   }
// }
