import { Star } from 'lucide-react';

export default function FeaturedBadge({ className = '' }) {
  return (
    <div className={`absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-ink shadow-[2px_2px_0px_#111111] bg-[#fef08a] font-bold text-sm text-[#713f12] ${className}`}>
      <Star size={16} fill="#eab308" strokeWidth={0} />
      Featured
    </div>
  );
}
