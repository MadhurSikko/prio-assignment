import { getAgent, updateAgentName } from "@/app/lib/actions";
import { HeaderEditableAgent } from "@/components/headerAgent";
import Navbar from "@/components/nav-bar";
//add token below
const token = "key_ec9abe916c45f1895268f3cae590";


export default async function layout({
    children, params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: Promise<{ agent_id: string }>
  }) {
    
    const agent_id = (await params).agent_id;
    const {agent_name} = await getAgent({token, agent_id})   
    
    
    return (
      <section>
        {/* <div className="flex items-center justify-center bg-darkPurple h-20 ">
            <HeaderEditableAgent agent_name={agent_name} />
        </div> */}
        <Navbar agent_name={agent_name} token={token} agent_id={agent_id}/>

        <div>

        </div>
        
        {children}
      </section>
    )
  }