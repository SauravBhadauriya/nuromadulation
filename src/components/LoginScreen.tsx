import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginScreen({onLogin}:{onLogin:()=>void}){

return(

<div className="flex justify-center items-center h-screen">

<Card className="w-[400px]">

<CardHeader>
<CardTitle className="text-2xl font-bold text-[#0056b3] text-center" >Clinic Portal</CardTitle>
</CardHeader>

<CardContent className="space-y-4">
<label className="text-sm font-medium text-gray-700">Email</label>
<Input placeholder="Email" defaultValue="drankur.rml@gmail.com"/>
<label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
<Input type="password" placeholder="Password" defaultValue="password123"/>

<Button className="w-full bg-[#0056b3] hover:blue-600 " onClick={onLogin}>
Log In
</Button>

</CardContent>

</Card>

</div>

)

}