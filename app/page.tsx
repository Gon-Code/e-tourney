import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center overflow-hidden bg-zinc-950 py-16 sm:py-24">
      {/* Background decorations - subtle glow effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950/50 to-zinc-950" />
      <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-600/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-950/20 px-3 py-1 text-xs text-yellow-500 backdrop-blur-sm sm:px-4 sm:py-1.5">
          <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
          <span>Plataforma MVP para la Grieta del Invocador 5v5</span>
        </div>

        {/* Hero title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl uppercase">
          Arma tu Torneo de LoL <br />
          <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)]">
            Como los Profesionales
          </span>
        </h1>

        {/* Hero description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Gestiona brackets interactivos (BO1, BO3, BO5), inscribe equipos con capitanes designados y organiza a tu comunidad de League of Legends en minutos.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/tournaments"
            className="w-full sm:w-auto rounded border border-yellow-600 bg-gradient-to-b from-yellow-500 to-yellow-600 px-8 py-3.5 text-sm font-bold tracking-wider uppercase text-zinc-950 shadow-[0_4px_20px_rgba(234,179,8,0.25)] transition-all hover:brightness-110 active:scale-95 text-center"
          >
            Ver Torneos Activos
          </Link>
          <Link
            href="/tournaments/new"
            className="w-full sm:w-auto rounded border border-zinc-700 bg-zinc-900/50 px-8 py-3.5 text-sm font-bold tracking-wider uppercase text-zinc-300 backdrop-blur-sm transition-all hover:bg-zinc-800 hover:text-zinc-100 active:scale-95 text-center"
          >
            Crear un Torneo
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-20 max-w-4xl sm:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3 text-left">
            
            {/* Feature 1 */}
            <div className="flex flex-col rounded-lg border border-yellow-600/10 bg-zinc-900/40 p-6 backdrop-blur-sm hover:border-yellow-600/30 transition-all duration-300 hover:-translate-y-1 group">
              <dt className="text-lg font-bold leading-7 text-yellow-500 uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">⚔️</span> Brackets de Series
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                <p className="flex-auto">
                  Configura cruces automáticos BO1, BO3 o BO5. Registra los resultados de partidas individuales para avanzar en la serie.
                </p>
              </dd>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col rounded-lg border border-yellow-600/10 bg-zinc-900/40 p-6 backdrop-blur-sm hover:border-yellow-600/30 transition-all duration-300 hover:-translate-y-1 group">
              <dt className="text-lg font-bold leading-7 text-yellow-500 uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">🛡️</span> Equipos y Roster
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                <p className="flex-auto">
                  Gestiona la inscripción de equipos con sus miembros. Define capitanes que se encarguen de la comunicación y el registro.
                </p>
              </dd>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col rounded-lg border border-yellow-600/10 bg-zinc-900/40 p-6 backdrop-blur-sm hover:border-yellow-600/30 transition-all duration-300 hover:-translate-y-1 group">
              <dt className="text-lg font-bold leading-7 text-yellow-500 uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">💎</span> Grieta del Invocador
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                <p className="flex-auto">
                  Mapeado específico para juegos 5v5. Guarda los Riot IDs de los jugadores para facilitar la creación de las salas de juego.
                </p>
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
