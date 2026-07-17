import Link from "next/link";
import { TournamentStatus, SeriesFormat } from "@prisma/client";

// Mock data based on our schema for the list view
const mockTournaments = [
  {
    id: "tourney-1",
    name: "Copa de la Grieta - Invierno 2026",
    description: "El torneo invernal de nuestra comunidad. ¡Demuestra quién es el rey de la Grieta!",
    status: "REGISTRATION" as TournamentStatus,
    maxTeams: 8,
    registeredTeamsCount: 5,
    startDate: "2026-07-25T19:00:00Z",
    prizePool: "10,000 Riot Points",
  },
  {
    id: "tourney-2",
    name: "Clash Comunitario - Fin de Semana",
    description: "Torneo rápido de fin de semana. Series BO1 en rondas eliminatorias directas.",
    status: "ACTIVE" as TournamentStatus,
    maxTeams: 4,
    registeredTeamsCount: 4,
    startDate: "2026-07-18T18:00:00Z",
    prizePool: "Caja de Aspecto Misterioso para el equipo ganador",
  },
  {
    id: "tourney-3",
    name: "Showmatch Elite SoloQ",
    description: "Torneo cerrado para los mejores jugadores de la comunidad.",
    status: "COMPLETED" as TournamentStatus,
    maxTeams: 8,
    registeredTeamsCount: 8,
    startDate: "2026-07-10T15:00:00Z",
    prizePool: "$50 USD",
  },
];

export default function TournamentsPage() {
  const getStatusBadge = (status: TournamentStatus) => {
    switch (status) {
      case "DRAFT":
        return <span className="bg-zinc-800 text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded text-xs uppercase font-semibold">Borrador</span>;
      case "REGISTRATION":
        return <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-xs uppercase font-semibold">Inscripciones Abiertas</span>;
      case "ACTIVE":
        return <span className="bg-yellow-950/40 text-yellow-500 border border-yellow-500/30 px-2 py-0.5 rounded text-xs uppercase font-semibold animate-pulse">En Curso</span>;
      case "COMPLETED":
        return <span className="bg-blue-950/40 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded text-xs uppercase font-semibold">Finalizado</span>;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100 uppercase">
              Torneos Disponibles
            </h1>
            <p className="mt-2 text-zinc-400">
              Inscríbete con tu equipo o sigue los resultados en tiempo real.
            </p>
          </div>
          <Link
            href="/tournaments/new"
            className="inline-flex items-center justify-center rounded border border-yellow-600 bg-gradient-to-b from-yellow-500 to-yellow-600 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-zinc-950 shadow-md transition-all hover:brightness-110 active:scale-95"
          >
            Crear Nuevo Torneo
          </Link>
        </div>

        {/* Tournament Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-yellow-600/30 transition-all duration-200"
            >
              {/* Card Body */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  {getStatusBadge(tournament.status)}
                  <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Grieta 5v5
                  </span>
                </div>
                <h2 className="text-lg font-bold text-zinc-100 mb-2 hover:text-yellow-500 transition-colors">
                  <Link href={`/tournaments/${tournament.id}`}>
                    {tournament.name}
                  </Link>
                </h2>
                <p className="text-sm text-zinc-400 line-clamp-3 mb-6">
                  {tournament.description}
                </p>

                {/* Info row */}
                <div className="space-y-2 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Equipos:</span>
                    <span className="font-semibold text-zinc-200">
                      {tournament.registeredTeamsCount} / {tournament.maxTeams}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha Inicio:</span>
                    <span className="font-semibold text-zinc-200">
                      {new Date(tournament.startDate).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>
                  {tournament.prizePool && (
                    <div className="flex justify-between">
                      <span>Premio:</span>
                      <span className="font-semibold text-yellow-500">{tournament.prizePool}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-zinc-800 bg-zinc-900/30 p-4 rounded-b-lg">
                <Link
                  href={`/tournaments/${tournament.id}`}
                  className="flex w-full items-center justify-center rounded border border-zinc-700 bg-zinc-900/80 py-2 text-xs font-bold tracking-wider uppercase text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
