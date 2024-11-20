import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export function ServerFormComponent() {
  return (
    <form  className="w-1/2 m-8">
      <div className="mb-10">
        <Label htmlFor="name" className="font-bold	text-3xl	">Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="" 
          required
          className="bg-white border-borderBlack rounded-lg		 "
        />
      </div>
      <div className="">
        <Label htmlFor="prompt" className="font-bold	text-3xl">Prompt</Label>
        <Textarea 
          id="prompt" 
          name="prompt" 
          placeholder="" 
          required
          className="max-h-screen bg-white border-borderBlack rounded-lg	"
          rows={30}
        />
      </div>
      
    </form>
  )
}