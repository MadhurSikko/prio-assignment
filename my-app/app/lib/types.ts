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

export type Voices = {
    voice_id: string
    voice_type: string
    voice_name: string
    provider: string
    accent: string
    gender: string
    age: string
    avatar_url: string
    preview_audio_url: string
}

export type VoicesByAccent = {
    [key: string]: Voices[]
}

export type NavItem = {
    icon: React.ElementType
    label: string
    content: React.ReactNode
  }
