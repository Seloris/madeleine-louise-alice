import type { NextPage } from 'next'
import { useState } from 'react'
import { ProjectGrid } from '../components/project-grid'
import { Row } from '../models'

const DesignGraphique: NextPage = () => {
  const [projectRows, setProjectRows] = useState<Row[]>([
    {
      projects: [
        {
          label: "Projet de diplôme : l'ambiance est un reflet",
          link: '/design-graphique/kjw',
          fontSize: '3.9em',
        },
      ],
    },
    {
      projects: [
        {
          label: 'Manifeste 1/2 : Les panneaux sérigraphiés',
          link: '/danieldjordjevic',
          fontSize: '4.1em',
        },
      ],
    },
    {
      projects: [
        {
          label: 'Manifeste 2/2 : Le site web',
          link: '/danieldjordjevic',
          fontSize: '4.1em',
        },
        {
          label: 'Affiches',
          link: '/danieldjordjevic',
          fontSize: '4.1em',
        },
      ],
    },
    {
      projects: [
        { label: 'Workshop Vidéo 3D', link: '/alde', fontSize: '3.9em' },
        {
          label: 'Un parcours dans Paris',
          link: '/backacia',
          fontSize: '3.9em',
        },
      ],
    },
    {
      projects: [
        {
          label: 'Performance radiophonique',
          link: '/alde',
          fontSize: '3.9em',
        },
        { label: 'Mémoire', link: '/backacia', fontSize: '5.5em' },
      ],
    },
  ])

  return <ProjectGrid projectRows={projectRows}></ProjectGrid>
}

export default DesignGraphique
