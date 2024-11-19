import { getAgent, updateAgentName } from "@/app/lib/actions";

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
        <div className="flex items-center justify-center bg-darkPurple h-20 ">
            <p className="text-white text-3xl" contentEditable={true} suppressContentEditableWarning={true}>{agent_name}</p>
            
            {/* <form action={updateAgentName}>
                <input type="hidden" name="token" value={token} />
                <input type="hidden" name="agent_id" value={agent_id} />
                <input type="text" name="agent_name" defaultValue={agent_name}></input>
                <input type="submit"></input>
            </form> */}

        </div>

        <div>

        </div>
        
        {children}
      </section>
    )
  }