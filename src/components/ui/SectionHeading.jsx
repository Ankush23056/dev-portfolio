export default function SectionHeading({ children, color = 'bg-yellow', rotate = 'rotate-[-1deg]', className = '' }) {
  return (
    <div className={`inline-block ${color} border-3 border-ink brutal-shadow px-6 py-2 mb-12 ${rotate} ${className}`}>
      <h2 className="text-3xl font-black uppercase tracking-wider">{children}</h2>
    </div>
  );
}
