import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const { id } = useParams()
    //console.log(params)

    const [ data, setData ] = useState({})

    useEffect (() => {
        const axiosData = async () => {
            try {
                const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        axiosData()
    }, [])

    return (
        <div>
            <h1>Detalle de {data.name}</h1>
            <p>Email: {data.email}</p>
            <p>Teléfono: {data.phone}</p>
        </div>
    )
}

export default Detail;