import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddPatientDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#0056b3] hover:bg-[#004494]">
          + Add New Patient
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#0056b3] text-xl font-bold">
            Add New Patient
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Basic Info</h3>
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">Name</label>
              <Input className="h-10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Age</label>
                <Input type="number" className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Gender</label>
                <Select defaultValue="male">
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Male" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Phone</label>
                <Input className="h-10" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Diagnosis</label>
                <Input className="h-10" />
              </div>
            </div>
          </div>

          {/* Treatment Parameters Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Treatment Parameters</h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">MT Amplitude</label>
                <Input className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Frequency</label>
                <Input className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Intensity</label>
                <Input className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Trains</label>
                <Input className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Pulses</label>
                <Input className="h-10" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Theta Burst</label>
                <Select defaultValue="no">
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="No" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button className="w-full bg-[#0056b3] hover:bg-[#004494] text-white py-6 text-lg font-semibold">
            Save Patient
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}