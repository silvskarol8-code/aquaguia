import type { CategoryId } from './categories';

export interface SpeciesParam {
  label: string;
  value: string;
  icon: string;
}

export interface Species {
  id: string;
  name: string;
  scientific: string;
  category: CategoryId;
  photo: string;
  tags: string[];
  description: string;
  states: string[];
  environment: string;
  cultureSystem: string;
  temperature: string;
  ph: string;
  oxygen: string;
  salinity: string;
  feeding: string;
  stockingDensity: string;
  dailyManagement: string;
  waterQuality: string;
  growOutTime: string;
  marketSize: string;
  diseases: string[];
  prevention: string[];
  advantages: string[];
  disadvantages: string[];
  curiosities: string[];
  references: string[];
}

export const species: Species[] = [
  {
    id: 'tambaqui',
    name: 'Tambaqui',
    scientific: 'Colossoma macropomum',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/4987033/pexels-photo-4987033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['amazônia', 'comercial', 'onívoro', 'frutas'],
    description:
      'O tambaqui é o principal peixe nativo cultivado na Amazônia brasileira. Possui corpo alto e comprimido, coloração cinza-escuro com manchas escuras. É onívoro, alimentando-se de frutas, sementes, zooplâncton e ração. Destaca-se pelo rápido crescimento, carne de qualidade e grande aceitação no mercado.',
    states: ['Amazonas', 'Rondônia', 'Pará', 'Tocantins', 'Mato Grosso', 'Maranhão'],
    environment: 'Água doce, rios e várzeas da Amazônia. Adapta-se a viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados, tanques-rede em reservatórios, e sistemas intensivos com aeração.',
    temperature: '26–32°C',
    ph: '5,5–7,5',
    oxygen: '> 3 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Alevinos aceitam ração farelada com 40% de proteína. Na recria e engorda, ração extrusada com 28–32% de proteína. Pode receber frutas e capim como complemento. Taxa de alimentação de 2–4% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–3 peixes/m²; Tanques-rede: 40–80 peixes/m³',
    dailyManagement:
      'Observar comportamento e apetite. Fornecer ração em 2–4 refeições. Verificar cor e odor da água. Remover excesso de ração. Monitorar oxigênio ao amanhecer.',
    waterQuality:
      'Temperatura 26–32°C; pH 5,5–7,5; oxigênio dissolvido > 3 mg/L; amônia < 0,5 mg/L; transparência 30–60 cm.',
    growOutTime: '8–12 meses',
    marketSize: '1,5–3,0 kg',
    diseases: ['Saprolegniose (fungo)', 'Parasitose por Lernaea', 'Bactéria Aeromonas', 'Hipoplasia branquial'],
    prevention: [
      'Manter qualidade da água dentro dos parâmetros ideais',
      'Evitar superlotação',
      'Quarentena de alevinos antes do povoamento',
      'Desinfecção de equipamentos',
    ],
    advantages: [
      'Crescimento rápido em cativeiro',
      'Aceita alimentação variada, incluindo frutas',
      'Alta aceitação de mercado',
      'Adapta-se a diferentes sistemas de cultivo',
    ],
    disadvantages: [
      'Sensível a baixas temperaturas (< 20°C)',
      'Necessita área de desova para reprodução em cativeiro',
      'Pode apresentar hipoplasia branquial em águas ricas em plâncton',
    ],
    curiosities: [
      'Na natureza, o tambaqui se alimenta de frutas que caem na água durante a cheia dos rios',
      'É um dos peixes mais criados na Amazônia',
      'Pode ultrapassar 30 kg na natureza',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de tambaqui. Cartilha técnica.',
      'Valladão, G.R. et al. (2018). Parâmetros de qualidade da água no cultivo de tambaqui. Pesquisa Agropecuária Brasileira.',
    ],
  },
  {
    id: 'tilapia',
    name: 'Tilápia',
    scientific: 'Oreochromis niloticus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/15553656/pexels-photo-15553656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['exótica', 'comercial', 'iniciante', 'resistente'],
    description:
      'A tilápia-do-nilo é a espécie exótica mais cultivada no Brasil. Originária da África, adapta-se a diversas condições de criação. Possui crescimento rápido, reprodução fácil e carne de boa qualidade. É a base da piscicultura comercial brasileira.',
    states: ['São Paulo', 'Paraná', 'Bahia', 'Ceará', 'Minas Gerais', 'Goiás', 'Santa Catarina', 'Rio Grande do Sul'],
    environment: 'Água doce. Tolera águas com baixa oxigenação e ampla faixa de temperatura.',
    cultureSystem: 'Viveiros escavados, tanques-rede, raceways, sistemas bioflocos e RAS (recirculação).',
    temperature: '26–30°C',
    ph: '6,5–8,5',
    oxygen: '> 4 mg/L',
    salinity: '0–10 ppm (tolera salinidade baixa)',
    feeding:
      'Onívora. Alevinos: ração farelada 40–45% proteína. Recria: ração 32–36% proteína. Engorda: ração extrusada 28–32% proteína. Taxa de 1–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 2–5 peixes/m²; Tanques-rede: 100–200 peixes/m³; Bioflocos: até 50 kg/m³',
    dailyManagement:
      'Fornecer ração em 2–4 refeições. Observar consumo e ajustar quantidade. Verificar parâmetros da água. Remover peixes mortos.',
    waterQuality:
      'Temperatura 26–30°C; pH 6,5–8,5; oxigênio > 4 mg/L; amônia < 0,5 mg/L; nitrito < 0,1 mg/L.',
    growOutTime: '6–8 meses',
    marketSize: '600–800 g',
    diseases: ['Streptococose', 'Doença de Streptococcus iniae', 'Ponto branco (Ichthyophthirius)', 'Podridão das barbatanas'],
    prevention: [
      'Usar alevinos reversados (machos) para evitar reprodução',
      'Manter oxigênio acima de 4 mg/L',
      'Evitar superlotação',
      'Vacinação contra Streptococcus em regiões endêmicas',
    ],
    advantages: [
      'Crescimento rápido e reprodução fácil',
      'Adapta-se a diversos sistemas de cultivo',
      'Carne de boa aceitação no mercado',
      'Tolera águas de baixa qualidade',
    ],
    disadvantages: [
      'Reproduz-se facilmente, causando superlotação se não controlada',
      'Sensível a temperaturas abaixo de 15°C',
      'Suscetível à streptococose em altas densidades',
    ],
    curiosities: [
      'A tilápia é o segundo peixe mais criado do mundo',
      'No Brasil, utiliza-se a reversão sexual para produzir apenas machos, que crescem mais',
      'Pode sobreviver em águas com baixíssimo oxigênio',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de tilápia. Cartilha técnica.',
      'Mainardes-Pinto, C.S.R. et al. (2018). Manejo alimentar da tilápia-do-nilo. Boletim do Instituto de Pesca.',
    ],
  },
  {
    id: 'tambacu',
    name: 'Tambacu',
    scientific: 'Colossoma macropomum x Piaractus mesopotamicus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/28587107/pexels-photo-28587107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['híbrido', 'comercial', 'amazônia', 'pantanal'],
    description:
      'O tambacu é um híbrido resultante do cruzamento entre fêmea de tambaqui e macho de pacu. Combina o rápido crescimento do tambaqui com a resistência do pacu. É estéril, o que evita superlotação nos viveiros. Muito cultivado no Centro-Oeste.',
    states: ['Mato Grosso', 'Mato Grosso do Sul', 'Rondônia', 'Tocantins', 'São Paulo'],
    environment: 'Água doce. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede em reservatórios.',
    temperature: '26–32°C',
    ph: '5,5–7,5',
    oxygen: '> 3 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Alevinos: ração farelada 40% proteína. Recria e engorda: ração extrusada 28–32% proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–3 peixes/m²; Tanques-rede: 40–80 peixes/m³',
    dailyManagement:
      'Fornecer ração em 2–4 refeições. Observar consumo. Verificar parâmetros de água diariamente.',
    waterQuality:
      'Temperatura 26–32°C; pH 5,5–7,5; oxigênio > 3 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '8–10 meses',
    marketSize: '1,5–2,5 kg',
    diseases: ['Saprolegniose', 'Parasitose por Lernaea', 'Aeromonas', 'Hipoplasia branquial'],
    prevention: [
      'Manter qualidade da água',
      'Evitar superlotação',
      'Quarentena de alevinos',
    ],
    advantages: [
      'Híbrido estéril — não reproduz em cativeiro, evitando superlotação',
      'Crescimento rápido, herdado do tambaqui',
      'Maior resistência que o tambaqui puro',
    ],
    disadvantages: [
      'Depende de reprodução induzida em laboratório',
      'Sensível a baixas temperaturas',
      'Necessita compra de alevinos de fornecedores especializados',
    ],
    curiosities: [
      'O tambacu é estéril, pois é um híbrido interespecífico',
      'Combina características de duas espécies diferentes: tambaqui e pacu',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Hibridização entre tambaqui e pacu. Nota técnica.',
      'Hashimoto, G.S.O. et al. (2011). Desempenho do híbrido tambacu. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'tambatinga',
    name: 'Tambatinga',
    scientific: 'Colossoma macropomum x Piaractus brachypomus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/38719480/pexels-photo-38719480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['híbrido', 'comercial', 'amazônia'],
    description:
      'A tambatinga é um híbrido do cruzamento entre fêmea de tambaqui e macho de pirapitinga. Assim como o tambacu, é estéril. Apresenta crescimento rápido e boa adaptação ao cativeiro, sendo uma alternativa para regiões onde o tambaqui sofre com hipoplasia branquial.',
    states: ['Rondônia', 'Amazonas', 'Mato Grosso', 'Tocantins'],
    environment: 'Água doce. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede.',
    temperature: '26–32°C',
    ph: '5,5–7,5',
    oxygen: '> 3 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Ração extrusada com 28–32% de proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–3 peixes/m²; Tanques-rede: 40–80 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–4 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 26–32°C; pH 5,5–7,5; oxigênio > 3 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '8–10 meses',
    marketSize: '1,5–2,5 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Aeromonas'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de alevinos'],
    advantages: [
      'Estéril — evita superlotação',
      'Menos suscetível à hipoplasia branquial que o tambaqui',
      'Crescimento rápido',
    ],
    disadvantages: [
      'Depende de reprodução induzida',
      'Alevinos mais caros que espécies puras',
    ],
    curiosities: [
      'A tambatinga foi desenvolvida como alternativa ao tambacu em regiões com problemas de hipoplasia branquial',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Produção de híbridos de tambaqui. Documentos técnicos.',
    ],
  },
  {
    id: 'pacu',
    name: 'Pacu',
    scientific: 'Piaractus mesopotamicus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/20051836/pexels-photo-20051836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'pantanal', 'comercial', 'onívoro'],
    description:
      'O pacu é um peixe nativo da bacia do Prata (Pantanal). Possui corpo alto e comprimido, com dentes molariformes adaptados para quebrar sementes e frutos. É muito apreciado pela carne de qualidade. Adapta-se bem ao cativeiro, mas cresce mais devagar que o tambaqui.',
    states: ['Mato Grosso do Sul', 'Mato Grosso', 'São Paulo', 'Paraná', 'Minas Gerais'],
    environment: 'Água doce. Rios da bacia do Prata e viveiros escavados.',
    cultureSystem: 'Viveiros escavados e tanques-rede.',
    temperature: '24–30°C',
    ph: '6,0–7,5',
    oxygen: '> 4 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Alevinos: ração farelada 40% proteína. Engorda: ração extrusada 28–32% proteína. Aceita frutas, capim e farelos. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–2 peixes/m²; Tanques-rede: 30–60 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Observar comportamento e qualidade da água.',
    waterQuality:
      'Temperatura 24–30°C; pH 6,0–7,5; oxigênio > 4 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '12–18 meses',
    marketSize: '1,0–2,0 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Aeromonas', 'Ichthyophthirius (ponto branco)'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de alevinos'],
    advantages: [
      'Carne muito apreciada no mercado',
      'Adapta-se ao cativeiro',
      'Aceita alimentação variada',
    ],
    disadvantages: [
      'Crescimento mais lento que o tambaqui',
      'Sensível a baixas temperaturas',
      'Reprodução induzida complexa',
    ],
    curiosities: [
      'O pacu tem dentes semelhantes aos humanos, adaptados para triturar sementes',
      'É uma das espécies mais pescadas no Pantanal',
    ],
    references: [
      'Embrapa Pantanal. Cultivo de pacu em viveiros. Documentos técnicos.',
      'CREVAL, G.H. et al. (2010). Nutrição e alimentação do pacu. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'pirarucu',
    name: 'Pirarucu',
    scientific: 'Arapaima gigas',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/14457826/pexels-photo-14457826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['amazônia', 'gigante', 'respiração aérea', 'comercial'],
    description:
      'O pirarucu é um dos maiores peixes de água doce do mundo, podendo ultrapassar 200 kg. Possui respiração aérea obrigatória — precisa subir à superfície para respirar ar atmosférico. Tem carne branca de excelente qualidade, sem espinhas intramusculares, e alto valor comercial.',
    states: ['Amazonas', 'Rondônia', 'Pará', 'Roraima', 'Tocantins'],
    environment: 'Água doce. Lagos e rios da Amazônia. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados de grande área e tanques-rede em reservatórios.',
    temperature: '28–32°C',
    ph: '6,0–7,5',
    oxygen: 'Tolera baixo (respiração aérea obrigatória)',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Carnívoro na natureza, aceita ração em cativeiro. Alevinos: ração com 45% proteína. Engorda: ração com 40–45% proteína. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 0,5–1 peixe/m²; Tanques-rede: 5–15 peixes/m³ (peixes grandes)',
    dailyManagement:
      'Observar respiração aérea (deve subir à superfície a cada 10–30 min). Fornecer ração em 2 refeições. Verificar qualidade da água.',
    waterQuality:
      'Temperatura 28–32°C; pH 6,0–7,5; não depende de oxigênio dissolvido (respiração aérea).',
    growOutTime: '10–12 meses',
    marketSize: '8–12 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Aeromonas', 'Estresse por confinamento'],
    prevention: [
      'Espaço adequado — peixes grandes precisam de muita área',
      'Evitar canibalismo entre juvenis de tamanhos diferentes',
      'Manter qualidade da água',
    ],
    advantages: [
      'Carne nobre e sem espinhas intramusculares',
      'Respiração aérea — não precisa de alta aeração',
      'Alto valor de mercado',
      'Cresce até 10 kg no primeiro ano',
    ],
    disadvantages: [
      'Requer muito espaço por peixe',
      'Alevinos caros e de oferta limitada',
      'Canibalismo entre juvenis de tamanhos diferentes',
      'Reprodução em cativeiro complexa',
    ],
    curiosities: [
      'O pirarucu é um dos maiores peixes de água doce do mundo',
      'Sua língua óssea é usada como ralador por populações tradicionais',
      'Respira ar atmosférico obrigatoriamente',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de pirarucu. Documentos técnicos.',
      'Cavero, B.A.S. et al. (2015). Criação de pirarucu em cativeiro. Pesquisa Agropecuária Brasileira.',
    ],
  },
  {
    id: 'pintado',
    name: 'Pintado',
    scientific: 'Pseudoplatystoma corruscans',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/38283737/pexels-photo-38283737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'pantanal', 'carnívoro', 'bagre'],
    description:
      'O pintado é um bagre de couro nativo das bacias do Paraná e Paraguai. Possui corpo alongado com manchas escuras características. É muito valorizado pela carne firme, branca e sem espinhas intramusculares. Exige manejo especializado por ser carnívoro.',
    states: ['Mato Grosso do Sul', 'Mato Grosso', 'São Paulo', 'Paraná', 'Goiás'],
    environment: 'Água doce. Rios da bacia do Prata. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede em reservatórios.',
    temperature: '24–30°C',
    ph: '6,0–7,5',
    oxygen: '> 5 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Carnívoro. Alevinos: ração com 45% proteína, pode receber peixe moído. Engorda: ração com 40–45% proteína. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 0,5–1 peixe/m²; Tanques-rede: 20–40 peixes/m³',
    dailyManagement:
      'Fornecer ração em 2–3 refeições. Observar canibalismo entre juvenis. Verificar qualidade da água.',
    waterQuality:
      'Temperatura 24–30°C; pH 6,0–7,5; oxigênio > 5 mg/L; amônia < 0,3 mg/L.',
    growOutTime: '12–18 meses',
    marketSize: '1,5–3,0 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Edwardsiella', 'Estresse por manejo'],
    prevention: [
      'Classificar juvenis por tamanho para evitar canibalismo',
      'Manter qualidade da água',
      'Evitar superlotação',
      'Manejo cuidadoso durante biometrias',
    ],
    advantages: [
      'Carne nobre e sem espinhas intramusculares',
      'Alto valor de mercado',
      'Adapta-se a tanques-rede',
    ],
    disadvantages: [
      'Carnívoro — ração de alta proteína é cara',
      'Canibalismo entre juvenis',
      'Crescimento mais lento que espécies onívoras',
    ],
    curiosities: [
      'O pintado é um dos peixes mais valorizados do Pantanal',
      'Suas manchas escuras são únicas como impressões digitais',
    ],
    references: [
      'Embrapa Pantanal. Cultivo de pintado em cativeiro. Documentos técnicos.',
      'Padua, D.M.C. et al. (2012). Reprodução e larvicultura de pintado. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'cachara',
    name: 'Cachara',
    scientific: 'Pseudoplatystoma reticulatum',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/37714627/pexels-photo-37714627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'pantanal', 'carnívoro', 'bagre'],
    description:
      'A cachara é um bagre de couro nativo, muito semelhante ao pintado, mas com padrão de manchas diferente (listras e reticulados). É valorizada pela mesma qualidade de carne. Comercialmente, é frequentemente comercializada junto com o pintado.',
    states: ['Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Tocantins'],
    environment: 'Água doce. Rios da bacia do Prata. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede.',
    temperature: '24–30°C',
    ph: '6,0–7,5',
    oxygen: '> 5 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Carnívora. Ração com 40–45% de proteína. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 0,5–1 peixe/m²; Tanques-rede: 20–40 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Evitar canibalismo. Monitorar água.',
    waterQuality:
      'Temperatura 24–30°C; pH 6,0–7,5; oxigênio > 5 mg/L; amônia < 0,3 mg/L.',
    growOutTime: '12–18 meses',
    marketSize: '1,5–3,0 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Edwardsiella'],
    prevention: ['Classificar por tamanho', 'Manter qualidade da água', 'Evitar superlotação'],
    advantages: [
      'Carne nobre sem espinhas intramusculares',
      'Alto valor de mercado',
      'Semelhante ao pintado em manejo',
    ],
    disadvantages: [
      'Carnívora — ração cara',
      'Canibalismo entre juvenis',
      'Crescimento lento',
    ],
    curiosities: [
      'A cachara e o pintado são tão semelhantes que frequentemente são comercializados juntos',
    ],
    references: [
      'Embrapa Pantanal. Cultivo de cachara. Documentos técnicos.',
    ],
  },
  {
    id: 'jundia',
    name: 'Jundiá',
    scientific: 'Rhamdia quelen',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/4619577/pexels-photo-4619577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'sul', 'comercial', 'bagre', 'resistente'],
    description:
      'O jundiá é um bagre nativo do sul do Brasil. Possui corpo alongado e sem escamas. É rústico, resistente ao frio e de fácil manejo. Muito cultivado na Região Sul, especialmente em Santa Catarina e Rio Grande do Sul.',
    states: ['Santa Catarina', 'Rio Grande do Sul', 'Paraná', 'São Paulo'],
    environment: 'Água doce. Rios do sul do Brasil. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados, tanques-rede e sistemas intensivos.',
    temperature: '18–24°C',
    ph: '6,5–8,0',
    oxygen: '> 5 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro-carnívoro. Alevinos: ração com 40% proteína. Engorda: ração com 32–36% proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 2–5 peixes/m²; Tanques-rede: 50–100 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 18–24°C; pH 6,5–8,0; oxigênio > 5 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '8–12 meses',
    marketSize: '600–1.200 g',
    diseases: ['Saprolegniose', 'Aeromonas', 'Ichthyophthirius', 'Parasitoses branquiais'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de alevinos'],
    advantages: [
      'Resistente ao frio',
      'Rústico e de fácil manejo',
      'Adapta-se bem ao sul do Brasil',
      'Boa aceitação de mercado regional',
    ],
    disadvantages: [
      'Crescimento mais lento que tilápia',
      'Mercado mais regionalizado',
    ],
    curiosities: [
      'O jundiá é uma das poucas espécies nativas adaptadas ao frio do sul do Brasil',
    ],
    references: [
      'Epagri. Cultivo de jundiá em Santa Catarina. Documentos técnicos.',
      'Franceschini, L. et al. (2014). Desempenho do jundiá em diferentes sistemas. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'matrinxa',
    name: 'Matrinxã',
    scientific: 'Brycon amazonicus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/12572537/pexels-photo-12572537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['amazônia', 'nativo', 'comercial', 'esportivo'],
    description:
      'A matrinxã é um peixe nativo da Amazônia, muito apreciado pela carne de qualidade e valorizado na pesca esportiva. É ativo, nada em cardumes e aceita ração em cativeiro. Tem crescimento moderado.',
    states: ['Amazonas', 'Rondônia', 'Pará', 'Mato Grosso'],
    environment: 'Água doce. Rios da Amazônia. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede.',
    temperature: '24–30°C',
    ph: '6,0–7,5',
    oxygen: '> 5 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Alevinos: ração com 40% proteína. Engorda: ração com 30–32% proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–2 peixes/m²; Tanques-rede: 30–50 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 24–30°C; pH 6,0–7,5; oxigênio > 5 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '10–12 meses',
    marketSize: '800 g – 1,5 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Aeromonas', 'Parasitoses branquiais'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de alevinos'],
    advantages: [
      'Carne de excelente qualidade',
      'Valorizada na pesca esportiva',
      'Aceita ração em cativeiro',
    ],
    disadvantages: [
      'Crescimento moderado',
      'Sensível a manejo brusco',
      'Reprodução em cativeiro complexa',
    ],
    curiosities: [
      'A matrinxã é muito procurada na pesca esportiva pela sua força',
      'Na natureza, alimenta-se de frutas e insetos',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de matrinxã. Documentos técnicos.',
    ],
  },
  {
    id: 'curimata',
    name: 'Curimatã',
    scientific: 'Prochilodus lineatus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/18072772/pexels-photo-18072772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'pantanal', 'comercial', 'iliófago'],
    description:
      'A curimatã (ou curimbatá) é um peixe nativo da bacia do Prata. É iliófaga, ou seja, alimenta-se de lodo e detritos do fundo. Tem importante papel ecológico na ciclagem de nutrientes. É muito utilizada em policultivo com outras espécies.',
    states: ['Mato Grosso do Sul', 'Mato Grosso', 'São Paulo', 'Paraná', 'Santa Catarina'],
    environment: 'Água doce. Rios da bacia do Prata. Viveiros escavados.',
    cultureSystem: 'Viveiros escavados, especialmente em policultivo.',
    temperature: '22–28°C',
    ph: '6,5–8,0',
    oxygen: '> 4 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Iliófaga (detritívora). Aceita ração com 24–28% de proteína. Taxa de 1–2% do peso vivo/dia. Em policultivo, consome sobras e detritos.',
    stockingDensity: 'Viveiros em policultivo: 0,5–1 peixe/m²',
    dailyManagement: 'Fornecer ração em 1–2 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 22–28°C; pH 6,5–8,0; oxigênio > 4 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '10–12 meses',
    marketSize: '600–1.000 g',
    diseases: ['Saprolegniose', 'Aeromonas', 'Parasitoses branquiais'],
    prevention: ['Manter qualidade da água', 'Evitar excesso de matéria orgânica'],
    advantages: [
      'Excelente para policultivo',
      'Ajuda a limpar o fundo dos viveiros',
      'Baixo custo de alimentação',
    ],
    disadvantages: [
      'Valor comercial menor que espécies carnívoras',
      'Crescimento moderado',
    ],
    curiosities: [
      'A curimatã se alimenta de lodo do fundo, ajudando a reciclar nutrientes',
      'É uma das espécies mais capturadas no Pantanal',
    ],
    references: [
      'Embrapa Pantanal. Policultivo com curimatã. Documentos técnicos.',
    ],
  },
  {
    id: 'pirapitinga',
    name: 'Pirapitinga',
    scientific: 'Piaractus brachypomus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/13561545/pexels-photo-13561545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['amazônia', 'nativo', 'comercial'],
    description:
      'A pirapitinga é um peixe nativo da Amazônia, parente próximo do tambaqui. Possui corpo alto e coloração cinza com manchas avermelhadas na barriga. É onívora e adapta-se bem ao cativeiro. É utilizada tanto pura quanto na produção de híbridos (tambatinga).',
    states: ['Amazonas', 'Rondônia', 'Pará', 'Tocantins'],
    environment: 'Água doce. Rios da Amazônia. Viveiros escavados e tanques-rede.',
    cultureSystem: 'Viveiros escavados e tanques-rede.',
    temperature: '26–32°C',
    ph: '5,5–7,5',
    oxygen: '> 3 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívora. Ração extrusada com 28–32% de proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–3 peixes/m²; Tanques-rede: 40–80 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–4 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 26–32°C; pH 5,5–7,5; oxigênio > 3 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '10–12 meses',
    marketSize: '1,0–2,0 kg',
    diseases: ['Saprolegniose', 'Lernaea', 'Aeromonas'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de alevinos'],
    advantages: [
      'Adapta-se bem ao cativeiro',
      'Usada na produção de híbridos (tambatinga)',
      'Boa aceitação de mercado regional',
    ],
    disadvantages: [
      'Mercado menor que o do tambaqui',
      'Sensível a baixas temperaturas',
    ],
    curiosities: [
      'A pirapitinga é frequentemente confundida com o pacu, mas é uma espécie diferente',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de pirapitinga. Documentos técnicos.',
    ],
  },
  {
    id: 'piau',
    name: 'Piau',
    scientific: 'Leporinus friderici',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/5532880/pexels-photo-5532880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'comercial', 'sudeste'],
    description:
      'O piau é um peixe nativo do Brasil, encontrado em rios do Sudeste e Centro-Oeste. Possui corpo alongado com manchas amarelas características. É onívoro e de crescimento moderado. Tem valor comercial regional.',
    states: ['Minas Gerais', 'São Paulo', 'Goiás', 'Mato Grosso'],
    environment: 'Água doce. Rios do Sudeste e Centro-Oeste. Viveiros escavados.',
    cultureSystem: 'Viveiros escavados.',
    temperature: '22–28°C',
    ph: '6,0–7,5',
    oxygen: '> 5 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Onívoro. Ração com 28–32% de proteína. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–2 peixes/m²',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 22–28°C; pH 6,0–7,5; oxigênio > 5 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '10–12 meses',
    marketSize: '400–800 g',
    diseases: ['Saprolegniose', 'Aeromonas', 'Parasitoses'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação'],
    advantages: [
      'Espécie nativa com valor regional',
      'Onívoro — aceita ração comercial',
    ],
    disadvantages: [
      'Crescimento moderado',
      'Mercado mais regionalizado',
    ],
    curiosities: [
      'O piau é conhecido pelas manchas amareladas no corpo',
    ],
    references: [
      'Embrapa. Cultivo de piau. Documentos técnicos.',
    ],
  },
  {
    id: 'traira',
    name: 'Traíra',
    scientific: 'Hoplias malabaricus',
    category: 'peixes-agua-doce',
    photo: 'https://images.pexels.com/photos/39270286/pexels-photo-39270286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['nativo', 'carnívoro', 'resistente', 'regional'],
    description:
      'A traíra é um peixe nativo do Brasil, muito comum em lagoas e rios. É carnívora, predadora voraz, com corpo cilíndrico e cabeça grande. Tolera águas de baixa qualidade e baixa oxigenação. Tem carne apreciada regionalmente.',
    states: ['São Paulo', 'Minas Gerais', 'Goiás', 'Mato Grosso', 'Bahia', 'Pernambuco'],
    environment: 'Água doce. Lagoas, rios e viveiros. Tolera águas de baixa qualidade.',
    cultureSystem: 'Viveiros escavados.',
    temperature: '22–28°C',
    ph: '6,0–7,5',
    oxygen: '> 3 mg/L (tolera baixo)',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Carnívora. Alevinos: ração com 45% proteína. Engorda: ração com 40% proteína. Aceita peixe moído. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Viveiros: 1–2 peixes/m²',
    dailyManagement: 'Fornecer ração em 2 refeições. Evitar canibalismo. Monitorar água.',
    waterQuality:
      'Temperatura 22–28°C; pH 6,0–7,5; oxigênio > 3 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '8–12 meses',
    marketSize: '400–800 g',
    diseases: ['Saprolegniose', 'Aeromonas', 'Parasitoses'],
    prevention: ['Classificar por tamanho', 'Manter qualidade da água'],
    advantages: [
      'Muito rústica e resistente',
      'Tolera águas de baixa qualidade',
      'Carne apreciada regionalmente',
    ],
    disadvantages: [
      'Carnívora — ração cara',
      'Canibalismo entre juvenis',
      'Crescimento lento',
    ],
    curiosities: [
      'A traíra é uma predadora voraz e pode sobreviver fora da água por algumas horas',
    ],
    references: [
      'Embrapa. Cultivo de traíra. Documentos técnicos.',
    ],
  },
  {
    id: 'robalo',
    name: 'Robalo',
    scientific: 'Centropomus spp.',
    category: 'peixes-marinhos',
    photo: 'https://images.pexels.com/photos/2042564/pexels-photo-2042564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'estuarino', 'comercial', 'nobre'],
    description:
      'O robalo é um peixe marinho-estuarino de alto valor comercial. No Brasil, as espécies mais cultivadas são o robalo-flecha (Centropomus undecimalis) e o robalo-peba (C. parallelus). Possui carne branca de excelente qualidade. É eurialino, ou seja, tolera ampla variação de salinidade.',
    states: ['Santa Catarina', 'Rio de Janeiro', 'Bahia', 'Ceará', 'Rio Grande do Norte', 'Pernambuco'],
    environment: 'Marinho e estuarino. Águas costeiras, manguezais e estuários.',
    cultureSystem: 'Tanques-rede no mar, sistemas de recirculação (RAS) e viveiros com água salobra.',
    temperature: '25–30°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '5–35 ppm',
    feeding:
      'Carnívoro. Alevinos: ração com 50% proteína. Engorda: ração com 42–45% proteína. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Tanques-rede: 20–40 peixes/m³; RAS: 25–50 kg/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar salinidade e oxigênio.',
    waterQuality:
      'Temperatura 25–30°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 5–35 ppm; amônia < 0,3 mg/L.',
    growOutTime: '12–18 meses',
    marketSize: '600 g – 1,5 kg',
    diseases: ['Vibriose', 'Saprolegniose', 'Parasitoses por monogenéticos', 'Bactéria Streptococcus'],
    prevention: [
      'Manter salinidade e temperatura estáveis',
      'Evitar superlotação',
      'Quarentena de juvenis',
      'Vacinação em regiões endêmicas',
    ],
    advantages: [
      'Alto valor de mercado',
      'Carne nobre e muito apreciada',
      'Tolera ampla variação de salinidade',
    ],
    disadvantages: [
      'Carnívoro — ração de alta proteína é cara',
      'Necessita água salobra ou marinha',
      'Produção de juvenis ainda limitada',
    ],
    curiosities: [
      'O robalo é eurialino — vive tanto em água doce quanto no mar',
      'É um dos peixes marinhos mais valorizados do Brasil',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de robalo. Documentos técnicos.',
      'Cordeiro, N.M.A. et al. (2016). Reprodução e larvicultura de robalo. Pesquisa Agropecuária Brasileira.',
    ],
  },
  {
    id: 'bijupira',
    name: 'Bijupirá',
    scientific: 'Rachycentron canadum',
    category: 'peixes-marinhos',
    photo: 'https://images.pexels.com/photos/14879227/pexels-photo-14879227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'comercial', 'nobre', 'crescimento rápido'],
    description:
      'O bijupirá (ou cobia) é um peixe marinho de alto valor comercial, com crescimento extremamente rápido em cativeiro. Pode atingir 4–6 kg em 12 meses. Possui carne branca de excelente qualidade. É uma das espécies marinhas com maior potencial para aquicultura no Brasil.',
    states: ['Santa Catarina', 'Rio de Janeiro', 'Bahia', 'Rio Grande do Norte', 'Ceará'],
    environment: 'Marinho. Águas costeiras tropicais e subtropicais.',
    cultureSystem: 'Tanques-rede no mar e sistemas de recirculação (RAS).',
    temperature: '25–30°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '25–35 ppm',
    feeding:
      'Carnívoro. Alevinos: ração com 50% proteína. Engorda: ração com 42–45% proteína. Taxa de 1–2% do peso vivo/dia.',
    stockingDensity: 'Tanques-rede: 15–30 peixes/m³',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar salinidade, oxigênio e temperatura.',
    waterQuality:
      'Temperatura 25–30°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 25–35 ppm; amônia < 0,3 mg/L.',
    growOutTime: '10–12 meses',
    marketSize: '4–6 kg',
    diseases: ['Vibriose', 'Parasitoses por monogenéticos', 'Streptococcus', 'Saprolegniose'],
    prevention: [
      'Manter qualidade da água marinha',
      'Evitar superlotação',
      'Quarentena de juvenis',
      'Monitorar temperatura e salinidade',
    ],
    advantages: [
      'Crescimento extremamente rápido',
      'Carne nobre de alta qualidade',
      'Alto valor de mercado',
      'Adapta-se bem a tanques-rede',
    ],
    disadvantages: [
      'Necessita estrutura marinha (tanques-rede no mar)',
      'Carnívoro — ração cara',
      'Sensível a variações de temperatura',
    ],
    curiosities: [
      'O bijupirá pode crescer até 6 kg em apenas um ano',
      'É uma das espécies marinhas mais promissoras para aquicultura no Brasil',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de bijupirá. Documentos técnicos.',
      'Sampaio, L.A. et al. (2015). Larvicultura de bijupirá. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'camarao-marinho',
    name: 'Camarão Marinho',
    scientific: 'Litopenaeus vannamei',
    category: 'camaroes',
    photo: 'https://images.pexels.com/photos/16521533/pexels-photo-16521533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'comercial', 'exportação', 'nordeste'],
    description:
      'O camarão-branco-do-pacífico é a espécie de camarão mais cultivada no mundo e no Brasil. Possui crescimento rápido, tolera ampla faixa de salinidade e tem alto valor de exportação. A carcinicultura é uma das principais atividades aquícolas do Nordeste brasileiro.',
    states: ['Rio Grande do Norte', 'Ceará', 'Bahia', 'Pernambuco', 'Paraíba', 'Maranhão'],
    environment: 'Marinho e estuarino. Viveiros escavados com água salobra ou marinha.',
    cultureSystem: 'Viveiros escavados com aeração, em regiões costeiras.',
    temperature: '28–32°C',
    ph: '7,5–8,5',
    oxygen: '> 4 mg/L',
    salinity: '5–40 ppm (ideal 15–25 ppm)',
    feeding:
      'Onívoro. Pós-larvas: ração farelada com 40% proteína. Engorda: ração peletizada com 30–35% proteína. Taxa de 2–5% da biomassa/dia.',
    stockingDensity: 'Viveiros aerados: 30–60 camarões/m²; Superintensivo: até 150/m²',
    dailyManagement:
      'Fornecer ração em 2–4 refeições. Monitorar oxigênio, salinidade e pH diariamente. Verificar sobras de ração com bandeja.',
    waterQuality:
      'Temperatura 28–32°C; pH 7,5–8,5; oxigênio > 4 mg/L; salinidade 5–40 ppm; amônia < 0,3 mg/L.',
    growOutTime: '3–4 meses',
    marketSize: '10–20 g (12–18 g/und)',
    diseases: ['Mancha branca (WSSV)', 'Síndrome de Taura (TSV)', 'Vibriose', 'Necrose infecciosa hipodermal e hematopoiética (IHHNV)'],
    prevention: [
      'Uso de pós-larvas livres de patógenos (SPF)',
      'Manter qualidade da água',
      'Desinfecção de viveiros entre ciclos',
      'Evitar entrada de animais silvestres',
    ],
    advantages: [
      'Crescimento muito rápido (3–4 meses)',
      'Alto valor de exportação',
      'Tolera ampla faixa de salinidade',
      'Principal produto aquícola de exportação do Brasil',
    ],
    disadvantages: [
      'Suscetível a doenças virais (mancha branca)',
      'Necessita água salobra ou marinha',
      'Requer investimento em aeração e infraestrutura',
      'Impacto ambiental se mal manejado',
    ],
    curiosities: [
      'O camarão marinho é o principal produto de exportação da aquicultura brasileira',
      'O Nordeste brasileiro é a principal região produtora',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de camarão marinho. Documentos técnicos.',
      'ABCC (Associação Brasileira de Criadores de Camarão). Manual de boas práticas na carcinicultura.',
    ],
  },
  {
    id: 'camarao-amazonia',
    name: 'Camarão da Amazônia',
    scientific: 'Macrobrachium amazonicum',
    category: 'camaroes',
    photo: 'https://images.pexels.com/photos/17714806/pexels-photo-17714806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['água doce', 'amazônia', 'nativo', 'regional'],
    description:
      'O camarão-da-amazônia é uma espécie nativa de água doce, muito apreciada na culinária regional amazônica. É menor que o camarão marinho, mas tem grande importância social e econômica na região Norte. Tem potencial para cultivo em viveiros de água doce.',
    states: ['Amazonas', 'Pará', 'Amapá', 'Rondônia', 'Tocantins'],
    environment: 'Água doce. Rios, lagos e várzeas da Amazônia.',
    cultureSystem: 'Viveiros escavados de água doce.',
    temperature: '26–30°C',
    ph: '6,5–8,0',
    oxygen: '> 4 mg/L',
    salinity: '0–5 ppm (água doce)',
    feeding:
      'Onívoro. Aceita ração farelada e peletizada com 30–35% de proteína. Taxa de 3–5% da biomassa/dia.',
    stockingDensity: 'Viveiros: 10–20 camarões/m²',
    dailyManagement: 'Fornecer ração em 2–3 refeições. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 26–30°C; pH 6,5–8,0; oxigênio > 4 mg/L; amônia < 0,5 mg/L.',
    growOutTime: '4–6 meses',
    marketSize: '5–12 g',
    diseases: ['Vibriose', 'Saprolegniose', 'Parasitoses'],
    prevention: ['Manter qualidade da água', 'Evitar superlotação', 'Quarentena de pós-larvas'],
    advantages: [
      'Espécie nativa, adaptada ao clima amazônico',
      'Cultivo em água doce',
      'Alta aceitação no mercado regional',
      'Baixo custo de implantação',
    ],
    disadvantages: [
      'Tamanho menor que o camarão marinho',
      'Mercado mais regionalizado',
      'Tecnologia de cultivo ainda em desenvolvimento',
    ],
    curiosities: [
      'É uma das espécies mais consumidas na culinária amazônica',
      'O cultivo em cativeiro ainda é incipiente, mas tem grande potencial',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de camarão-da-amazônia. Documentos técnicos.',
      'Moraes-Riodades, P.M.C. et al. (2014). Cultivo de Macrobrachium amazonicum. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'ostra',
    name: 'Ostra',
    scientific: 'Crassostrea gasar (C. brasiliana)',
    category: 'moluscos',
    photo: 'https://images.pexels.com/photos/2819899/pexels-photo-2819899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'molusco', 'comercial', 'litoral'],
    description:
      'A ostra é um molusco bivalve filtrador, cultivado em regiões litorâneas do Brasil. A espécie nativa Crassostrea gasar (anteriormente C. brasiliana) é a mais cultivada. A ostreicultura é uma atividade de baixo impacto ambiental, pois as ostras filtram a água e não necessitam de ração.',
    states: ['Santa Catarina', 'Paraná', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Ceará'],
    environment: 'Marinho. Águas costeiras, estuários e manguezais.',
    cultureSystem: 'Cultivo em mesas, longlines e cestas suspensas em águas costeiras.',
    temperature: '20–28°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '15–35 ppm',
    feeding:
      'Filtradora — não recebe ração. Alimenta-se de fitoplâncton e matéria orgânica em suspensão na água.',
    stockingDensity: 'Varia conforme o sistema: 50–200 ostras/m² em mesas',
    dailyManagement:
      'Verificar estruturas de cultivo. Limpar cestas e mesas para evitar incrustações. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 20–28°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 15–35 ppm. Água deve ser livre de contaminação bacteriológica.',
    growOutTime: '8–12 meses',
    marketSize: '60–100 mm (8–15 g de carne)',
    diseases: ['Perkinsus (protozoário)', 'Vibriose', 'Infecções bacterianas'],
    prevention: [
      'Escolher áreas com boa qualidade de água',
      'Monitorar coliformes fecais',
      'Usar sementes certificadas',
      'Manter densidade adequada',
    ],
    advantages: [
      'Não necessita ração — filtra o próprio alimento da água',
      'Baixo impacto ambiental',
      'Ajuda a melhorar a qualidade da água',
      'Atividade de baixo custo',
    ],
    disadvantages: [
      'Depende da qualidade da água do mar',
      'Suscetível a poluição e contaminação bacteriológica',
      'Mercado ainda em desenvolvimento em algumas regiões',
    ],
    curiosities: [
      'Uma ostra pode filtrar até 50 litros de água por dia',
      'A ostreicultura é uma das atividades aquícolas mais sustentáveis',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Ostreicultura no Brasil. Documentos técnicos.',
      'Epagri. Cultivo de ostras em Santa Catarina. Série didática.',
    ],
  },
  {
    id: 'mexilhao',
    name: 'Mexilhão',
    scientific: 'Perna perna',
    category: 'moluscos',
    photo: 'https://images.pexels.com/photos/11508336/pexels-photo-11508336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'molusco', 'comercial', 'litoral'],
    description:
      'O mexilhão é um molusco bivalve filtrador, cultivado principalmente em Santa Catarina, que é a maior produtora do Brasil. A espécie Perna perna é a mais cultivada. Assim como a ostra, é filtrador e não necessita ração. A mitilicultura é uma atividade econômica importante no litoral catarinense.',
    states: ['Santa Catarina', 'Paraná', 'São Paulo', 'Rio de Janeiro'],
    environment: 'Marinho. Águas costeiras com boa circulação.',
    cultureSystem: 'Cultivo em longlines (estruturas suspensas) e espinhel (estruturas flutuantes).',
    temperature: '15–25°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '25–35 ppm',
    feeding:
      'Filtrador — não recebe ração. Alimenta-se de fitoplâncton e matéria orgânica em suspensão.',
    stockingDensity: 'Varia conforme o sistema: 200–500 mexilhões/m de longline',
    dailyManagement:
      'Verificar estruturas. Limpar mexilhões para evitar incrustações. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 15–25°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 25–35 ppm.',
    growOutTime: '6–10 meses',
    marketSize: '60–80 mm',
    diseases: ['Dinoflagelados (maré vermelha)', 'Vibriose', 'Parasitoses'],
    prevention: [
      'Monitorar florações de algas tóxicas',
      'Escolher áreas com boa circulação',
      'Usar sementes certificadas',
    ],
    advantages: [
      'Não necessita ração',
      'Baixo impacto ambiental',
      'Santa Catarina é a maior produtora do Brasil',
      'Atividade econômica importante no litoral',
    ],
    disadvantages: [
      'Suscetível a marés vermelhas (florações tóxicas)',
      'Depende da qualidade da água do mar',
      'Mercado concentrado em poucas regiões',
    ],
    curiosities: [
      'Santa Catarina responde por mais de 90% da produção nacional de mexilhão',
      'O mexilhão se fixa a substratos por filamentos chamados bisso',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Mitilicultura no Brasil. Documentos técnicos.',
      'Epagri. Cultivo de mexilhão em Santa Catarina. Série didática.',
    ],
  },
  {
    id: 'vieira',
    name: 'Vieira',
    scientific: 'Nodipecten nodosus',
    category: 'moluscos',
    photo: 'https://images.pexels.com/photos/34087294/pexels-photo-34087294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'molusco', 'comercial', 'nobre'],
    description:
      'A vieira é um molusco bivalve de alto valor comercial, com carne nobre muito apreciada na gastronomia. No Brasil, a espécie Nodipecten nodosus (vieira-almofada) é a mais cultivada. A cultivo é realizado em regiões com águas marinhas de boa qualidade.',
    states: ['Rio de Janeiro', 'São Paulo', 'Bahia', 'Santa Catarina'],
    environment: 'Marinho. Águas costeiras limpas e com boa circulação.',
    cultureSystem: 'Cultivo em cestas suspensas (lanternas) em longlines.',
    temperature: '20–26°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '30–35 ppm',
    feeding:
      'Filtradora — não recebe ração. Alimenta-se de fitoplâncton e matéria orgânica em suspensão.',
    stockingDensity: 'Varia conforme o sistema: 100–300 vieiras/m² em cestas',
    dailyManagement:
      'Verificar estruturas. Limpar cestas. Monitorar crescimento e qualidade da água.',
    waterQuality:
      'Temperatura 20–26°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 30–35 ppm.',
    growOutTime: '12–18 meses',
    marketSize: '70–90 mm',
    diseases: ['Vibriose', 'Parasitoses', 'Infecções bacterianas'],
    prevention: [
      'Escolher áreas com excelente qualidade de água',
      'Usar sementes certificadas',
      'Manter densidade adequada',
    ],
    advantages: [
      'Alto valor comercial',
      'Carne nobre muito apreciada',
      'Não necessita ração',
    ],
    disadvantages: [
      'Crescimento lento (12–18 meses)',
      'Necessita águas marinhas de excelente qualidade',
      'Tecnologia de cultivo ainda em desenvolvimento',
    ],
    curiosities: [
      'A vieira é um dos moluscos mais valorizados na gastronomia',
      'A vieira-almofada é a espécie mais cultivada no Brasil',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de vieiras. Documentos técnicos.',
    ],
  },
  {
    id: 'ra-touro',
    name: 'Rã-touro',
    scientific: 'Lithobates catesbeianus',
    category: 'ras',
    photo: 'https://images.pexels.com/photos/8472012/pexels-photo-8472012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['anfíbio', 'comercial', 'rã-cultura', 'carne'],
    description:
      'A rã-touro é a espécie de anfíbio mais criada em cativeiro no mundo. Originária da América do Norte, é criada no Brasil para produção de carne (pernil) e couro. A rã-cultura é uma atividade de nicho, mas com bom valor de mercado. Exige manejo especializado e controle rigoroso de qualidade da água.',
    states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Santa Catarina'],
    environment: 'Semi-aquático. Tanques com água e área seca (abrigo).',
    cultureSystem: 'Tanques de fibra ou alvenaria com sistema de recirculação de água.',
    temperature: '24–30°C',
    ph: '6,5–8,0',
    oxygen: '> 4 mg/L',
    salinity: 'Não aplicável (água doce)',
    feeding:
      'Carnívora. Girinos: ração farelada com 35–40% proteína. Adultos: ração peletizada com 35–40% proteína, ou insetos e minhocas. Taxa de 2–3% do peso vivo/dia.',
    stockingDensity: 'Tanques: 20–50 rãs/m² (adultos)',
    dailyManagement:
      'Fornecer ração 1–2 vezes/dia. Limpar tanques diariamente. Trocar água parcialmente. Observar comportamento e saúde.',
    waterQuality:
      'Temperatura 24–30°C; pH 6,5–8,0; oxigênio > 4 mg/L; amônia < 0,5 mg/L. Água deve ser limpa e sem cloro.',
    growOutTime: '6–8 meses (da metamorfose ao abate)',
    marketSize: '150–250 g',
    diseases: ['Quitridiomicose (fungo)', 'Septicemia bacteriana', 'Parasitoses intestinais', 'Doença das pernas vermelhas'],
    prevention: [
      'Manter água limpa e filtrada',
      'Evitar superlotação',
      'Desinfecção de tanques',
      'Quarentena de novos animais',
    ],
    advantages: [
      'Carne de alto valor e baixo teor de gordura',
      'Couro de rã tem mercado específico',
      'Ciclo de produção relativamente curto',
    ],
    disadvantages: [
      'Exige manejo especializado',
      'Suscetível a doenças fúngicas e bacterianas',
      'Mercado consumidor ainda pequeno',
      'Necessita controle rigoroso de qualidade da água',
    ],
    curiosities: [
      'A rã-touro é o anfíbio mais criado em cativeiro no mundo',
      'O couro da rã é usado para fabricar bolsas e cintos',
    ],
    references: [
      'Embrapa. Rã-cultura no Brasil. Documentos técnicos.',
      'Ferreira, C.M. et al. (2010). Manejo na rã-cultura. Revista Brasileira de Zootecnia.',
    ],
  },
  {
    id: 'kappaphycus',
    name: 'Kappaphycus',
    scientific: 'Kappaphycus alvarezii',
    category: 'macroalgas',
    photo: 'https://images.pexels.com/photos/17317995/pexels-photo-17317995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'macroalga', 'comercial', 'carragena'],
    description:
      'Kappaphycus alvarezii é uma macroalga marinha cultivada para produção de carragena, substância usada na indústria alimentícia, farmacêutica e cosmética. No Brasil, é cultivada em regiões litorâneas do Nordeste. O cultivo é simples e de baixo custo, com bom potencial para comunidades costeiras.',
    states: ['Rio Grande do Norte', 'Ceará', 'Paraíba', 'Pernambuco', 'Bahia'],
    environment: 'Marinho. Águas tropicais costeiras, com boa transparência e circulação.',
    cultureSystem: 'Cultivo em longlines ou estruturas flutuantes em águas costeiras.',
    temperature: '25–30°C',
    ph: '7,5–8,5',
    oxygen: '> 5 mg/L',
    salinity: '30–35 ppm',
    feeding:
      'Não recebe ração. A macroalga absorve nutrientes dissolvidos na água do mar (fotossíntese).',
    stockingDensity: 'Varia conforme o sistema: 50–200 g de talo/m de longline',
    dailyManagement:
      'Verificar estruturas. Limpar talos para remover epífitas. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 25–30°C; pH 7,5–8,5; oxigênio > 5 mg/L; salinidade 30–35 ppm. Água deve ser transparente e com boa circulação.',
    growOutTime: '6–8 semanas (corte a cada 45–60 dias)',
    marketSize: 'Talos de 500–1.000 g (peso úmido)',
    diseases: ['Doença do gelo (ice-ice)', 'Epífitas (algas indesejáveis)', 'Branqueamento'],
    prevention: [
      'Escolher áreas com boa circulação de água',
      'Manter densidade adequada',
      'Remover epífitas regularmente',
      'Monitorar temperatura e salinidade',
    ],
    advantages: [
      'Cultivo simples e de baixo custo',
      'Não necessita ração',
      'Alto valor comercial (carragena)',
      'Potencial para comunidades costeiras',
    ],
    disadvantages: [
      'Suscetível a doenças como ice-ice',
      'Depende da qualidade da água do mar',
      'Mercado ainda em desenvolvimento no Brasil',
    ],
    curiosities: [
      'A carragena extraída de Kappaphycus é usada em sorvetes, iogurtes e cosméticos',
      'O cultivo de macroalgas é uma das atividades aquícolas mais sustentáveis',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de macroalgas. Documentos técnicos.',
      'Instituto de Pesca de São Paulo. Cultivo de Kappaphycus no Brasil. Série didática.',
    ],
  },
  {
    id: 'gracilaria',
    name: 'Gracilaria',
    scientific: 'Gracilaria birdiae',
    category: 'macroalgas',
    photo: 'https://images.pexels.com/photos/35019963/pexels-photo-35019963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['marinho', 'macroalga', 'comercial', 'agar'],
    description:
      'Gracilaria é um gênero de macroalga marinha cultivada para produção de ágar, substância usada na indústria alimentícia e farmacêutica. No Brasil, a espécie Gracilaria birdiae é nativa e cultivada no Nordeste. O cultivo é simples e pode ser feito em áreas estuarinas.',
    states: ['Rio Grande do Norte', 'Ceará', 'Paraíba', 'Bahia', 'Pernambuco'],
    environment: 'Marinho e estuarino. Águas rasas costeiras.',
    cultureSystem: 'Cultivo em fundeio ou estruturas suspensas em águas costeiras.',
    temperature: '24–30°C',
    ph: '7,5–8,5',
    oxygen: '> 4 mg/L',
    salinity: '25–35 ppm',
    feeding:
      'Não recebe ração. Absorve nutrientes dissolvidos na água (fotossíntese).',
    stockingDensity: 'Varia conforme o sistema: 50–200 g de talo/m',
    dailyManagement: 'Verificar estruturas. Limpar talos. Monitorar qualidade da água.',
    waterQuality:
      'Temperatura 24–30°C; pH 7,5–8,5; oxigênio > 4 mg/L; salinidade 25–35 ppm.',
    growOutTime: '6–8 semanas',
    marketSize: 'Talos de 300–600 g (peso úmido)',
    diseases: ['Epífitas', 'Branqueamento', 'Doença do gelo'],
    prevention: ['Escolher áreas com boa circulação', 'Remover epífitas', 'Manter densidade adequada'],
    advantages: [
      'Espécie nativa do Brasil',
      'Cultivo simples e de baixo custo',
      'Não necessita ração',
      'Produção de ágar para indústria',
    ],
    disadvantages: [
      'Mercado ainda em desenvolvimento',
      'Depende da qualidade da água',
      'Tecnologia de cultivo em aperfeiçoamento',
    ],
    curiosities: [
      'O ágar extraído de Gracilaria é usado em meios de cultura laboratorial e em alimentos',
      'Gracilaria birdiae é uma espécie nativa do litoral brasileiro',
    ],
    references: [
      'Embrapa Pesca e Aquicultura. Cultivo de Gracilaria. Documentos técnicos.',
      'Ursi, C.A. et al. (2013). Cultivo de Gracilaria birdiae no Nordeste. Revista Brasileira de Farmacognosia.',
    ],
  },
];
