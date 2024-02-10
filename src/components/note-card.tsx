export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left outline-none focus-visible:ring-2 focus-visible:ring-lime-500">
      <span className="text-sm font-medium text-slate-300">há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at
        repudiandae nobis sit suscipit dolor, adipisci nisi! Ducimus blanditiis
        excepturi, praesentium impedit architecto sunt vel accusantium sapiente
        similique a porro? at repudiandae nobis sit suscipit dolor, adipisci
        nisi! Ducimus blanditiis excepturi, praesentium impedit architecto sunt
        vel accusantium sapiente similique a porro?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 pointer-events-none" />
    </button>
  )
}
