import { getAgent, getPhoneNumbers, getVoices } from "@/app/lib/actions";
import { VoiceSelectionNav } from "@/components/voice-selection-nav";
import { CommunicationForm } from "@/components/communication-form";
import { PhoneNumber, Voices, VoicesByAccent } from "@/app/lib/types";
import { ServerFormComponent } from "@/components/server-form";

//add token below
const token = process.env.token || "";

export default async function Page({params, }: { params: Promise<{ agent_id: string }>}) {
    const agent_id = (await params).agent_id
    
    // const agent = await getAgent({token, agent_id});
    const voiceData:VoicesByAccent = await getVoices(token); 

    const PhoneNumber:PhoneNumber[] = await getPhoneNumbers(token);

    return (
        <div className="flex justify-between " style={{background: '#f0f1f5'}}>
            <div>
                <VoiceSelectionNav voiceData={voiceData}/>

            </div>
            
            <ServerFormComponent />
            
            <div className="flex bg-white max-h-screen">
                <CommunicationForm PhoneNumber={PhoneNumber}/>
           </div>
        </div>
    )
  }