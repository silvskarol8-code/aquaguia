import {
  Thermometer,
  Droplet,
  Wind,
  AlertTriangle,
  Layers,
  Clock,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  thermometer: Thermometer,
  droplet: Droplet,
  wind: Wind,
  'alert-triangle': AlertTriangle,
  layers: Layers,
  clock: Clock,
};

export function ParamIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Droplet;
  return <Icon className={className} />;
}
