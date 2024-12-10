import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Валидация с использованием Yup
  const validationSchema = Yup.object({
    todo: Yup.string()
      .min(5, "Задача повинна бути не менше 5 символів")
      .required("Це поле обов'язкове"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.todo]);
    resetForm();
  };

  return (
    <div>
      <h1>TODO List</h1>
      <Formik
        initialValues={{ todo: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="todo"
              placeholder="Додати задачу"
            />
            <ErrorMessage name="todo" component="div" style={{ color: "red" }} />
          </div>
          <button type="submit">Додати</button>
        </Form>
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
