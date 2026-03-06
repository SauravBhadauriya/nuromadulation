"use client"

import { useState } from "react"
import LoginScreen from "@/components/LoginScreen"
import Dashboard from "@/components/Dashboard"
import Profile from "@/components/Profile"

export default function Home() {

const [screen,setScreen] = useState("login")

return (

<div className="min-h-screen bg-slate-100 p-6">

{screen === "login" && (
<LoginScreen onLogin={()=>setScreen("dashboard")} />
)}

{screen === "dashboard" && (
<Dashboard
viewProfile={()=>setScreen("profile")}
logout={()=>setScreen("login")}
/>
)}

{screen === "profile" && (
<Profile goBack={()=>setScreen("dashboard")} />
)}

</div>

)

}