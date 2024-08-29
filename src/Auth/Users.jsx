import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="">
      <div className="shadow-sm p-3 mb-5 bg-body rounded table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Field</th>
              <th scope="col">Type</th>
              <th scope="col">State Variable</th>
              <th scope="col">Validation</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, id) => (
                <tr key={id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.user_verified_at}</td>
                  <td>{user.created_at}</td>
                  <td>{user.updated_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
