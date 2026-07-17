"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTournamentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    gameMode: "SUMMONERS_RIFT_5V5",
    format: "BO1",
    maxTeams: 8,
    startDate: "",
    prizePool: "",
    rules: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock delay to demonstrate submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect back to list page for now
      router.push("/tournaments");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm sm:p-8">
        
        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-100 uppercase">
            Organizar Torneo
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Completa los detalles para crear tu torneo en la Grieta del Invocador.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tournament Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
              Nombre del Torneo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Copa de la Grieta - Invierno 2026"
              className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe de qué se trata el torneo, formato de las fases, etc."
              className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Grid fields */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Game Mode - locked to Summoners Rift */}
            <div>
              <label htmlFor="gameMode" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                Mapa y Modo
              </label>
              <select
                id="gameMode"
                name="gameMode"
                value={formData.gameMode}
                onChange={handleChange}
                disabled
                className="w-full rounded border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-400 cursor-not-allowed focus:outline-none"
              >
                <option value="SUMMONERS_RIFT_5V5">Grieta del Invocador (5v5)</option>
              </select>
            </div>

            {/* Match Format */}
            <div>
              <label htmlFor="format" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                Formato de Series
              </label>
              <select
                id="format"
                name="format"
                value={formData.format}
                onChange={handleChange}
                className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value="BO1">Best of 1 (BO1)</option>
                <option value="BO3">Best of 3 (BO3)</option>
                <option value="BO5">Best of 5 (BO5)</option>
              </select>
            </div>

            {/* Max Teams */}
            <div>
              <label htmlFor="maxTeams" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                Límite de Equipos
              </label>
              <select
                id="maxTeams"
                name="maxTeams"
                value={formData.maxTeams}
                onChange={handleChange}
                className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value={4}>4 Equipos</option>
                <option value={8}>8 Equipos</option>
                <option value={16}>16 Equipos</option>
                <option value={32}>32 Equipos</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                Fecha y Hora de Inicio
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Prize Pool */}
          <div>
            <label htmlFor="prizePool" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
              Premios / Recompensas
            </label>
            <input
              type="text"
              id="prizePool"
              name="prizePool"
              value={formData.prizePool}
              onChange={handleChange}
              placeholder="Ej: 5,000 RP, Trofeos, aspecto misterioso, etc."
              className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Rules */}
          <div>
            <label htmlFor="rules" className="block text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
              Reglas y Código de Conducta
            </label>
            <textarea
              id="rules"
              name="rules"
              rows={4}
              value={formData.rules}
              onChange={handleChange}
              placeholder="Especifica el reglamento (Ej: Tolerancia de espera, conducta antideportiva, etc.)"
              className="w-full rounded border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 border-t border-zinc-800 pt-6">
            <button
              type="button"
              onClick={() => router.push("/tournaments")}
              className="rounded border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded border border-yellow-600 bg-gradient-to-b from-yellow-500 to-yellow-600 px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-zinc-950 shadow-md transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? "Creando..." : "Crear Torneo"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
