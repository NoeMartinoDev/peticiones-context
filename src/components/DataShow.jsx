import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext"

const DataShow = () => {

const data = useContext(ApiContext)

return (
    <div>
        <h2>Data from context</h2>
        <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
)
}

export default DataShow;