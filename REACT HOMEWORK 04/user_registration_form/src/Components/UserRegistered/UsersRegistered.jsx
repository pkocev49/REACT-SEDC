import "./AllUsers.css";
const UsersRegisterd = ({
  registeredUser,
  handleRemoveUser,
  handleRemoveAllUsers,
}) => {
  return (
    <>
      <div>
        <h1>All Users:</h1>

        <ul>
          {registeredUser.map((user) => (
            <li key={user.id}>
              <span>{user.fullName}</span> - {user.email}
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button className="removeAll" onClick={handleRemoveAllUsers}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default UsersRegisterd;
