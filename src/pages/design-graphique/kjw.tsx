import type { NextPage } from 'next'
import Image from 'next/image'

const Kjw: NextPage = () => {
  return (
    <main className="relative">
      <ProjectHeader title="KJW"></ProjectHeader>
    </main>
  )
}

export const ProjectHeader = (props: { title: string }) => {
  return (
    <div className="flex items-center justify-center">
      <a href="/design-graphique">
        <Image src="/images/arrow.svg" width={140} height={70} />
      </a>
      <div className="ml-8 text-6xl text-green">{props.title}</div>
    </div>
  )
}

export default Kjw
