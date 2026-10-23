import {
  Thermometer,
  Droplet,
  Wind,
  AlertTriangle,
  Activity,
  Leaf,
  Shield,
  Eye,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  thermometer: Thermometer,
  droplet: Droplet,
  wind: Wind,
  'alert-triangle': AlertTriangle,
  activity: Activity,
  leaf: Leaf,
  shield: Shield,
  eye: Eye,
};

export function WaterIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Droplet;
  return <Icon className={className} />;
}
