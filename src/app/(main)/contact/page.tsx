import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact UNITZERO for AI automation, chatbots, voice agents, and enterprise AI solutions.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
}

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact