import { AgentTableWithPagination } from "@/components/agent-table-with-pagination"
import { getAgents } from "@/app/lib/actions"
import { Agent } from "@/app/lib/types";

const TOKEN = "key_ec9abe916c45f1895268f3cae590"


export default async function Home() {
    const agents: Agent[] = await getAgents(TOKEN);
    
    return (
        <main>
            <AgentTableWithPagination agents={agents}/>
        </main>

    )
}