import React, { useContext } from "react"
import UserContext from "../context/UserContext"



function Profile() {
    const { user } = useContext(UserContext)

    if (user == null || !user.username || !user.password) {
        return <h1>Please login</h1>
    } else {
        return <h1>Welcome, {user.username}</h1>
    }
}

export default Profile
