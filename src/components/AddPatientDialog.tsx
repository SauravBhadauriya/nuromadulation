import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogTrigger
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "@/components/ui/select"

export default function AddPatientDialog(){

return(

<Dialog>

<DialogTrigger asChild>
<Button>+ Add New Patient</Button>
</DialogTrigger>

<DialogContent>

<DialogHeader>
<DialogTitle>Add New Patient</DialogTitle>
</DialogHeader>

<div className="grid grid-cols-2 gap-4">

<Input placeholder="Name"/>

<Input type="number" placeholder="Age"/>

<Select>

<SelectTrigger>
<SelectValue placeholder="Gender"/>
</SelectTrigger>

<SelectContent>
<SelectItem value="male">Male</SelectItem>
<SelectItem value="female">Female</SelectItem>
</SelectContent>

</Select>

<Input placeholder="Phone"/>

<Input placeholder="Diagnosis"/>

</div>

<Button className="w-full mt-4">
Save Patient
</Button>

</DialogContent>

</Dialog>

)

}