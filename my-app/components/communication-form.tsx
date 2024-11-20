import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PhoneNumber } from "@/app/lib/types"

export function CommunicationForm({ PhoneNumber }: {PhoneNumber: PhoneNumber[]}) {
  return (
    <div className="w-80 space-y-4 m-8	">
      <Tabs defaultValue="call" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slightlyDarkerPurple">
          <TabsTrigger value="call" className="data-[state=active]:bg-white">
            Test Call
          </TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-white">
            Test Chat
          </TabsTrigger>
        </TabsList>
      </Tabs>

    {/* <form action={createPhoneCall}> */}
    <Select>
        <SelectTrigger className="w-full bg-slightlyDarkerPurple">
          <SelectValue placeholder="Select Phone Number" />
        </SelectTrigger>
        <SelectContent>
          {PhoneNumber.length === 0? <SelectItem value="1">No phone number found</SelectItem> : 
              PhoneNumber.map((element, index) => {
                const value = (index+1).toString();
                return (
                  <SelectItem key={index} value={value} >{element.phone_number}</SelectItem>
                )
              })
          }
          </SelectContent>
      </Select>

      <Input 
        name="name"
        placeholder="Enter Name" 
        className="bg-slightlyDarkerPurple"
      />

      <Input 
        name="phoneNumber"
        placeholder="Enter Phone Number" 
        className="bg-slightlyDarkerPurple"
      />

      <Button className="w-full bg-darkPurple hover:bg-darkLightPurple">
        Call Me
      </Button>
    {/* </form> */}
    
    </div>
  )
}