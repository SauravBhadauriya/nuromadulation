"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
Table,
TableHeader,
TableRow,
TableHead,
TableBody,
TableCell
} from "@/components/ui/table"

import AddPatientDialog from "./AddPatientDialog"

export default function Dashboard({viewProfile,logout}:{viewProfile:()=>void,logout:()=>void}){

return(

<div className="max-w-6xl mx-auto space-y-6">

<div className="flex justify-between items-center">

<h2 className="text-xl font-bold text-[#0056b3]">
Welcome, Dr. Ankur
</h2>

<div className="flex gap-3">

<AddPatientDialog/>

<Button variant="outline" onClick={logout} className="bg-white text-[#0056b3] border-[#0056b3] hover:bg-[#004494]">
Logout
</Button>

</div>

</div>

<Card>

<CardHeader>
<CardTitle>Active Patients</CardTitle>
</CardHeader>

<CardContent>

<Table>

<TableHeader>
<TableRow>
<TableHead>Name</TableHead>
<TableHead>Age</TableHead>
<TableHead>Gender</TableHead>
<TableHead>Phone</TableHead>
<TableHead>Diagnosis</TableHead>
<TableHead>Action</TableHead>
</TableRow>
</TableHeader>

<TableBody>

<TableRow>

<TableCell>Kanchan</TableCell>
<TableCell>22</TableCell>
<TableCell>Male</TableCell>
<TableCell>9688967880</TableCell>
<TableCell>OCD</TableCell>

<TableCell>
<Button variant="outline" onClick={viewProfile} className="bg-white text-[#0056b3] border-[#0056b3] hover:bg-[#004494]">
View Profile
</Button>
</TableCell>

</TableRow>

</TableBody>

</Table>

</CardContent>

</Card>

</div>

)

}