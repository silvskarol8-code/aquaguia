export interface ChecklistTask {
  id: string;
  label: string;
}

export interface ChecklistCategory {
  name: string;
  tasks: ChecklistTask[];
}

export interface ChecklistDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  hasObservations: boolean;
  observationLabel: string;
  categories: ChecklistCategory[];
}

export const checklistDefinitions: ChecklistDefinition[] = [
  {
    id: 'antes-producao',
    name: 'Antes da produção',
    description: 'Planejamento inicial antes de iniciar o cultivo.',
    icon: 'clipboard',
    hasObservations: false,
    observationLabel: '',
    categories: [
      {
        name: 'Planejamento',
        tasks: [
          { id: 'definir-especie', label: 'Definir a espécie que será criada' },
          { id: 'definir-sistema', label: 'Definir o sistema de criação' },
          { id: 'definir-quantidade', label: 'Definir a quantidade de animais' },
          { id: 'avaliar-espaco', label: 'Avaliar o espaço disponível' },
          { id: 'planejar-custos', label: 'Planejar os custos da produção' },
          { id: 'verificar-racao', label: 'Verificar disponibilidade de ração' },
          { id: 'verificar-alevinos', label: 'Verificar disponibilidade de alevinos ou juvenis' },
          { id: 'definir-objetivo', label: 'Definir o objetivo da produção' },
        ],
      },
      {
        name: 'Água e local',
        tasks: [
          { id: 'verificar-agua', label: 'Verificar disponibilidade de água' },
          { id: 'avaliar-qualidade-agua', label: 'Avaliar a qualidade da água' },
          { id: 'verificar-acesso', label: 'Verificar acesso ao local' },
          { id: 'avaliar-terreno', label: 'Avaliar as condições do terreno' },
          { id: 'verificar-abastecimento', label: 'Verificar estrutura de abastecimento e drenagem' },
        ],
      },
      {
        name: 'Mercado',
        tasks: [
          { id: 'identificar-compradores', label: 'Identificar possíveis compradores' },
          { id: 'pesquisar-preco', label: 'Pesquisar preço de venda' },
          { id: 'planejar-transporte', label: 'Planejar o transporte' },
          { id: 'estimar-receita', label: 'Estimar produção e receita' },
        ],
      },
    ],
  },
  {
    id: 'preparacao-viveiro',
    name: 'Preparação do viveiro',
    description: 'Estrutura, água e equipamentos antes do povoamento.',
    icon: 'pond',
    hasObservations: false,
    observationLabel: '',
    categories: [
      {
        name: 'Estrutura',
        tasks: [
          { id: 'limpar-viveiro', label: 'Limpar o viveiro' },
          { id: 'verificar-entrada', label: 'Verificar entrada de água' },
          { id: 'verificar-saida', label: 'Verificar saída de água' },
          { id: 'verificar-vazamentos', label: 'Verificar possíveis vazamentos' },
          { id: 'conferir-profundidade', label: 'Conferir profundidade' },
          { id: 'conferir-telas', label: 'Conferir telas e proteções' },
        ],
      },
      {
        name: 'Água',
        tasks: [
          { id: 'verificar-temperatura', label: 'Verificar temperatura' },
          { id: 'verificar-ph', label: 'Verificar pH' },
          { id: 'verificar-oxigenio', label: 'Verificar oxigênio dissolvido' },
          { id: 'verificar-transparencia', label: 'Verificar transparência' },
          { id: 'avaliar-agua', label: 'Avaliar condições gerais da água' },
        ],
      },
      {
        name: 'Equipamentos',
        tasks: [
          { id: 'conferir-medicao', label: 'Conferir equipamentos de medição' },
          { id: 'conferir-redes', label: 'Conferir redes e equipamentos de manejo' },
          { id: 'conferir-alimentacao', label: 'Conferir equipamentos de alimentação' },
          { id: 'organizar-materiais', label: 'Organizar materiais necessários' },
        ],
      },
    ],
  },
  {
    id: 'rotina-diaria',
    name: 'Rotina diária',
    description: 'Verificações que devem ser feitas todos os dias.',
    icon: 'sun',
    hasObservations: true,
    observationLabel: 'Observações do dia',
    categories: [
      {
        name: 'Diário',
        tasks: [
          { id: 'observar-comportamento', label: 'Observar o comportamento dos animais' },
          { id: 'verificar-consumo', label: 'Verificar o consumo de ração' },
          { id: 'conferir-aparencia', label: 'Conferir a aparência dos animais' },
          { id: 'observar-agua-visual', label: 'Observar a qualidade visual da água' },
          { id: 'verificar-mortos', label: 'Verificar animais mortos ou debilitados' },
          { id: 'conferir-equipamentos', label: 'Conferir equipamentos' },
          { id: 'registrar-alteracoes', label: 'Registrar alguma alteração observada' },
        ],
      },
    ],
  },
  {
    id: 'rotina-semanal',
    name: 'Rotina semanal',
    description: 'Avaliações e revisões para fazer a cada semana.',
    icon: 'calendar',
    hasObservations: true,
    observationLabel: 'Observações da semana',
    categories: [
      {
        name: 'Semanal',
        tasks: [
          { id: 'verificar-parametros', label: 'Verificar parâmetros da água' },
          { id: 'avaliar-crescimento', label: 'Avaliar crescimento dos animais' },
          { id: 'conferir-consumo-racao', label: 'Conferir consumo de ração' },
          { id: 'conferir-estoque', label: 'Conferir estoque de ração' },
          { id: 'verificar-equipamentos', label: 'Verificar equipamentos' },
          { id: 'fazer-limpeza', label: 'Fazer limpeza necessária' },
          { id: 'observar-doencas', label: 'Observar sinais de doenças' },
          { id: 'registrar-alteracoes-semanal', label: 'Registrar alterações na produção' },
        ],
      },
    ],
  },
  {
    id: 'despesca',
    name: 'Despesca',
    description: 'Planejamento e registro da colheita.',
    icon: 'fish',
    hasObservations: false,
    observationLabel: '',
    categories: [
      {
        name: 'Planejamento',
        tasks: [
          { id: 'avaliar-peso', label: 'Avaliar peso médio dos animais' },
          { id: 'definir-data', label: 'Definir data da despesca' },
          { id: 'confirmar-comprador', label: 'Confirmar comprador' },
          { id: 'planejar-transporte-despesca', label: 'Planejar transporte' },
          { id: 'separar-equipamentos', label: 'Separar equipamentos' },
          { id: 'organizar-equipe', label: 'Organizar equipe necessária' },
        ],
      },
      {
        name: 'Após a despesca',
        tasks: [
          { id: 'registrar-quantidade', label: 'Registrar quantidade produzida' },
          { id: 'registrar-peso', label: 'Registrar peso total' },
          { id: 'registrar-perdas', label: 'Registrar perdas' },
          { id: 'registrar-valor', label: 'Registrar valor de venda' },
          { id: 'registrar-observacoes', label: 'Registrar observações' },
        ],
      },
    ],
  },
];

export function getAllTasks(checklist: ChecklistDefinition): ChecklistTask[] {
  return checklist.categories.flatMap((c) => c.tasks);
}

export function getChecklistById(id: string): ChecklistDefinition | undefined {
  return checklistDefinitions.find((c) => c.id === id);
}
