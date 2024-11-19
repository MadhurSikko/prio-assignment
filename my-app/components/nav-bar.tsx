'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { updateAgentName } from '@/app/lib/actions'

async function ChangeName({token, agent_id}:{token: string, agent_id: string}, agentName: string) {
    await updateAgentName({token, agent_id}, agentName);
}

export default function Navbar({token, agent_id, agent_name}:{token: string, agent_id: string, agent_name: string}) {
  const [agentName, setAgentName] = useState(agent_name)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleNameClick = () => {
    setIsEditing(true)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgentName(e.target.value)
  }

  const handleNameBlur = () => {
    setIsEditing(false)
    ChangeName({token, agent_id}, agentName);
  }

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
      ChangeName({token, agent_id}, agentName);
    }   
  }

  return (
    <nav className="bg-darkPurple border-b flex justify-center items-center p-7">
                      
            <div className="ml-4">
              {isEditing ? (
                <Input
                  ref={inputRef}
                  type="text"
                  value={agentName}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  onKeyDown={handleNameKeyDown}
                  className="w-40 text-lg text-white text-3xl"
                  aria-label="Edit agent name"
                />
              ) : (
                <button
                  onClick={handleNameClick}
                  className="text-3xl  text-foreground text-white"
                  aria-label="Click to edit agent name"
                >
                  {agentName}
                </button>
              )}
            </div>
          
        
      
    </nav>
  )
}