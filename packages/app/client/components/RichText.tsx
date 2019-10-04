
import React from 'react'

export interface IRichTextProps {
  text?: string
}

/**
 * * Our Dumb component that simply accepts content as props
 */
export const RichText: React.FC<IRichTextProps> = ({ text }) => {
  return (
    <div>
      Awesome Rich Text: {text}
    </div>
  )
}
