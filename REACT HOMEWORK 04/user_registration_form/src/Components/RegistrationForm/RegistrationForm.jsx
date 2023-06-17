import { useState } from "react";
import validator from "validator";
import UsersRegisterd from "../UserRegistered/UsersRegistered";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [registeredUser, setRegisteredUser] = useState([]);
  const [errors, setErrors] = useState({});
  const [showRemoveAllButton, setShowRemoveAllButton] = useState(false);
  const handleFullName = (fnValue) => {
    setFullName(fnValue);
    console.log(fnValue);
  };
  const handleEmail = (EmailValue) => {
    setEmail(EmailValue);
    console.log(EmailValue);
  };
  const handlePassword = (PasswordValue) => {
    setPassword(PasswordValue);
    console.log(PasswordValue);
  };
  const handleAddUser = (e) => {
    const valErr = {};
    e.preventDefault();
    if (!validator.isEmail(email)) {
      valErr.email = "Invalid email format";
    }
    if (password.length < 7) {
      valErr.password = "Password must be at least 7 characters long";
    }
    if (Object.keys(valErr).length > 0) {
      setErrors(valErr);
      return;
    }
    const user = {
      id: Date.now(),
      fullName: fullName,
      email: email,
      password: password,
    };
    console.log("User Created", user);
    console.log("All Users", registeredUser);

    setRegisteredUser([...registeredUser, user]);
    setFullName("");
    setEmail("");
    setPassword("");
    setErrors("");
    setShowRemoveAllButton(true);
  };

  const handleRemoveUser = (userId) => {
    const remainingUser = registeredUser.filter((user) => user.id !== userId);
    setRegisteredUser(remainingUser);
  };
  const handleRemoveAllUsers = () => {
    const allUsers = [];
    setRegisteredUser(allUsers);
    setShowRemoveAllButton(false);
  };

  return (
    <div>
      <div>
        <h1>Register Here</h1>
        <form onSubmit={handleAddUser} action="submit">
          <div class="fullNameDiv">
            <label for="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName || ""}
              onChange={(e) => handleFullName(e.target.value)}
            />
          </div>
          <div class="emailDiv">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email || ""}
              onChange={(e) => handleEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div class="passwordDiv">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password || ""}
              onChange={(e) => handlePassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
      <UsersRegisterd
        registeredUser={registeredUser}
        handleRemoveUser={handleRemoveUser}
        handleRemoveAllUsers={handleRemoveAllUsers}
      />
      <button
        className="removeAll"
        onClick={handleRemoveAllUsers}
        style={{ display: showRemoveAllButton ? "block" : "none" }}
      >
        Remove All
      </button>
    </div>
  );
};

export default RegistrationForm;
