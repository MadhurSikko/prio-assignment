'use client'


export function HeaderEditableAgent({agent_name}: {agent_name: string}) {

    return (
        <div contentEditable={true} suppressContentEditableWarning={true} className="text-white text-3xl">
          {agent_name}
        </div>
    )
}