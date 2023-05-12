import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [values, setValues] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNmber: "",
  });

  const inputs = [
    
    {
      id: 1,
      name: "fulltname",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Full name should be your first name and last name",
      label: "Full Name",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "User Name",
      errorMessage: "User name should be 5-16 characters and contain letters and numbers only",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should be valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password Should be 8-16 characters, and should at least contain 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password Does not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 7,
      name: "phonenumber",
      type: "number",
      placeholder: "Phone Numbere",
      errorMessage: "should be valid phone number",
      label: "Phone Number",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Form
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
