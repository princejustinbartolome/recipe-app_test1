interface Directions {
  instructions: string
  optional: boolean
}

interface DirectionsProps {
  data: Array<Directions>
}

export type {
  DirectionsProps
}
