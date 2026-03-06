import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginScreen({onLogin}:{onLogin:()=>void}){

return(

<div className="flex justify-center items-center h-screen">

<Card className="w-[400px]">

<CardHeader>
<CardTitle>Clinic Portal</CardTitle>
</CardHeader>

<CardContent className="space-y-4">

<Input placeholder="Email" defaultValue="drankur.rml@gmail.com"/>

<Input type="password" placeholder="Password" defaultValue="password123"/>

<Button className="w-full" onClick={onLogin}>
Log In
</Button>

</CardContent>

</Card>

</div>

)

}