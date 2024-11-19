'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, Settings, Calendar, Hash, AudioWaveformIcon as Waveform } from 'lucide-react'
import { cn } from "@/lib/utils"

type Voice = {
  name: string
  gender: "Female" | "Male"
}

type VoicesByLanguage = {
  [key: string]: Voice[]
}

const voiceData: VoicesByLanguage = {
  English: [
    { name: "Marie", gender: "Female" },
    { name: "Sarah", gender: "Female" },
    { name: "Mark", gender: "Male" },
    { name: "Sam", gender: "Male" },
  ],
  Spanish: [
    { name: "Maria", gender: "Female" },
    { name: "Sofia", gender: "Female" },
    { name: "Marco", gender: "Male" },
    { name: "Santiago", gender: "Male" },
  ],
  French: [
    { name: "Claire", gender: "Female" },
    { name: "Sophie", gender: "Female" },
    { name: "Pierre", gender: "Male" },
    { name: "Jean", gender: "Male" },
    { name: "Amélie", gender: "Female" },
    { name: "Camille", gender: "Female" },
  ],
  German: [
    { name: "Anna", gender: "Female" },
    { name: "Lena", gender: "Female" },
    { name: "Max", gender: "Male" },
    { name: "Felix", gender: "Male" },
  ],
  Italian: [
    { name: "Giulia", gender: "Female" },
    { name: "Sofia", gender: "Female" },
    { name: "Marco", gender: "Male" },
    { name: "Lorenzo", gender: "Male" },
  ],
}

type NavItem = {
  icon: React.ElementType
  label: string
  content: React.ReactNode
}

export function CompactVoiceSelectionNav() {
  const [selectedNav, setSelectedNav] = useState<string>("voices")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVoices = Object.entries(voiceData).reduce((acc, [language, voices]) => {
    const filtered = voices.filter(
      voice => voice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               language.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (filtered.length > 0) {
      acc[language] = filtered
    }
    return acc
  }, {} as VoicesByLanguage)

  const navItems: { [key: string]: NavItem } = {
    voices: {
      icon: Waveform,
      label: "Voices",
      content: (
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold mb-4">Select Voice</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search Voice/Language"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {Object.entries(filteredVoices).map(([language, voices]) => (
                <div key={language}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-500">{language}</span>
                    <Separator className="flex-1" />
                  </div>
                  <div className="space-y-2">
                    {voices.map((voice, index) => (
                      <div
                        key={`${language}-${index}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 cursor-pointer"
                      >
                        <span className="font-medium">{voice.name}</span>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "bg-[#5f4ee1] text-white hover:bg-[#5f4ee1] hover:text-white",
                          )}
                        >
                          {voice.gender}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    settings: {
      icon: Settings,
      label: "Settings",
      content: <div className="p-4">Settings Content</div>,
    },
    calendar: {
      icon: Calendar,
      label: "Calendar",
      content: <div className="p-4">Calendar Content</div>,
    },
    hashtags: {
      icon: Hash,
      label: "Hashtags",
      content: <div className="p-4">Hashtags Content</div>,
    },
  }

  return (
    <div className="flex bg-white border border-purple-200 rounded-lg shadow-lg max-w-md mx-auto my-8">
      <nav className="flex flex-col items-center w-16 py-4 bg-white space-y-4 border-r border-purple-200">
        {Object.entries(navItems).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setSelectedNav(key)}
            className={cn(
              "p-3 rounded-lg transition-colors",
              selectedNav === key
                ? "bg-purple-100 text-[#5f4ee1]"
                : "text-gray-500 hover:bg-gray-100"
            )}
            title={item.label}
          >
            <item.icon size={24} />
          </button>
        ))}
      </nav>
      <main className="flex-1 overflow-hidden h-[600px]">
        {navItems[selectedNav].content}
      </main>
    </div>
  )
}