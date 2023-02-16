import { Row } from '../models'

export const ProjectGrid = (props: { projectRows: Row[] }) => {
  return (
    <div className="mx-auto flex flex-1 flex-col justify-center text-green">
      {props.projectRows.map((row, i) => {
        return (
          <div
            key={i}
            className={`flex flex-row flex-wrap items-center justify-between leading-none`}
          >
            {row.projects.map((project) => (
              <a
                href={project.link}
                key={project.link}
                className="mx-3 uppercase"
                style={{ fontSize: project.fontSize }}
              >
                {project.label}
              </a>
            ))}
          </div>
        )
      })}
    </div>
  )
}
