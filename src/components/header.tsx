import { useRouter } from 'next/router'
import { useState } from 'react'
import { Link } from '../models'

export const Header = () => {
  const router = useRouter()

  const [links, setLinks] = useState<Link[]>([
    { label: 'Design graphique', link: '/design-graphique' },
    {
      label: 'Photographie',
      link: '/photographie',
    },
    {
      label: "Projets d'études",
      link: '/projets-etudes',
    },
    {
      label: 'Dessin',
      link: '/dessin',
    },
    {
      label: 'À propos',
      link: '/a-propos',
    },
  ])

  return (
    <div className="flex w-full flex-row p-4">
      <Logo />
      <div className="flex-1"></div>
      <div className="flex flex-row font-heading">
        {links.map((link) => {
          const isActiveClass =
            router.pathname === link.link ? 'text-green' : ''
          return (
            <a
              key={link.link}
              href={link.link}
              className={`mx-3 font-normal ${isActiveClass}`}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <div className="relative flex flex-row border-white font-body uppercase">
      <div className="w-7">
        <div className="absolute origin-bottom-left -translate-y-full rotate-90 whitespace-pre text-lg">
          Design graphique
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start text-4xl leading-9">
        <div className="border-b-2 border-b-green">Madeleine</div>
        <div className="border-b-2 border-b-green">Louise</div>
        <div className="-ml-5 border-b-2 border-b-green pl-5 ">Alice</div>
      </div>
    </div>
  )
}

export default Header
