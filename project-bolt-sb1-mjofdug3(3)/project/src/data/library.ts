export type LibraryCategory =
  | 'aquicultura'
  | 'qualidade-agua'
  | 'alimentacao'
  | 'sanidade'
  | 'manejo'
  | 'reproducao'
  | 'construcao-viveiros'
  | 'especies'
  | 'sustentabilidade'
  | 'legislacao'
  | 'videos';

export type MaterialType = 'artigo' | 'cartilha' | 'manual' | 'video' | 'legislacao';

export interface LibraryItem {
  id: string;
  title: string;
  institution: string;
  author?: string;
  year: string;
  abstract: string;
  category: LibraryCategory;
  speciesRelated: string[];
  subject: string;
  type: MaterialType;
  url: string;
  hasPdf: boolean;
  hasVideo: boolean;
  state?: string;
}

export const libraryCategories: { id: LibraryCategory; name: string }[] = [
  { id: 'aquicultura', name: 'Aquicultura' },
  { id: 'qualidade-agua', name: 'Qualidade da Água' },
  { id: 'alimentacao', name: 'Alimentação' },
  { id: 'sanidade', name: 'Sanidade e Doenças' },
  { id: 'manejo', name: 'Manejo' },
  { id: 'reproducao', name: 'Reprodução' },
  { id: 'construcao-viveiros', name: 'Construção e Preparo de Viveiros' },
  { id: 'especies', name: 'Espécies Cultivadas' },
  { id: 'sustentabilidade', name: 'Sustentabilidade' },
  { id: 'legislacao', name: 'Legislação' },
  { id: 'videos', name: 'Materiais em Vídeo' },
];

