import { useState, useEffect } from "react";
import { Input } from "./Input";
import {Dropdown} from './Dropdown';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [comment,setComment] = useState("");
  const [longComment,setLongComment] = useState(false);
  const [selectedOption,setSelectedOption] = useState("Facebook")

  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  }, [username, password]);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(event) {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nSelected Application: ${selectedOption} `);
  }
  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          name={"password"}
          value={password}
          setToggle={handleInputChange}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
            type="text"
            name="comment"
            placeholder="Enter Comment"
            value={comment}
            onChange={(e)=>{setComment(e.target.value)}}
            renderTextArea={longComment}
            changeInput={()=>{setLongComment(!longComment)}}
        />
        <Dropdown elements={elements} onChange={(e)=>{setSelectedOption(e.target.value)}}/>
        <button className="action-button">Sign In</button>
      </form>
    </div>
  );
};
