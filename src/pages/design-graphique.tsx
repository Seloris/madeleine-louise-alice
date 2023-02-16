import type { NextPage } from 'next'
import { useState } from 'react'
import { ProjectGrid } from '../components/project-grid'
import { Link } from '../models'

const DesignGraphique: NextPage = () => {
  const [projectRows, setProjectRows] = useState<Row[]>([
    {
      projects: [
        { label: 'KJW', link: '/design-graphique/kjw', fontSize: '4.1em' },
        { label: 'Éternel Parisien', link: '/ep', fontSize: '4.1em' },
      ],
    },
    {
      projects: [
        {
          label: 'Daniel Djordjevic',
          link: '/danieldjordjevic',
          fontSize: '5em',
        },
      ],
    },
    {
      projects: [
        { label: 'Alde', link: '/alde', fontSize: '3.9em' },
        { label: 'Backacia', link: '/backacia', fontSize: '3.9em' },
        { label: 'Wazari', link: '/wazari', fontSize: '3.9em' },
      ],
    },
  ])

  return <ProjectGrid projectRows={projectRows}></ProjectGrid>
}

interface Row {
  projects: (Link & { fontSize: string })[]
}

export default DesignGraphique
