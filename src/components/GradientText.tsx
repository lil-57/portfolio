import { ReactNode } from "react"

export default function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}