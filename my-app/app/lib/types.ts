export type Agent = {
    agent_id: string
    agent_name: string
    voice_id: string
    phone ?: string 
    last_modification_timestamp: string
}

export type PhoneNumber = {
    phone_number: string
    phone_number_pretty: string
    inbound_agent_id: string
    outbound_agent_id:string
    area_code: number
    nickname: string
    last_modification_timestamp: number
}
