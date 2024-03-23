"use client"

import { signOut } from "next-auth/react"
import React from "react"

const LogoutButton = () => {
    return(
        <span onClick={() => signOut()} style={{color: "black", cursor: "pointer"}}>Logout</span>
    )
}

export default LogoutButton