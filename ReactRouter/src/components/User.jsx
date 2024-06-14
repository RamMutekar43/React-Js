import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userid} = useParams()

    return(
        <>
        <h1 className="w-full px-28 text-center">User: {userid}</h1>
        </>
    )
}

export default User;