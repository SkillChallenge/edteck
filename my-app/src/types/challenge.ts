export interface Challenge {
  id: string
  title: string
  skills: string[]
  timeline: string
  severityLevel: string
  status: "Open" | "Closed"
}

