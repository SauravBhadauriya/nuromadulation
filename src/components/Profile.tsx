"use client"

import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card"
import RecordVisitDialog from "./RecordVisitDialog"

export default function Profile({goBack}:{goBack:()=>void}){

return(

<div className="max-w-6xl mx-auto space-y-6">

<Button variant="outline" onClick={goBack} className="border text-[#0056B3] bg-[#F1F5F9] border-[#0056B3]">
Back to Dashboard
</Button>

<div className="grid grid-cols-3 gap-6">

<Card>

<CardHeader>
<CardTitle className="text-[#0056B3] font-bold text-xl">Patient Profile</CardTitle>
</CardHeader>

<CardContent>

<div className="border-b-2 flex flex-col gap-3 pb-3">
<div className="flex gap-2 ">
<label className="font-semibold">Name:</label>
<p>Kanchan</p>
</div>
<div className="flex gap-2">

<label className="font-semibold">Age:</label>
<p>22</p>
</div>
<div className="flex gap-2">
<label className="font-semibold">Diagnosis:</label>
<p>OCD</p>
</div>
</div>


<h3 className="mt-3 font-bold text-xl">Treatment Parameters</h3>
<div className=" grid grid-cols-2 gap-6 p-3">
<div className="flex gap-2 ">

<label className="font-semibold">MT Amplitude:</label>
<p>50</p>
</div>
<div className="flex gap-2" >
<label className="font-semibold">Frequency:</label>
<p>20</p>
</div>
<div className="flex gap-2">
<label className="font-semibold">Intensity:</label>
<p>60</p>
</div>
<div className="flex gap-2">
<label className="font-semibold">Trains:</label>
<p>50</p>
</div>
<div className="flex gap-2">
<label className="font-semibold">Pulses:</label>
<p>40</p>
</div>
<div className="flex gap-2">
<label className="font-semibold">Theta Burst:</label>
<p>No</p>
</div>
</div>
</CardContent>

</Card>

<Card className="col-span-2">

<CardHeader className="flex flex-row justify-between">

<CardTitle className="text-[#0056B3] font-bold text-xl">Visit History</CardTitle>

<RecordVisitDialog/>

</CardHeader>

<CardContent className="flex justify-between bg-[#F3F4F6] m-3 border-b border-gray-200 font-bold p-3">

<h2>Date</h2>
<h2>Notes/Side Effects</h2>
<h2>Status </h2>

</CardContent>
<div className="border-b flex justify-between px-6 items-center text-center ">
    <h2>28-08-2023</h2>
    <h2>no s/e</h2>
    <h2>Active</h2>
</div>

</Card>

</div>

</div>

)

}