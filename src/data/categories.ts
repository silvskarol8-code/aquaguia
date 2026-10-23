export type CategoryId =
  | 'peixes-agua-doce'
  | 'peixes-marinhos'
  | 'camaroes'
  | 'moluscos'
  | 'ras'
  | 'macroalgas';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'peixes-agua-doce',
    name: 'Peixes de Água Doce',
    icon: 'fish',
    description: 'Espécies nativas e exóticas cultivadas em águas continentais',
    color: 'from-aqua-500 to-teal-600',
  },
  {
    id: 'peixes-marinhos',
    name: 'Peixes Marinhos',
    icon: 'waves',
    description: 'Espécies cultivadas em ambiente marinho ou estuarino',
    color: 'from-deep-500 to-aqua-600',
  },
  {
    id: 'camaroes',
    name: 'Camarões',
    icon: 'shrimp',
    description: 'Camarões marinhos e de água doce',
    color: 'from-accent-500 to-teal-600',
  },
  {
    id: 'moluscos',
    name: 'Moluscos',
    icon: 'shell',
    description: 'Ostras, mexilhões e vieiras',
    color: 'from-teal-500 to-aqua-600',
  },
  {
    id: 'ras',
    name: 'Rãs',
    icon: 'frog',
    description: 'Anfíbios criados em cativeiro',
    color: 'from-teal-600 to-aqua-600',
  },
  {
    id: 'macroalgas',
    name: 'Macroalgas',
    icon: 'leaf',
    description: 'Algas marinhas de interesse comercial',
    color: 'from-teal-400 to-teal-600',
  },
];
