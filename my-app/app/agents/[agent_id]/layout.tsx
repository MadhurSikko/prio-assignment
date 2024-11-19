import { getAgent } from "@/app/lib/actions";
import Navbar from "@/components/nav-bar";

//add token below
const token = process.env.token || "";


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
        
        <Navbar agent_name={agent_name} token={token} agent_id={agent_id}/>
        
        {children}
      </section>
    )
  }