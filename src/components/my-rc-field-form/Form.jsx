import FieldContext from "./FieldContext";

/* eslint-disable react/prop-types */
export default function Form({ form, children, onFinish, ...props }) {
  return (
    <FieldContext.Provider value={form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish();
          // 校验信息
          // 提交 or 报错
        }}
      >
        {children}
      </form>
    </FieldContext.Provider>
  );
}
