export default function SkeletonCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-5 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-zinc-800" />
        <div className="w-8 h-4 rounded bg-zinc-800" />
      </div>
      <div className="h-2.5 w-14 rounded bg-zinc-800 mb-2" />
      <div className="h-4 w-3/4 rounded bg-zinc-800 mb-1" />
      <div className="h-4 w-1/2 rounded bg-zinc-800 mb-5" />
      <div className="h-1 w-full rounded-full bg-zinc-800" />
    </div>
  );
}