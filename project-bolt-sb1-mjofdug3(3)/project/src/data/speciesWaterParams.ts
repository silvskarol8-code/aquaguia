export interface ParamRange {
  min: number;
  max: number;
  warningLow: number;
  warningHigh: number;
  unit: string;
}

export interface SpeciesWaterParams {
  speciesId: string;
  source: string;
  temperature: ParamRange;
  ph: ParamRange;
  oxygen: ParamRange;
  ammonia: ParamRange;
  nitrite: ParamRange;
  alkalinity: ParamRange;
  hardness: ParamRange;
  transparency: ParamRange;
  salinity?: ParamRange;
}

export const speciesWaterParams: SpeciesWaterParams[] = [
  {
    speciesId: 'tambaqui',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de tambaqui (Colossoma macropomum). Boletim de Pesquisa e Desenvolvimento.',
    temperature: { min: 28, max: 32, warningLow: 25, warningHigh: 33, unit: '°C' },
    ph: { min: 5.0, max: 6.5, warningLow: 4.5, warningHigh: 7.5, unit: '' },
    oxygen: { min: 2, max: 8, warningLow: 1, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 15, max: 60, warningLow: 10, warningHigh: 80, unit: 'mg/L' },
    hardness: { min: 10, max: 60, warningLow: 5, warningHigh: 80, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'tilapia',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de tilápia-do-nilo (Oreochromis niloticus). Circular Técnica 141.',
    temperature: { min: 27, max: 32, warningLow: 22, warningHigh: 34, unit: '°C' },
    ph: { min: 6.5, max: 9.0, warningLow: 6.0, warningHigh: 9.5, unit: '' },
    oxygen: { min: 3, max: 8, warningLow: 1.5, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 30, max: 120, warningLow: 20, warningHigh: 150, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 150, unit: 'mg/L' },
    transparency: { min: 30, max: 50, warningLow: 20, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'tambacu',
    source:
      'Embrapa Pesca e Aquicultura — Hibridação de tambaqui x pacu. Documentos 42.',
    temperature: { min: 26, max: 30, warningLow: 24, warningHigh: 32, unit: '°C' },
    ph: { min: 5.5, max: 7.0, warningLow: 5.0, warningHigh: 7.5, unit: '' },
    oxygen: { min: 3, max: 8, warningLow: 2, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 20, max: 80, warningLow: 10, warningHigh: 100, unit: 'mg/L' },
    hardness: { min: 15, max: 80, warningLow: 10, warningHigh: 100, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'tambatinga',
    source:
      'Embrapa Pesca e Aquicultura — Hibridação de tambaqui x pirapitinga. Documentos 47.',
    temperature: { min: 27, max: 32, warningLow: 25, warningHigh: 33, unit: '°C' },
    ph: { min: 5.0, max: 6.5, warningLow: 4.5, warningHigh: 7.5, unit: '' },
    oxygen: { min: 2, max: 8, warningLow: 1, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 15, max: 60, warningLow: 10, warningHigh: 80, unit: 'mg/L' },
    hardness: { min: 10, max: 60, warningLow: 5, warningHigh: 80, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'pacu',
    source:
      'Embrapa Pantanal — Cultivo de pacu (Piaractus mesopotamicus). Circular Técnica 53.',
    temperature: { min: 24, max: 28, warningLow: 22, warningHigh: 30, unit: '°C' },
    ph: { min: 6.0, max: 7.5, warningLow: 5.5, warningHigh: 8.0, unit: '' },
    oxygen: { min: 4, max: 8, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 30, max: 55, warningLow: 20, warningHigh: 65, unit: 'cm' },
  },
  {
    speciesId: 'pirarucu',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de pirarucu (Arapaima gigas). Documentos 110.',
    temperature: { min: 28, max: 32, warningLow: 26, warningHigh: 34, unit: '°C' },
    ph: { min: 6.0, max: 7.0, warningLow: 5.5, warningHigh: 7.5, unit: '' },
    oxygen: { min: 0, max: 8, warningLow: 0, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 15, max: 50, warningLow: 10, warningHigh: 70, unit: 'mg/L' },
    hardness: { min: 10, max: 50, warningLow: 5, warningHigh: 70, unit: 'mg/L' },
    transparency: { min: 20, max: 45, warningLow: 15, warningHigh: 55, unit: 'cm' },
  },
  {
    speciesId: 'pintado',
    source:
      'Embrapa Pantanal — Cultivo de pintado (Pseudoplatystoma corruscans). Circular Técnica 61.',
    temperature: { min: 22, max: 28, warningLow: 20, warningHigh: 30, unit: '°C' },
    ph: { min: 6.0, max: 7.5, warningLow: 5.5, warningHigh: 8.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 40, max: 120, warningLow: 30, warningHigh: 150, unit: 'mg/L' },
    hardness: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 35, max: 60, warningLow: 25, warningHigh: 70, unit: 'cm' },
  },
  {
    speciesId: 'cachara',
    source:
      'Embrapa Pantanal — Cultivo de cachara (Pseudoplatystoma reticulatum). Documentos 88.',
    temperature: { min: 24, max: 30, warningLow: 22, warningHigh: 32, unit: '°C' },
    ph: { min: 6.0, max: 7.5, warningLow: 5.5, warningHigh: 8.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 40, max: 120, warningLow: 30, warningHigh: 150, unit: 'mg/L' },
    hardness: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 35, max: 60, warningLow: 25, warningHigh: 70, unit: 'cm' },
  },
  {
    speciesId: 'jundia',
    source:
      'Epagri — Cultivo de jundiá (Rhamdia quelen). Sistemas de Produção de Peixes no Sul do Brasil.',
    temperature: { min: 18, max: 23, warningLow: 15, warningHigh: 26, unit: '°C' },
    ph: { min: 6.5, max: 8.0, warningLow: 6.0, warningHigh: 8.5, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 40, max: 120, warningLow: 30, warningHigh: 150, unit: 'mg/L' },
    hardness: { min: 30, max: 120, warningLow: 20, warningHigh: 150, unit: 'mg/L' },
    transparency: { min: 35, max: 60, warningLow: 25, warningHigh: 70, unit: 'cm' },
  },
  {
    speciesId: 'matrinxa',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de matrinxã (Brycon amazonicus). Documentos 33.',
    temperature: { min: 24, max: 28, warningLow: 22, warningHigh: 30, unit: '°C' },
    ph: { min: 6.0, max: 7.0, warningLow: 5.5, warningHigh: 7.5, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 30, max: 55, warningLow: 20, warningHigh: 65, unit: 'cm' },
  },
  {
    speciesId: 'curimata',
    source:
      'Embrapa Pantanal — Cultivo de curimatã (Prochilodus lineatus). Circular Técnica 27.',
    temperature: { min: 22, max: 28, warningLow: 20, warningHigh: 30, unit: '°C' },
    ph: { min: 6.5, max: 8.0, warningLow: 6.0, warningHigh: 8.5, unit: '' },
    oxygen: { min: 4, max: 8, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'pirapitinga',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de pirapitinga (Piaractus brachypomus). Documentos 39.',
    temperature: { min: 26, max: 32, warningLow: 24, warningHigh: 33, unit: '°C' },
    ph: { min: 5.0, max: 6.5, warningLow: 4.5, warningHigh: 7.5, unit: '' },
    oxygen: { min: 2, max: 8, warningLow: 1, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 15, max: 60, warningLow: 10, warningHigh: 80, unit: 'mg/L' },
    hardness: { min: 10, max: 60, warningLow: 5, warningHigh: 80, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'piau',
    source:
      'Embrapa — Cultivo de piau (Leporinus spp.). Sistemas de Produção.',
    temperature: { min: 22, max: 28, warningLow: 20, warningHigh: 30, unit: '°C' },
    ph: { min: 6.0, max: 7.5, warningLow: 5.5, warningHigh: 8.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 30, max: 55, warningLow: 20, warningHigh: 65, unit: 'cm' },
  },
  {
    speciesId: 'traira',
    source:
      'Embrapa — Cultivo de traíra (Hoplias spp.). Circular Técnica sobre espécies nativas resistentes.',
    temperature: { min: 22, max: 28, warningLow: 18, warningHigh: 32, unit: '°C' },
    ph: { min: 5.5, max: 7.5, warningLow: 5.0, warningHigh: 8.5, unit: '' },
    oxygen: { min: 1, max: 8, warningLow: 0.5, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.5, warningLow: 0, warningHigh: 1.0, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.1, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    alkalinity: { min: 15, max: 80, warningLow: 10, warningHigh: 100, unit: 'mg/L' },
    hardness: { min: 10, max: 80, warningLow: 5, warningHigh: 100, unit: 'mg/L' },
    transparency: { min: 20, max: 45, warningLow: 15, warningHigh: 55, unit: 'cm' },
  },
  {
    speciesId: 'robalo',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de robalo (Centropomus spp.). Documentos 104.',
    temperature: { min: 25, max: 30, warningLow: 23, warningHigh: 32, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 60, max: 150, warningLow: 40, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 50, max: 200, warningLow: 30, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 35, max: 60, warningLow: 25, warningHigh: 70, unit: 'cm' },
    salinity: { min: 5, max: 35, warningLow: 3, warningHigh: 40, unit: 'ppt' },
  },
  {
    speciesId: 'bijupira',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de bijupirá (Rachycentron canadum). Documentos 132.',
    temperature: { min: 25, max: 30, warningLow: 23, warningHigh: 32, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.15, warningLow: 0, warningHigh: 0.25, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.03, warningLow: 0, warningHigh: 0.08, unit: 'mg/L' },
    alkalinity: { min: 80, max: 160, warningLow: 60, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 80, max: 200, warningLow: 60, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 40, max: 70, warningLow: 30, warningHigh: 80, unit: 'cm' },
    salinity: { min: 28, max: 35, warningLow: 25, warningHigh: 38, unit: 'ppt' },
  },
  {
    speciesId: 'camarao-marinho',
    source:
      'ABCC/Embrapa — Cultivo de camarão marinho (Litopenaeus vannamei). Manual de Boas Práticas de Manejo.',
    temperature: { min: 28, max: 32, warningLow: 26, warningHigh: 34, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 4, max: 8, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 80, max: 160, warningLow: 60, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 80, max: 200, warningLow: 60, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 30, max: 50, warningLow: 20, warningHigh: 60, unit: 'cm' },
    salinity: { min: 5, max: 40, warningLow: 3, warningHigh: 45, unit: 'ppt' },
  },
  {
    speciesId: 'camarao-amazonia',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de camarão-da-amazônia (Macrobrachium amazonicum). Documentos 125.',
    temperature: { min: 26, max: 30, warningLow: 24, warningHigh: 32, unit: '°C' },
    ph: { min: 6.5, max: 8.0, warningLow: 6.0, warningHigh: 8.5, unit: '' },
    oxygen: { min: 4, max: 8, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 30, max: 50, warningLow: 20, warningHigh: 60, unit: 'cm' },
    salinity: { min: 0, max: 5, warningLow: 0, warningHigh: 10, unit: 'ppt' },
  },
  {
    speciesId: 'ostra',
    source:
      'Epagri — Ostreicultura em Santa Catarina (Crassostrea gasar/gigas). Manual de Cultivo de Ostras.',
    temperature: { min: 20, max: 28, warningLow: 18, warningHigh: 30, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 60, max: 160, warningLow: 40, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 60, max: 200, warningLow: 40, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 40, max: 80, warningLow: 30, warningHigh: 90, unit: 'cm' },
    salinity: { min: 15, max: 35, warningLow: 10, warningHigh: 40, unit: 'ppt' },
  },
  {
    speciesId: 'mexilhao',
    source:
      'Epagri — Mitilicultura em Santa Catarina (Perna perna). Manual de Cultivo de Mexilhões.',
    temperature: { min: 15, max: 25, warningLow: 12, warningHigh: 28, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 60, max: 160, warningLow: 40, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 60, max: 200, warningLow: 40, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 40, max: 80, warningLow: 30, warningHigh: 90, unit: 'cm' },
    salinity: { min: 25, max: 35, warningLow: 20, warningHigh: 40, unit: 'ppt' },
  },
  {
    speciesId: 'vieira',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de vieira (Nodipecten nodosus). Documentos 143.',
    temperature: { min: 20, max: 26, warningLow: 18, warningHigh: 28, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.15, warningLow: 0, warningHigh: 0.25, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.03, warningLow: 0, warningHigh: 0.08, unit: 'mg/L' },
    alkalinity: { min: 80, max: 160, warningLow: 60, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 80, max: 200, warningLow: 60, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 45, max: 80, warningLow: 35, warningHigh: 90, unit: 'cm' },
    salinity: { min: 30, max: 35, warningLow: 28, warningHigh: 38, unit: 'ppt' },
  },
  {
    speciesId: 'ra-touro',
    source:
      'Embrapa — Ranicultura: cultivo de rã-touro (Lithobates catesbeianus). Circular Técnica 6.',
    temperature: { min: 24, max: 30, warningLow: 22, warningHigh: 32, unit: '°C' },
    ph: { min: 6.5, max: 8.0, warningLow: 6.0, warningHigh: 8.5, unit: '' },
    oxygen: { min: 4, max: 8, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.3, warningLow: 0, warningHigh: 0.5, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.08, warningLow: 0, warningHigh: 0.2, unit: 'mg/L' },
    alkalinity: { min: 30, max: 100, warningLow: 20, warningHigh: 120, unit: 'mg/L' },
    hardness: { min: 20, max: 100, warningLow: 10, warningHigh: 120, unit: 'mg/L' },
    transparency: { min: 25, max: 50, warningLow: 15, warningHigh: 60, unit: 'cm' },
  },
  {
    speciesId: 'kappaphycus',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de macroalgas (Kappaphycus alvarezii). Documentos 118.',
    temperature: { min: 25, max: 30, warningLow: 23, warningHigh: 32, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 5, max: 9, warningLow: 4, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.15, warningLow: 0, warningHigh: 0.25, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.03, warningLow: 0, warningHigh: 0.08, unit: 'mg/L' },
    alkalinity: { min: 80, max: 160, warningLow: 60, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 80, max: 200, warningLow: 60, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 50, max: 100, warningLow: 40, warningHigh: 100, unit: 'cm' },
    salinity: { min: 30, max: 35, warningLow: 28, warningHigh: 38, unit: 'ppt' },
  },
  {
    speciesId: 'gracilaria',
    source:
      'Embrapa Pesca e Aquicultura — Cultivo de Gracilaria birdiae. Documentos 129.',
    temperature: { min: 24, max: 30, warningLow: 22, warningHigh: 32, unit: '°C' },
    ph: { min: 7.5, max: 8.5, warningLow: 7.0, warningHigh: 9.0, unit: '' },
    oxygen: { min: 4, max: 9, warningLow: 3, warningHigh: 10, unit: 'mg/L' },
    ammonia: { min: 0, max: 0.2, warningLow: 0, warningHigh: 0.3, unit: 'mg/L' },
    nitrite: { min: 0, max: 0.05, warningLow: 0, warningHigh: 0.1, unit: 'mg/L' },
    alkalinity: { min: 60, max: 160, warningLow: 40, warningHigh: 180, unit: 'mg/L' },
    hardness: { min: 60, max: 200, warningLow: 40, warningHigh: 250, unit: 'mg/L' },
    transparency: { min: 45, max: 90, warningLow: 35, warningHigh: 100, unit: 'cm' },
    salinity: { min: 25, max: 35, warningLow: 20, warningHigh: 40, unit: 'ppt' },
  },
];

export function getSpeciesWaterParams(speciesId: string): SpeciesWaterParams | undefined {
  return speciesWaterParams.find((p) => p.speciesId === speciesId);
}

export type ParamStatus = 'ideal' | 'atencao' | 'ruim' | 'vazio';

export function analyzeParam(value: number, range: ParamRange): ParamStatus {
  if (isNaN(value)) return 'vazio';
  if (value >= range.min && value <= range.max) return 'ideal';
  if (value >= range.warningLow && value <= range.warningHigh) return 'atencao';
  return 'ruim';
}

export function getParamDirection(value: number, range: ParamRange): 'high' | 'low' | 'ok' {
  if (isNaN(value)) return 'ok';
  if (value < range.min) return 'low';
  if (value > range.max) return 'high';
  return 'ok';
}

interface ParamGuidance {
  problem: string;
  action: string;
}

const guidanceHigh: Record<string, ParamGuidance> = {
  temperature: {
    problem: 'Temperatura acima do ideal. Pode causar estresse térmico, aumentar o metabolismo e reduzir o oxigênio dissolvido na água.',
    action: 'Aumente a renovação de água, instale sombreamento sobre o viveiro e evite alimentação nas horas mais quentes do dia.',
  },
  ph: {
    problem: 'pH elevado. Pode causar toxicidade por amônia não ionizada e prejudicar a absorção de nutrientes.',
    action: 'Renove parte da água. Aplique ácidos orgânicos ou gesso agrícola para reduzir o pH gradualmente.',
  },
  oxygen: {
    problem: 'Oxigênio dissolvido muito alto (supersaturação). Pode causar doença das bolhas de gás nos peixes.',
    action: 'Reduza a aeração. Verifique se há crescimento excessivo de fitoplâncton e faça renovação parcial da água.',
  },
  ammonia: {
    problem: 'Amônia elevada. É tóxica para os peixes e pode causar mortalidade, danos às brânquias e redução no crescimento.',
    action: 'Pare a alimentação imediatamente. Faça renovação de 30-50% da água. Aumente a aeração. Aplique bactérias nitrificantes.',
  },
  nitrite: {
    problem: 'Nitrito elevado. Causa metemoglobinemia (sangue marrom), reduzindo a capacidade de transporte de oxigênio dos peixes.',
    action: 'Faça renovação parcial da água. Aumente a aeração. Aplique cloreto de sódio (sal) na proporção de 1-2 g/L para competir com o nitrito.',
  },
  alkalinity: {
    problem: 'Alcalinidade elevada. Pode dificultar a redução do pH e causar precipitação de nutrientes essenciais.',
    action: 'Faça renovação parcial com água de menor alcalinidade. Reduza a aplicação de calcário e fertilizantes.',
  },
  hardness: {
    problem: 'Dureza elevada. Pode reduzir a disponibilidade de alguns nutrientes e afetar a osmorregulação dos peixes.',
    action: 'Dilua com água de menor dureza. Evite aplicação excessiva de calcário.',
  },
  transparency: {
    problem: 'Água muito transparente. Indica baixa disponibilidade de fitoplâncton, o que reduz a produção natural de alimento.',
    action: 'Aplique fertilizante orgânico (esterco) ou químico (NPK) para promover o desenvolvimento do fitoplâncton.',
  },
  salinity: {
    problem: 'Salinidade acima do ideal para a espécie. Causa estresse osmorregulatório e pode reduzir o crescimento.',
    action: 'Renove com água de menor salinidade (doce ou menos salgada) conforme o sistema de cultivo da espécie.',
  },
};

const guidanceLow: Record<string, ParamGuidance> = {
  temperature: {
    problem: 'Temperatura abaixo do ideal. Reduz o metabolismo, o apetite e o crescimento dos peixes. Pode causar doenças.',
    action: 'Instale aquecedores em cultivos intensivos, reduze a renovação de água fria e ajuste a alimentação para o período mais quente do dia.',
  },
  ph: {
    problem: 'pH baixo. Causa acidose, reduz o apetite, prejudica o crescimento e pode levar à mortalidade em casos extremos.',
    action: 'Aplique calcário agrícola (carbonato de cálcio) ou dolomítico para elevar o pH e a alcalinidade gradualmente.',
  },
  oxygen: {
    problem: 'Oxigênio dissolvido abaixo do mínimo. Pode causar hipóxia, sufocamento e mortalidade massiva em poucas horas.',
    action: 'Ligue aeradores ou bombas de ar imediatamente. Reduza ou suspenda a alimentação. Remova excesso de matéria orgânica e faça renovação de água.',
  },
  ammonia: {
    problem: 'Amônia em nível muito baixo. Não é problema para os peixes, mas pode indicar baixa produtividade do sistema.',
    action: 'Não é necessário ajuste. Valores próximos de zero são desejáveis e indicam boa qualidade de água.',
  },
  nitrite: {
    problem: 'Nitrito em nível muito baixo. Não é problema para os peixes e indica bom funcionamento do ciclo do nitrogênio.',
    action: 'Não é necessário ajuste. Valores próximos de zero são ideais e indicam água saudável.',
  },
  alkalinity: {
    problem: 'Alcalinidade baixa. Reduz a capacidade tamponante da água, permitindo variações bruscas de pH que estressam os peixes.',
    action: 'Aplique calcário agrícola (carbonato de cálcio) ou bicarbonato de sódio para elevar a alcalinidade acima de 30 mg/L.',
  },
  hardness: {
    problem: 'Dureza baixa. Reduz a disponibilidade de cálcio e magnésio essenciais para a osmorregulação e formação óssea dos peixes.',
    action: 'Aplique calcário agrícola ou gesso para aumentar a dureza da água.',
  },
  transparency: {
    problem: 'Água com baixa transparência (turva). Indica excesso de fitoplâncton ou matéria em suspensão, o que pode causar flutuações de oxigênio.',
    action: 'Faça renovação parcial da água. Reduza a adubação. Aumente a aeração noturna para compensar o consumo de oxigênio pelo fitoplâncton.',
  },
  salinity: {
    problem: 'Salinidade abaixo do ideal para a espécie. Causa estresse osmorregulatório em espécies marinhas ou estuarinas.',
    action: 'Adicione sal marinho ou água salgada gradualmente até atingir a faixa ideal para a espécie cultivada.',
  },
};

export function getParamGuidance(paramKey: string, direction: 'high' | 'low'): ParamGuidance {
  if (direction === 'high') return guidanceHigh[paramKey] ?? { problem: '', action: '' };
  return guidanceLow[paramKey] ?? { problem: '', action: '' };
}
