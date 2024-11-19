import { AgentTableWithPagination } from "@/components/agent-table-with-pagination"
import { getAgents } from "@/app/lib/actions"
import { Agent } from "@/app/lib/types";

// add token below
const token = process.env.token || "";


export default async function Home() {
    const agents: Agent[] = await getAgents(token);
    
    return (
        <main>
            <AgentTableWithPagination agents={agents}/>
        </main>

    )
}