import { EventLocal } from "./event-local";

type AgeRestriction = 'Livre' | '+18'

export interface Event {
  title: string
  description: string
  duration: number
  image: string
  team: string
  ageRestriction: AgeRestriction
  local: EventLocal
}