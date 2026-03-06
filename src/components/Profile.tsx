"use client"

import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card"
import RecordVisitDialog from "./RecordVisitDialog"

export default function Profile({goBack}:{goBack:()=>void}){

return(

<div className="max-w-6xl mx-auto space-y-6">

<Button variant="outline" onClick={goBack}>
Back to Dashboard
</Button>

<div className="grid grid-cols-3 gap-6">

<Card>

<CardHeader>
<CardTitle>Patient Profile</CardTitle>
</CardHeader>

<CardContent>

<p>Name: Kanchan</p>
<p>Age: 22</p>
<p>Diagnosis: OCD</p>

</CardContent>

</Card>

<Card className="col-span-2">

<CardHeader className="flex flex-row justify-between">

<CardTitle>Visit History</CardTitle>

<RecordVisitDialog/>

</CardHeader>

<CardContent>

<p>2023-08-28 — no s/e — Active</p>

</CardContent>

</Card>

</div>

</div>

)

}