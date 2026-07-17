"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock detailed data matching the schema
const mockTournamentDetails = {
  id: "tourney-1",
  name: "Copa de la Grieta - Invierno 2026",
  description: "El torneo invernal de nuestra comunidad. ¡Demuestra quién es el rey de la Grieta!",
  gameMode: "SUMMONERS_RIFT_5V5",
  status: "REGISTRATION",
  maxTeams: 8,
  startDate: "2026-07-25T19:00:00Z",
  prizePool: "10,000 Riot Points",
  rules: "1. Todos los jugadores deben registrar su Riot ID correcto.\n2. Tolerancia de espera máxima de 15 minutos.\n3. Toxicidad o insultos resultarán en descalificación inmediata.\n4. Se juega en modo Reclutamiento de Torneo.",
  teams: [
    {
      id: "team-1",
      name: "T1 Academy Fans",
      logo: null,
      captain: "FakerJunior#LAN",
      membersCount: 5,
    },
    {
      id: "team-2",
      name: "Los Pibes del Abismo",
      logo: null,
      captain: "ARAM Enjoyer#LAS",
      membersCount: 5,
    },
    {
      id: "team-3",
      name: "KDA Popstars Reborn",
      logo: null,
      captain: "AhriQueen#NA1",
      membersCount: 5,
    },
    {
      id: "team-4",
      name: "Silver Scrapes Club",
      logo: null,
      captain: "HardstuckGold#LAN",
      membersCount: 5,
    },
    {
      id: "team-5",
      name: "Baron Nashor Stealers",
      logo: null,
      captain: "JungleDiff#BR1",
      membersCount: 5,
    },
  ],
  // Mock bracket structure
  bracket: {
    quarters: [
      { id: "m1", t1: "T1 Academy Fans", t2: "Los Pibes del Abismo", score1: 1, score2: 0, winner: "T1 Academy Fans" },
      { id: "m2", t1: "KDA Popstars Reborn", t2: "Silver Scrapes Club", score1: 0, score2: 1, winner: "Silver Scrapes Club" },
      { id: "m3", t1: "Baron Nashor Stealers", t2: "TBD", score1: null, score2: null, winner: null },
      { id: "m4", t1: "TBD", t2: "TBD", score1: null, score2: null, winner: null },
    ],
    semis: [
      { id: "m5", t1: "T1 Academy Fans", t2: "Silver Scrapes Club", score1: null, score2: null, winner: null },
      { id: "m6", t1: "TBD", t2: "TBD", score1: null, score2: null, winner: null },
    ],
    finals: [
      { id: "m7", t1: "TBD", t2: "TBD", score1: null, score2: null, winner: null },
    ],
  },
};

