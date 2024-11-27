import { useRef } from "react";

// sy- 实现一个第三方state store
// state
// 1、变量
// todo 2、 组件随变量更新
class FormStore {
  constructor() {
    this.store = {}; // 存储state, key-value
    this.fieldEntities = []; // 存储Field实例
  }

  // 注册与销毁
  registerField = (entity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.name];
    };
  };

  // get
  getFieldValue = (name) => {
    return this.store[name];
  };

  // set
  // {[name]: 'zhangsan}
  setFieldsValue = (newStore) => {
    // update state
    this.store = {
      ...this.store,
      ...newStore,
    };

    // update component Field
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((key) => {
        if (key === entity.name) {
          entity.onStoreChange();
        }
      });
    });
  };

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerField: this.registerField,
    };
  };
}

// 实例化
export default function useForm() {
  const formRef = useRef();
  if (!formRef.current) {
    const instance = new FormStore();
    formRef.current = instance.getForm();
  }

  return [formRef.current];
}
