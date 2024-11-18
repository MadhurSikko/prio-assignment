'use client'

import React from 'react'

interface PurpleTagProps {
  text: string
  className?: string
}

export function PurpleTag({ text, className = '' }: PurpleTagProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ${className}`}
      style={{ backgroundColor: '#5f4ee1' }}
    >
      {text===""?"Agent":text}
    </span>
  )
}