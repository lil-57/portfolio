export function TechBadge({ label }: { label: string }) {
    return (
      <span className="px-3 py-1 rounded border border-white/20 bg-white/10 text-white text-sm hover:bg-white/20 transition">
        {label}
      </span>
    )
  }