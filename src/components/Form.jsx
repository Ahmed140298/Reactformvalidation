import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, id, onChange, errorMessage, ...otherThings } = props;

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...otherThings}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => otherThings.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Form;
