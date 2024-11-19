'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Agent } from '@/app/lib/types'
import { PurpleTag } from "@/components/purple-tag"
import getDate from '@/app/lib/utils'
import { useRouter } from 'next/navigation'

// const agents: Agent[] = [
//   { name: "John Doe", type: "Sales", voice: "Deep", phone: "123-456-7890", editedBy: "Admin1" },
//   { name: "Jane Smith", type: "Support", voice: "Friendly", phone: "234-567-8901", editedBy: "Admin2" },
//   { name: "Mike Johnson", type: "Technical", voice: "Professional", phone: "345-678-9012", editedBy: "Admin1" },
//   { name: "Emily Brown", type: "Sales", voice: "Energetic", phone: "456-789-0123", editedBy: "Admin3" },
//   { name: "Chris Lee", type: "Support", voice: "Calm", phone: "567-890-1234", editedBy: "Admin2" },
//   { name: "Alex Wong", type: "Technical", voice: "Analytical", phone: "678-901-2345", editedBy: "Admin1" },
//   { name: "Sarah Davis", type: "Sales", voice: "Persuasive", phone: "789-012-3456", editedBy: "Admin3" },
//   { name: "Tom Wilson", type: "Support", voice: "Patient", phone: "890-123-4567", editedBy: "Admin2" },
//   { name: "Lisa Chen", type: "Technical", voice: "Precise", phone: "901-234-5678", editedBy: "Admin1" },
//   { name: "Ryan Taylor", type: "Sales", voice: "Charismatic", phone: "012-345-6789", editedBy: "Admin3" },
//   // Add more agents as needed
// ]

const ITEMS_PER_PAGE = 7;

export function AgentTableWithPagination({agents}:{agents: Agent[]}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter();

  // This needs fixing
  const filteredAgents = agents.filter(agent =>
    Object.values(agent).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filteredAgents.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedAgents = filteredAgents.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-gray-300 focus:border-purple-400 focus:ring-purple-400"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-purple-800 font-semibold'>Agent Name</TableHead>
            <TableHead className='text-purple-800 font-semibold'>Agent Type</TableHead>
            <TableHead className='text-purple-800 font-semibold'>Voice</TableHead>
            <TableHead className='text-purple-800 font-semibold'>Phone</TableHead>
            <TableHead className='text-purple-800 font-semibold'>Edited By</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedAgents.map((agent, index) => (
            
            
              <TableRow key={index} onClick={() => router.push(`/agents/${agent.agent_id}`)}>
                    <TableCell>{agent.agent_name}</TableCell>
                    <TableCell><PurpleTag text={agent.agent_name.substring(agent.agent_name.indexOf('(')+1, agent.agent_name.indexOf(')'))} className=''/></TableCell>
                    <TableCell>{agent.voice_id.split("-")[1]}</TableCell>
                    <TableCell>{agent.phone || "-"}</TableCell> 
                    <TableCell>{getDate(agent.last_modification_timestamp) }</TableCell>
                </TableRow>
            
            
          ))}
        </TableBody>
      </Table>
      {filteredAgents.length === 0 && (
        <div className="text-center py-4 text-gray-500">No agents found</div>
      )}
      {filteredAgents.length > 0 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredAgents.length)} of {filteredAgents.length} results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}