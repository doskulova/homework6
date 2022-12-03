import React, {useState} from 'react';
import UserList from "../../components/usersList/UsersList";

function UserPage(props) {
    const [get, setGet] = useState([]);
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setGet(data))
    }
    return (
        <div>
            <h1>Users</h1>
            <button onClick={getUsers}>Get Users</button>
            <UserList userList={get}/>
        </div>
    );
}
export default UserPage;