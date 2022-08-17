import type { NextPage } from 'next'
import { useState } from 'react'
import { Link } from '../models'

const DesignGraphique: NextPage = () => {
  const [projectRows, setProjectRows] = useState<Row[]>([
    {
      projects: [
        { label: 'KJW', link: '/kjw', fontSize: '4.1em' },
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

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-green">
      {projectRows.map((row, i) => {
        return (
          <div
            key={i}
            className={`flex flex-row flex-wrap justify-between leading-none`}
          >
            {row.projects.map((project) => (
              <div
                key={project.link}
                className="mx-3 uppercase"
                style={{ fontSize: project.fontSize }}
              >
                {project.label}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

interface Row {
  projects: (Link & { fontSize: string })[]
}

export default DesignGraphique
