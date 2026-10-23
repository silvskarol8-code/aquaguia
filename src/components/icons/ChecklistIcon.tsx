import {
  ClipboardList,
  Waves,
  Droplet,
  Fish,
  Truck,
  Wheat,
  Wind,
  Ruler,
  NotebookPen,
  Landmark,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  'clipboard-list': ClipboardList,
  waves: Waves,
  droplet: Droplet,
  fish: Fish,
  truck: Truck,
  wheat: Wheat,
  wind: Wind,
  ruler: Ruler,
  'notebook-pen': NotebookPen,
  landmark: Landmark,
};

export function ChecklistIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? ClipboardList;
  return <Icon className={className} />;
}
