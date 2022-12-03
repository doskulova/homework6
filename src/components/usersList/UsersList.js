import React, {useState} from 'react';

function UserList({userList}) {
    const [posts, setPosts] = useState({});
    function getUserOnly (event) {
        const id = event.target.dataset.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }
    return (
        <>
            {
                userList.map(user =>
                    <ul key={user.id}>
                        <li>
                            <p>Id: {posts.id}</p>
                            <p>Name: {posts.name}</p>
                            <p>Username: {posts.username}</p>
                            <p>Email: {posts.email} </p>
                        </li>
                        <li >
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                                <button onClick={getUserOnly} data-id={user.id}>User Information</button>
                        </li>
                    </ul>)
            }

        </>
    );
}

export default UserList;