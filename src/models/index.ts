export interface Link {
  label: string
  link: string
}

export interface Row {
  projects: (Link & { fontSize: string })[]
}
