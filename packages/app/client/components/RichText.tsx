
import React from 'react'

export interface IRichTextProps {
  text?: string
}

export const RichText: React.FC<IRichTextProps> = ({ text }) => {
  return (
    <div>{text}</div>
  )
}