export const libraryItems: LibraryItem[] = [
  {
    id: 'lib-001',
    title: 'Cultivo do tambaqui no Amazonas',
    institution: 'Embrapa Amazônia Ocidental',
    author: 'Izel, A.C.U.; Crescencio, R.; O\'Sullivan, F.L.A.; Chagas, E.C.; Boijink, C.L.',
    year: '2014',
    abstract:
      'Livro técnico completo sobre o cultivo de tambaqui, abordando escolha da área, construção de tanques, abastecimento de água, alevinos, recria, engorda, alimentação, qualidade da água, sanidade, despesca, comercialização e licença ambiental.',
    category: 'especies',
    speciesRelated: ['tambaqui'],
    subject: 'Cultivo de tambaqui',
    type: 'manual',
    url: 'https://embrapa.br/busca-de-publicacoes/-/publicacao/1001080/cultivo-do-tambaqui-no-amazonas',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-002',
    title: 'Densidade de estocagem de juvenis de tambaqui durante a recria em tanques-rede',
    institution: 'Embrapa / SciELO Brasil',
    author: 'Souza, M.L.R. et al.',
    year: '2018',
    abstract:
      'Avalia o efeito de diferentes densidades de estocagem no desempenho produtivo de juvenis de tambaqui em tanques-rede, com recomendações técnicas para o manejo adequado.',
    category: 'especies',
    speciesRelated: ['tambaqui'],
    subject: 'Densidade de estocagem de tambaqui',
    type: 'artigo',
    url: 'https://www.scielo.br/j/pab/a/XpKCpY5gv7cy9k75wTndc5K',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-004',
    title: 'Cultivo de tambaqui em gaiolas de baixo volume: efeito da densidade de estocagem',
    institution: 'SciELO Brasil',
    author: 'Inoue, L.A.K.A. et al.',
    year: '2014',
    abstract:
      'Avalia o desempenho do tambaqui em gaiolas de baixo volume sob diferentes densidades de estocagem, com recomendações para maximizar a produção.',
    category: 'manejo',
    speciesRelated: ['tambaqui'],
    subject: 'Tanques-rede e gaiolas de baixo volume',
    type: 'artigo',
    url: 'https://www.scielo.br/j/cab/a/hS8mCztY6yPCsNWkyB6JgFF?lang=pt',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-006',
    title: 'Desempenho produtivo da tilápia-do-nilo em tanques-rede',
    institution: 'SciELO Brasil',
    author: 'Carvalho, E.D. et al.',
    year: '2010',
    abstract:
      'Avalia o desempenho produtivo da tilápia-do-nilo em tanques-rede em águas públicas, com análises de crescimento e viabilidade econômica.',
    category: 'especies',
    speciesRelated: ['tilapia'],
    subject: 'Desempenho produtivo da tilápia',
    type: 'artigo',
    url: 'https://www.scielo.br/j/cr/a/mpRTFqZdmvwQLVkX7rmNhSB?lang=pt',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-008',
    title: 'Efeito da fotossíntese na alcalinidade da água de cultivo de peixes',
    institution: 'SciELO Brasil / Revista Caatinga',
    author: 'Cavalcante, D.H. et al.',
    year: '2010',
    abstract:
      'Analisa como a fotossíntese afeta a alcalinidade e outros parâmetros da água de cultivo, com implicações para o manejo da qualidade da água.',
    category: 'qualidade-agua',
    speciesRelated: ['tambaqui', 'tilapia'],
    subject: 'Alcalinidade e qualidade da água',
    type: 'artigo',
    url: 'https://www.scielo.br/j/rca/a/DVTPdmPYZ8VLrjfRHnyCrMM',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-009',
    title: 'Manual do cultivo de ostras — Sistema de cultivo',
    institution: 'Epagri',
    year: '2020',
    abstract:
      'Manual completo sobre o cultivo de ostras em Santa Catarina, abordando produção de sementes, sistemas de cultivo, manejo e comercialização.',
    category: 'especies',
    speciesRelated: ['ostra'],
    subject: 'Ostreicultura em Santa Catarina',
    type: 'manual',
    url: 'https://docweb.epagri.sc.gov.br/website_epagri/Cedap/Livro/6_Livro_maricultura_ostra_sistema_de_cultivo.pdf',
    hasPdf: true,
    hasVideo: false,
    state: 'Santa Catarina',
  },
  {
    id: 'lib-010',
    title: 'Plano Estratégico para o Desenvolvimento Sustentável da Maricultura',
    institution: 'Epagri',
    year: '2019',
    abstract:
      'Documento estratégico para o desenvolvimento sustentável da maricultura em Santa Catarina, com diretrizes para ostreicultura e mitilicultura.',
    category: 'sustentabilidade',
    speciesRelated: ['ostra', 'mexilhao'],
    subject: 'Desenvolvimento sustentável da maricultura',
    type: 'manual',
    url: 'https://docweb.epagri.sc.gov.br/website_epagri/Cedap/Publicacao-Seriada/15-Publicacao-seriada-maricultura-gestao.pdf',
    hasPdf: true,
    hasVideo: false,
    state: 'Santa Catarina',
  },
  {
    id: 'lib-011',
    title: 'Levantamento da atuação da Embrapa em pesquisa em pesca e aquicultura',
    institution: 'Embrapa Pesca e Aquicultura',
    year: '2017',
    abstract:
      'Documento técnico que mapeia as pesquisas da Embrapa em aquicultura, incluindo pirarucu, tambaqui, cachara e tilápia, com boas práticas de manejo sanitário.',
    category: 'aquicultura',
    speciesRelated: ['pirarucu', 'tambaqui', 'cachara', 'tilapia'],
    subject: 'Pesquisa e desenvolvimento em aquicultura',
    type: 'manual',
    url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1011445/1/SD11.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-012',
    title: 'Embrapa Pesca e Aquicultura — Portal oficial',
    institution: 'Embrapa',
    year: '2024',
    abstract:
      'Portal oficial da Embrapa Pesca e Aquicultura, com publicações, soluções tecnológicas e documentos técnicos sobre cultivo de espécies aquícolas no Brasil.',
    category: 'aquicultura',
    speciesRelated: [],
    subject: 'Portal institucional Embrapa',
    type: 'cartilha',
    url: 'https://embrapa.br/pesca-e-aquicultura',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-013',
    title: 'Publicações e Biblioteca — Embrapa Pesca e Aquicultura',
    institution: 'Embrapa',
    year: '2024',
    abstract:
      'Página de publicações técnicas da Embrapa Pesca e Aquicultura, com acesso a livros, cartilhas, boletins de pesquisa e documentos técnicos sobre aquicultura.',
    category: 'aquicultura',
    speciesRelated: [],
    subject: 'Publicações técnicas da Embrapa',
    type: 'cartilha',
    url: 'https://www.embrapa.br/web/pesca-e-aquicultura/publicacoes-e-biblioteca',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-014',
    title: 'Política Nacional de Desenvolvimento Sustentável da Aquicultura e da Pesca',
    institution: 'Ministério da Pesca e Aquicultura',
    year: '2009',
    abstract:
      'Lei nº 11.959/2009 que estabelece a Política Nacional de Desenvolvimento Sustentável da Aquicultura e da Pesca, base legal para a atividade aquícola no Brasil.',
    category: 'legislacao',
    speciesRelated: [],
    subject: 'Legislação federal da aquicultura',
    type: 'legislacao',
    url: 'https://www.gov.br/mpa/pt-br/assuntos/pesca-artesanal/pesca-no-brasil',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-015',
    title: 'Legislação da Pesca e Aquicultura',
    institution: 'Ministério da Pesca e Aquicultura',
    year: '2024',
    abstract:
      'Página oficial do MPA com a legislação aplicável à pesca e aquicultura, incluindo leis, decretos e portarias.',
    category: 'legislacao',
    speciesRelated: [],
    subject: 'Legislação e normativos',
    type: 'legislacao',
    url: 'https://www.gov.br/mpa/pt-br/assuntos/pesca-amadora-e-esportiva/legislacao',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-016',
    title: 'Ministério da Pesca e Aquicultura — Portal oficial',
    institution: 'Ministério da Pesca e Aquicultura',
    year: '2024',
    abstract:
      'Portal oficial do Ministério da Pesca e Aquicultura, com informações sobre políticas, programas e normativos para o setor pesqueiro e aquícola brasileiro.',
    category: 'legislacao',
    speciesRelated: [],
    subject: 'Portal oficial do MPA',
    type: 'cartilha',
    url: 'https://www.gov.br/mpa/pt-br',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-019',
    title: 'Espécies exóticas invasoras e a tilápia-do-nilo na aquicultura brasileira',
    institution: 'SciELO Brasil',
    author: 'Moreira, E.A. et al.',
    year: '2023',
    abstract:
      'Discute o papel da tilápia-do-nilo na aquicultura brasileira, responsável por mais de 90% da produção, e os desafios das espécies exóticas invasoras.',
    category: 'sustentabilidade',
    speciesRelated: ['tilapia'],
    subject: 'Tilápia e espécies invasoras',
    type: 'artigo',
    url: 'https://www.scielo.br/j/cab/a/mrHZCr9RMHkbSSjwxyss4SF?lang=pt',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-022',
    title: 'Sanidade dos Animais Aquáticos — MAPA',
    institution: 'Ministério da Agricultura e Pecuária (MAPA)',
    year: '2024',
    abstract:
      'Página oficial do MAPA sobre o Programa Nacional de Sanidade de Animais Aquáticos de Cultivo ("Aquicultura com Sanidade"), com diretrizes para saúde animal na aquicultura.',
    category: 'sanidade',
    speciesRelated: [],
    subject: 'Sanidade aquícola oficial',
    type: 'legislacao',
    url: 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/sanidade-dos-animais-aquaticos',
    hasPdf: false,
    hasVideo: false,
  },
  {
    id: 'lib-023',
    title: 'Cultivo do pirarucu (Arapaima gigas) em viveiro escavado',
    institution: 'Embrapa Acre',
    author: 'Crescencio, R.',
    year: '2015',
    abstract:
      'Documento técnico sobre o cultivo de pirarucu em viveiro escavado, com dados de desempenho, alimentação, densidade e produtividade.',
    category: 'especies',
    speciesRelated: ['pirarucu'],
    subject: 'Cultivo de pirarucu',
    type: 'manual',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/502635/cultivo-do-pirarucu-arapaima-gigas-em-viveiro-escavado',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-024',
    title: 'Manual de piscicultura familiar em viveiros escavados',
    institution: 'Embrapa',
    year: '2023',
    abstract:
      'Manual técnico sobre planejamento inicial de uma piscicultura, construção de viveiros escavados, preparação de viveiros, produção de peixes e qualidade da água.',
    category: 'construcao-viveiros',
    speciesRelated: [],
    subject: 'Piscicultura familiar em viveiros',
    type: 'manual',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1167143/manual-de-piscicultura-familiar-em-viveiros-escavados',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-025',
    title: 'Manual técnico de manipulação e conservação de pescado',
    institution: 'Embrapa',
    year: '2022',
    abstract:
      'Manual técnico sobre manipulação e conservação de pescado, abordando garantia de qualidade, segurança dos alimentos e boas práticas de processamento.',
    category: 'manejo',
    speciesRelated: [],
    subject: 'Manipulação e conservação de pescado',
    type: 'manual',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1110125/manual-tecnico-de-manipulacao-e-conservacao-de-pescado',
    hasPdf: true,
    hasVideo: false,
  },
];

export function getLibraryBySpecies(speciesId: string): LibraryItem[] {
  return libraryItems.filter((item) => item.speciesRelated.includes(speciesId));
}
