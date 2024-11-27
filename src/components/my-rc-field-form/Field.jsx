import React from "react";
import { useContext } from "react";
import FieldContext from "./FieldContext";

export default function Field({ children, name }) {
  const form = useContext(FieldContext);

  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  //
  React.useLayoutEffect(() => {
    const unregisterField = form.registerField({
      name,
      onStoreChange: forceUpdate,
    });
    // cleanup | destory
    // 组件卸载之前 、 依赖变化之前
    return unregisterField;
  }, []);

  const returnChildNode = React.cloneElement(children, {
    value: form.getFieldValue(name) || "",
    onChange: (e) => {
      const newValue = e.target.value;
      form.setFieldsValue({ [name]: newValue });
    },
  });

  return returnChildNode;
}
