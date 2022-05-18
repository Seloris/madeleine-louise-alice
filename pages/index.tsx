import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-black ">
      <main className="relative">
        <div className="absolute top-10 left-10 font-body uppercase text-white">
          <div className="origin-bottom-left -translate-y-full rotate-90 whitespace-pre text-6xl ">
            Design graphique
          </div>
          <div className="absolute left-20 -top-2 flex flex-col items-start text-9xl ">
            <div className="border-b-8 border-b-green">Madeleine</div>
            <div className="border-b-8 border-b-green">Louise</div>
            <div className="-ml-20 border-b-8 border-b-green pl-20">Alice</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
