"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const partySizes = Array.from({ length: 10 }, (_, i) => i + 1);

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const cognome = form.get("cognome");
    const telefono = form.get("telefono");
    const email = form.get("email");
    const data = form.get("data");
    const ora = form.get("ora");
    const persone = form.get("persone");
    const occasione = form.get("occasione");
    const note = form.get("note");

    const subject = `Richiesta di prenotazione — ${nome} ${cognome}`;
    const body = [
      `Nome: ${nome} ${cognome}`,
      `Telefono: ${telefono}`,
      `Email: ${email}`,
      `Data richiesta: ${data}`,
      `Ora richiesta: ${ora}`,
      `Numero persone: ${persone}`,
      occasione ? `Occasione: ${occasione}` : null,
      note ? `Note: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-hairline p-8">
      <p className="text-sm text-ink-muted">
        Compila il modulo: si aprirà la tua app di posta con la richiesta già
        pronta per {site.email}. Ti confermeremo la disponibilità al più
        presto. Per urgenze, chiama direttamente il ristorante.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <input required name="nome" placeholder="Nome" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
        <input required name="cognome" placeholder="Cognome" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <input required type="tel" name="telefono" placeholder="Telefono" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
        <input required type="email" name="email" placeholder="Email" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-widest text-ink-muted">Data</span>
          <input required type="date" name="data" className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink [color-scheme:dark]" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-widest text-ink-muted">Ora</span>
          <select required name="ora" defaultValue="" className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink">
            <option value="" disabled>
              Scegli
            </option>
            <optgroup label={`Pranzo (${site.hours.pranzo})`}>
              {["12:30", "13:00", "13:30", "14:00"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </optgroup>
            <optgroup label={`Cena (${site.hours.cena})`}>
              {["19:30", "20:00", "20:30", "21:00", "21:30"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-widest text-ink-muted">Persone</span>
          <select required name="persone" defaultValue="2" className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink">
            {partySizes.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-widest text-ink-muted">Occasione (facoltativo)</span>
        <select name="occasione" defaultValue="" className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink">
          <option value="">Nessuna in particolare</option>
          <option value="Cena romantica">Cena romantica</option>
          <option value="Anniversario">Anniversario</option>
          <option value="Compleanno">Compleanno</option>
          <option value="Pranzo/cena aziendale">Pranzo/cena aziendale</option>
        </select>
      </label>

      <textarea
        name="note"
        placeholder="Note: tavolo vista mare, intolleranze, sorprese…"
        rows={4}
        className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink"
      />

      <button type="submit" className="btn-solid">
        Invia Richiesta di Prenotazione
      </button>

      {sent && (
        <p className="text-sm text-gold">
          Si è aperta la tua app di posta con la richiesta pronta — invia
          l&apos;email per completare la prenotazione.
        </p>
      )}
    </form>
  );
}
