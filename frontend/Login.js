import { useState } from 'react';
import ReactDOM from "react-dom";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const data = [
    {
      "id": 1,
      "username": "user101",
      "password": "123456",
      "name": "Jacky"
    },
    {
      "id": 2,
      "username": "user102",
      "password": "123456",
      "name": "Jane"
    },
    {
      "id": 3,
      "username": "user103",
      "password": "123456",
      "name": "Tom"
    },
    {
      "id": 4,
      "username": "user104",
      "password": "123456",
      "name": "Helen"
    },
    {
      "id": 5,
      "username": "user105",
      "password": "123456",
      "name": "Mark"
    }
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];


    const userData = data.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.username });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;