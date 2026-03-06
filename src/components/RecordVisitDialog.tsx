import {
Dialog,
DialogTrigger,
DialogContent,
DialogHeader,
DialogTitle
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RecordVisitDialog(){

return(

<Dialog>

<DialogTrigger asChild>
<Button>Record Visit</Button>
</DialogTrigger>

<DialogContent>

<DialogHeader>
<DialogTitle>Record Patient Visit</DialogTitle>
</DialogHeader>

<Input type="date"/>

<Textarea placeholder="Clinical Notes / Side Effects"/>

<Button className="w-full">
Save Visit
</Button>

</DialogContent>

</Dialog>

)

}