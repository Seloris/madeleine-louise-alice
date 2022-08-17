const Logo = () => {
  return (
    <div className="relative flex flex-row border-white font-body uppercase text-white">
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

export default Logo
