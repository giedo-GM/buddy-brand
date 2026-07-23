export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-label text-accent uppercase tracking-widest font-medium">
      {children}
    </span>
  )
}