export default function TournamentDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"info" | "teams" | "bracket">("info");

  // In a real app we'd fetch this using `id`
  const tournament = mockTournamentDetails;

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Breadcrumb */}
        <div className="mb-4">
          <Link href="/tournaments" className="text-xs text-yellow-500 hover:underline">
            &larr; Volver a Torneos
          </Link>
        </div>

        {/* Title Block */}
        <div className="border-b border-zinc-850 pb-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100 uppercase">
              {tournament.name}
            </h1>
            <p className="mt-2 text-zinc-400 max-w-2xl">{tournament.description}</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded border border-yellow-600 bg-gradient-to-b from-yellow-500 to-yellow-600 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-zinc-950 shadow-md transition-all hover:brightness-110 active:scale-95">
              Inscribir Equipo
            </button>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="border-b border-zinc-800 mb-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {(["info", "teams", "bracket"] as const).map((tab) => {
              const label = tab === "info" ? "Información" : tab === "teams" ? "Equipos" : "Bracket / Cruces";
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 py-4 px-1 text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "border-yellow-500 text-yellow-500"
                      : "border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Contents */}
        <div className="mt-4">
          {activeTab === "info" && (
            <div className="grid gap-8 md:grid-cols-3">
              {/* Main rules info */}
              <div className="md:col-span-2 space-y-6">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="text-lg font-bold text-yellow-500 uppercase tracking-wide mb-4">Reglamento</h3>
                  <div className="text-zinc-300 text-sm whitespace-pre-line space-y-2 leading-relaxed">
                    {tournament.rules}
                  </div>
                </div>
              </div>

              {/* Sidebar stats */}
              <div className="space-y-6">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Detalles Básicos</h3>
                  <div className="space-y-4 text-sm text-zinc-300">
                    <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                      <span className="text-zinc-500">Estado</span>
                      <span className="font-semibold text-emerald-400">Inscripción Abierta</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                      <span className="text-zinc-500">Mapa</span>
                      <span className="font-semibold text-zinc-100">Grieta del Invocador</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                      <span className="text-zinc-500">Inicio</span>
                      <span className="font-semibold text-zinc-100">
                        {new Date(tournament.startDate).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                      <span className="text-zinc-500">Premios</span>
                      <span className="font-semibold text-yellow-500">{tournament.prizePool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Cupos</span>
                      <span className="font-semibold text-zinc-100">
                        {tournament.teams.length} / {tournament.maxTeams} Equipos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "teams" && (
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-lg font-bold text-yellow-500 uppercase tracking-wide mb-6">Equipos Inscritos ({tournament.teams.length})</h3>
              
              {tournament.teams.length === 0 ? (
                <p className="text-zinc-500 text-sm">No hay equipos registrados aún.</p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {tournament.teams.map((team, idx) => (
                    <div key={team.id} className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-900/60 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-yellow-950/40 border border-yellow-600/30 text-yellow-500 font-bold">
                          #{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-200">{team.name}</h4>
                          <p className="text-xs text-zinc-400">Capitán: <span className="text-yellow-600/90">{team.captain}</span></p>
                        </div>
                      </div>
                      <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                        {team.membersCount} Jugadores
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "bracket" && (
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-yellow-500 uppercase tracking-wide mb-8">Cuadro de Torneo (Single Elimination)</h3>
              
              {/* Bracket Visualization Grid */}
              <div className="flex gap-16 min-w-[700px] py-4">
                
                {/* Cuartos de Final */}
                <div className="flex flex-col justify-around gap-8 flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 text-center">Cuartos de Final</div>
                  {tournament.bracket.quarters.map((match) => (
                    <div key={match.id} className="rounded border border-zinc-800 bg-zinc-900/70 text-xs w-48 shadow-sm">
                      <div className={`p-2 border-b border-zinc-800/50 flex justify-between items-center ${match.winner === match.t1 ? "text-yellow-500 font-semibold" : "text-zinc-400"}`}>
                        <span>{match.t1}</span>
                        <span>{match.score1 !== null ? match.score1 : "-"}</span>
                      </div>
                      <div className={`p-2 flex justify-between items-center ${match.winner === match.t2 ? "text-yellow-500 font-semibold" : "text-zinc-400"}`}>
                        <span>{match.t2}</span>
                        <span>{match.score2 !== null ? match.score2 : "-"}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Semifinales */}
                <div className="flex flex-col justify-around gap-8 flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 text-center">Semifinales</div>
                  {tournament.bracket.semis.map((match) => (
                    <div key={match.id} className="rounded border border-yellow-600/10 bg-zinc-900/70 text-xs w-48 shadow-sm">
                      <div className="p-2 border-b border-zinc-800/50 flex justify-between items-center text-zinc-400">
                        <span>{match.t1}</span>
                        <span>-</span>
                      </div>
                      <div className="p-2 flex justify-between items-center text-zinc-400">
                        <span>{match.t2}</span>
                        <span>-</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final */}
                <div className="flex flex-col justify-around gap-8 flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 text-center">Gran Final</div>
                  {tournament.bracket.finals.map((match) => (
                    <div key={match.id} className="rounded border border-yellow-500/30 bg-zinc-900/80 text-xs w-48 shadow-md ring-1 ring-yellow-500/20">
                      <div className="p-2 border-b border-zinc-800/50 flex justify-between items-center text-zinc-400">
                        <span>{match.t1}</span>
                        <span>-</span>
                      </div>
                      <div className="p-2 flex justify-between items-center text-zinc-400">
                        <span>{match.t2}</span>
                        <span>-</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
