import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";

const DataShow = () => {

const data = useContext(ApiContext)

return (
    <div>
        <h2>Data from context</h2>
        <ul>
        {data.map((user) => (
          <li key={user.id}><Link to={`/detail/${user.id}`}>{user.name}</Link></li>
        ))}
      </ul>
    </div>
)
}

export default DataShow;