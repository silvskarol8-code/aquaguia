import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  title: string;
  onBack: () => void;
  subtitle?: string;
}

export function Header({ title, onBack, subtitle }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-20 bg-gradient-to-br from-aqua-700 to-teal-800 text-white shadow-soft"
      style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 16px)' }}
    >
      <div className="flex items-center gap-3 px-4 pb-4 pt-2">
        <button
          onClick={onBack}
          aria-label="Voltar"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition active:scale-95 hover:bg-white/25"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-bold leading-tight">{title}</h1>
          {subtitle && <p className="truncate text-sm text-aqua-100">{subtitle}</p>}
        </div>
        <Logo className="h-9 w-9 shrink-0" />
      </div>
    </header>
  );
}
