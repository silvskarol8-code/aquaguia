export interface FoodTableRow {
  phase: string;
  weightRange: string;
  minWeight: number; // grams
  maxWeight: number; // grams
  feedType: string;
  granulometry: string;
  protein: string;
  feedRate: string; // % of biomass
  feedRateValue: number;
  frequency: string;
  schedule: string;
  notes: string;
}

export interface FoodTable {
  speciesId: string;
  source: string;
  rows: FoodTableRow[];
}

export const foodTables: FoodTable[] = [
  {
    speciesId: 'tambaqui',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do tambaqui.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–30 g', minWeight: 0, maxWeight: 30, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40–45%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase de crescimento inicial. Fornecer em estações de alimentação.' },
      { phase: 'Recria I', weightRange: '30–300 g', minWeight: 30, maxWeight: 300, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '32–36%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Fase de crescimento intermediário. Ajustar conforme consumo.' },
      { phase: 'Recria II', weightRange: '300–800 g', minWeight: 300, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento acelerado. Monitorar oxigênio da água.' },
      { phase: 'Engorda', weightRange: '800–2.500 g', minWeight: 800, maxWeight: 2500, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Reduzir taxa em dias nublados ou frios.' },
    ],
  },
  {
    speciesId: 'tilapia',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar da tilápia-do-nilo.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–5 g', minWeight: 0, maxWeight: 5, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40–45%', feedRate: '10–12%', feedRateValue: 11, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase de crescimento inicial. Fornecer em estações.' },
      { phase: 'Recria I', weightRange: '5–50 g', minWeight: 5, maxWeight: 50, feedType: 'Ração peletizada', granulometry: 'Peletizada (1–2 mm)', protein: '36–40%', feedRate: '5–7%', feedRateValue: 6, frequency: '4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento rápido. Ajustar conforme temperatura.' },
      { phase: 'Recria II', weightRange: '50–300 g', minWeight: 50, maxWeight: 300, feedType: 'Ração extrusada', granulometry: 'Extrusada (2–4 mm)', protein: '32–36%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '3x/dia', schedule: '9h, 13h, 17h', notes: 'Fase intermediária. Monitorar consumo.' },
      { phase: 'Engorda', weightRange: '300–800 g', minWeight: 300, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2–3x/dia', schedule: '9h, 16h', notes: 'Fase final. Reduzir taxa em temperaturas abaixo de 22°C.' },
    ],
  },
  {
    speciesId: 'tambacu',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do híbrido tambacu.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–30 g', minWeight: 0, maxWeight: 30, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Híbrido com crescimento rápido desde a fase inicial.' },
      { phase: 'Recria I', weightRange: '30–300 g', minWeight: 30, maxWeight: 300, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '32–36%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário. Ajustar conforme consumo.' },
      { phase: 'Recria II', weightRange: '300–800 g', minWeight: 300, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento acelerado.' },
      { phase: 'Engorda', weightRange: '800–2.500 g', minWeight: 800, maxWeight: 2500, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Reduzir em dias frios.' },
    ],
  },
  {
    speciesId: 'tambatinga',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do híbrido tambatinga.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–30 g', minWeight: 0, maxWeight: 30, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Híbrido com manejo semelhante ao tambacu.' },
      { phase: 'Recria I', weightRange: '30–300 g', minWeight: 30, maxWeight: 300, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '32–36%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '300–800 g', minWeight: 300, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento acelerado.' },
      { phase: 'Engorda', weightRange: '800–2.500 g', minWeight: 800, maxWeight: 2500, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final.' },
    ],
  },
  {
    speciesId: 'pacu',
    source: 'Embrapa Pantanal. Tabela alimentar do pacu.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–30 g', minWeight: 0, maxWeight: 30, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase inicial. Crescimento mais lento que o tambaqui.' },
      { phase: 'Recria I', weightRange: '30–250 g', minWeight: 30, maxWeight: 250, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '32–36%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '250–700 g', minWeight: 250, maxWeight: 700, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Aceita frutas e capim como complemento.' },
      { phase: 'Engorda', weightRange: '700–2.000 g', minWeight: 700, maxWeight: 2000, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Reduzir em dias frios.' },
    ],
  },
  {
    speciesId: 'pirarucu',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do pirarucu.',
    rows: [
      { phase: 'Alevinagem', weightRange: '10–100 g', minWeight: 0, maxWeight: 100, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–4 mm)', protein: '45–50%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase inicial. Carnívoro — exige alta proteína.' },
      { phase: 'Recria I', weightRange: '100–1.000 g', minWeight: 100, maxWeight: 1000, feedType: 'Ração peletizada', granulometry: 'Peletizada (4–6 mm)', protein: '45%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento acelerado. Pode receber peixe moído.' },
      { phase: 'Recria II', weightRange: '1–4 kg', minWeight: 1000, maxWeight: 4000, feedType: 'Ração extrusada', granulometry: 'Extrusada (8–12 mm)', protein: '40–45%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento contínuo. Ração de grande granulometria.' },
      { phase: 'Engorda', weightRange: '4–12 kg', minWeight: 4000, maxWeight: 12000, feedType: 'Ração extrusada', granulometry: 'Extrusada (12–16 mm)', protein: '40%', feedRate: '1–2%', feedRateValue: 1.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Peixes grandes exigem ração de grande granulometria.' },
    ],
  },
  {
    speciesId: 'pintado',
    source: 'Embrapa Pantanal. Tabela alimentar do pintado.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–20 g', minWeight: 0, maxWeight: 20, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '45–50%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Carnívoro. Pode receber peixe moído.' },
      { phase: 'Recria I', weightRange: '20–200 g', minWeight: 20, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '45%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '200–800 g', minWeight: 200, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '40–45%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '800–3.000 g', minWeight: 800, maxWeight: 3000, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '40%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Carnívoro — manter alta proteína.' },
    ],
  },
  {
    speciesId: 'cachara',
    source: 'Embrapa Pantanal. Tabela alimentar da cachara.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–20 g', minWeight: 0, maxWeight: 20, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '45–50%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Carnívora. Manejo semelhante ao pintado.' },
      { phase: 'Recria I', weightRange: '20–200 g', minWeight: 20, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '45%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '200–800 g', minWeight: 200, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '40–45%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '800–3.000 g', minWeight: 800, maxWeight: 3000, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '40%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final.' },
    ],
  },
  {
    speciesId: 'jundia',
    source: 'Epagri. Tabela alimentar do jundiá.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–10 g', minWeight: 0, maxWeight: 10, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40–45%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase inicial.' },
      { phase: 'Recria I', weightRange: '10–100 g', minWeight: 10, maxWeight: 100, feedType: 'Ração peletizada', granulometry: 'Peletizada (1–2 mm)', protein: '36–40%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '100–500 g', minWeight: 100, maxWeight: 500, feedType: 'Ração extrusada', granulometry: 'Extrusada (3–4 mm)', protein: '32–36%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '500–1.200 g', minWeight: 500, maxWeight: 1200, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '32%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Tolera temperaturas mais baixas.' },
    ],
  },
  {
    speciesId: 'matrinxa',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar da matrinxã.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–20 g', minWeight: 0, maxWeight: 20, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40–45%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Fase inicial.' },
      { phase: 'Recria I', weightRange: '20–200 g', minWeight: 20, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '36–40%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '200–700 g', minWeight: 200, maxWeight: 700, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–5 mm)', protein: '30–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '700–1.500 g', minWeight: 700, maxWeight: 1500, feedType: 'Ração extrusada', granulometry: 'Extrusada (5–6 mm)', protein: '30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final.' },
    ],
  },
  {
    speciesId: 'curimata',
    source: 'Embrapa Pantanal. Tabela alimentar da curimatã.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–15 g', minWeight: 0, maxWeight: 15, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '32–36%', feedRate: '6–8%', feedRateValue: 7, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Iliófaga. Aceita ração de menor proteína.' },
      { phase: 'Recria', weightRange: '15–300 g', minWeight: 15, maxWeight: 300, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '28–30%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado. Consome detritos do fundo.' },
      { phase: 'Engorda', weightRange: '300–1.000 g', minWeight: 300, maxWeight: 1000, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '24–28%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Baixa proteína.' },
    ],
  },
  {
    speciesId: 'pirapitinga',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar da pirapitinga.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–30 g', minWeight: 0, maxWeight: 30, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '40%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Manejo semelhante ao tambaqui.' },
      { phase: 'Recria I', weightRange: '30–300 g', minWeight: 30, maxWeight: 300, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '32–36%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '300–800 g', minWeight: 300, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento acelerado.' },
      { phase: 'Engorda', weightRange: '800–2.000 g', minWeight: 800, maxWeight: 2000, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final.' },
    ],
  },
  {
    speciesId: 'piau',
    source: 'Embrapa. Tabela alimentar do piau.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–15 g', minWeight: 0, maxWeight: 15, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '36–40%', feedRate: '6–8%', feedRateValue: 7, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Fase inicial.' },
      { phase: 'Recria', weightRange: '15–200 g', minWeight: 15, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '30–32%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '200–800 g', minWeight: 200, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '28–30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final.' },
    ],
  },
  {
    speciesId: 'traira',
    source: 'Embrapa. Tabela alimentar da traíra.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–20 g', minWeight: 0, maxWeight: 20, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '45%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Carnívora. Pode receber peixe moído.' },
      { phase: 'Recria', weightRange: '20–200 g', minWeight: 20, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '40–45%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '200–800 g', minWeight: 200, maxWeight: 800, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '40%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Carnívora — manter alta proteína.' },
    ],
  },
  {
    speciesId: 'robalo',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do robalo.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–20 g', minWeight: 0, maxWeight: 20, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '50%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Carnívoro marinho. Exige alta proteína.' },
      { phase: 'Recria I', weightRange: '20–200 g', minWeight: 20, maxWeight: 200, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '45–50%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento intermediário.' },
      { phase: 'Recria II', weightRange: '200–600 g', minWeight: 200, maxWeight: 600, feedType: 'Ração extrusada', granulometry: 'Extrusada (4–6 mm)', protein: '42–45%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '600–1.500 g', minWeight: 600, maxWeight: 1500, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '42%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Carnívoro — manter alta proteína.' },
    ],
  },
  {
    speciesId: 'bijupira',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do bijupirá.',
    rows: [
      { phase: 'Alevinagem', weightRange: '1–50 g', minWeight: 0, maxWeight: 50, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5–1 mm)', protein: '50–55%', feedRate: '8–10%', feedRateValue: 9, frequency: '4–6x/dia', schedule: '8h, 11h, 14h, 17h, 20h', notes: 'Carnívoro marinho. Crescimento muito rápido.' },
      { phase: 'Recria I', weightRange: '50–500 g', minWeight: 50, maxWeight: 500, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–4 mm)', protein: '45–50%', feedRate: '4–5%', feedRateValue: 4.5, frequency: '3–4x/dia', schedule: '8h, 12h, 16h, 20h', notes: 'Crescimento acelerado.' },
      { phase: 'Recria II', weightRange: '500–2.000 g', minWeight: 500, maxWeight: 2000, feedType: 'Ração extrusada', granulometry: 'Extrusada (6–8 mm)', protein: '42–45%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Crescimento contínuo.' },
      { phase: 'Engorda', weightRange: '2–6 kg', minWeight: 2000, maxWeight: 6000, feedType: 'Ração extrusada', granulometry: 'Extrusada (8–12 mm)', protein: '42%', feedRate: '1,5–2,5%', feedRateValue: 2, frequency: '2x/dia', schedule: '9h, 16h', notes: 'Fase final. Crescimento rápido até 6 kg.' },
    ],
  },
  {
    speciesId: 'camarao-marinho',
    source: 'ABCC / Embrapa. Tabela alimentar do camarão marinho.',
    rows: [
      { phase: 'Berçário', weightRange: '0,01–1 g', minWeight: 0, maxWeight: 1, feedType: 'Ração farelada', granulometry: 'Farelada (0,5–1,5 mm)', protein: '40–45%', feedRate: '10–15%', feedRateValue: 12, frequency: '4–6x/dia', schedule: '6h, 10h, 14h, 18h, 22h', notes: 'Fase inicial. Fornecer em bandejas.' },
      { phase: 'Recria I', weightRange: '1–5 g', minWeight: 1, maxWeight: 5, feedType: 'Ração peletizada', granulometry: 'Peletizada (1,5–2 mm)', protein: '35–40%', feedRate: '5–7%', feedRateValue: 6, frequency: '3–4x/dia', schedule: '7h, 12h, 17h, 22h', notes: 'Crescimento rápido.' },
      { phase: 'Recria II', weightRange: '5–12 g', minWeight: 5, maxWeight: 12, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '30–35%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '7h, 13h, 19h', notes: 'Crescimento intermediário.' },
      { phase: 'Engorda', weightRange: '12–20 g', minWeight: 12, maxWeight: 20, feedType: 'Ração peletizada', granulometry: 'Peletizada (3–4 mm)', protein: '30%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '2x/dia', schedule: '8h, 17h', notes: 'Fase final. Ciclo de 3–4 meses.' },
    ],
  },
  {
    speciesId: 'camarao-amazonia',
    source: 'Embrapa Pesca e Aquicultura. Tabela alimentar do camarão-da-amazônia.',
    rows: [
      { phase: 'Berçário', weightRange: '0,01–0,5 g', minWeight: 0, maxWeight: 0.5, feedType: 'Ração farelada', granulometry: 'Farelada (0,5–1 mm)', protein: '35–40%', feedRate: '10–15%', feedRateValue: 12, frequency: '4–6x/dia', schedule: '6h, 10h, 14h, 18h, 22h', notes: 'Fase inicial.' },
      { phase: 'Recria', weightRange: '0,5–5 g', minWeight: 0.5, maxWeight: 5, feedType: 'Ração peletizada', granulometry: 'Peletizada (1–2 mm)', protein: '30–35%', feedRate: '5–7%', feedRateValue: 6, frequency: '3–4x/dia', schedule: '7h, 12h, 17h, 22h', notes: 'Crescimento moderado.' },
      { phase: 'Engorda', weightRange: '5–12 g', minWeight: 5, maxWeight: 12, feedType: 'Ração peletizada', granulometry: 'Peletizada (2–3 mm)', protein: '30%', feedRate: '3–4%', feedRateValue: 3.5, frequency: '2–3x/dia', schedule: '8h, 14h, 19h', notes: 'Fase final. Ciclo de 4–6 meses.' },
    ],
  },
  {
    speciesId: 'ostra',
    source: 'Embrapa / Epagri. Manejo da ostreicultura.',
    rows: [
      { phase: 'Semente', weightRange: '0,5–5 g', minWeight: 0, maxWeight: 5, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Filtra fitoplâncton da água. Não recebe ração.' },
      { phase: 'Recria', weightRange: '5–30 g', minWeight: 5, maxWeight: 30, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Crescimento por filtração. Limpar cestas.' },
      { phase: 'Engorda', weightRange: '30–80 g', minWeight: 30, maxWeight: 80, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Fase final. Pronta para colheita em 8–12 meses.' },
    ],
  },
  {
    speciesId: 'mexilhao',
    source: 'Epagri. Manejo da mitilicultura.',
    rows: [
      { phase: 'Semente', weightRange: '0,5–3 g', minWeight: 0, maxWeight: 3, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Filtra fitoplâncton. Não recebe ração.' },
      { phase: 'Recria', weightRange: '3–15 g', minWeight: 3, maxWeight: 15, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Crescimento por filtração.' },
      { phase: 'Engorda', weightRange: '15–40 g', minWeight: 15, maxWeight: 40, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Fase final. Pronto em 6–10 meses.' },
    ],
  },
  {
    speciesId: 'vieira',
    source: 'Embrapa Pesca e Aquicultura. Manejo da vieira.',
    rows: [
      { phase: 'Semente', weightRange: '0,5–5 g', minWeight: 0, maxWeight: 5, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Filtra fitoplâncton. Não recebe ração.' },
      { phase: 'Recria', weightRange: '5–30 g', minWeight: 5, maxWeight: 30, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Crescimento por filtração.' },
      { phase: 'Engorda', weightRange: '30–80 g', minWeight: 30, maxWeight: 80, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Fase final. Pronta em 12–18 meses.' },
    ],
  },
  {
    speciesId: 'ra-touro',
    source: 'Embrapa. Tabela alimentar da rã-touro.',
    rows: [
      { phase: 'Girino', weightRange: '0,1–2 g', minWeight: 0, maxWeight: 2, feedType: 'Ração farelada', granulometry: 'Farelada fina (0,5 mm)', protein: '35–40%', feedRate: '5–8%', feedRateValue: 6.5, frequency: '2–3x/dia', schedule: '9h, 13h, 17h', notes: 'Fase aquática. Fornecer na superfície da água.' },
      { phase: 'Imaturo', weightRange: '2–50 g', minWeight: 2, maxWeight: 50, feedType: 'Ração peletizada', granulometry: 'Peletizada (1–2 mm)', protein: '35–40%', feedRate: '3–5%', feedRateValue: 4, frequency: '2x/dia', schedule: '9h, 17h', notes: 'Após metamorfose. Carnívora.' },
      { phase: 'Engorda', weightRange: '50–250 g', minWeight: 50, maxWeight: 250, feedType: 'Ração peletizada', granulometry: 'Peletizada (3–4 mm)', protein: '35%', feedRate: '2–3%', feedRateValue: 2.5, frequency: '1–2x/dia', schedule: '9h, 17h', notes: 'Fase final. Pode receber insetos e minhocas.' },
    ],
  },
  {
    speciesId: 'kappaphycus',
    source: 'Embrapa Pesca e Aquicultura. Manejo de macroalgas.',
    rows: [
      { phase: 'Plantio', weightRange: '50–200 g', minWeight: 0, maxWeight: 200, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Macroalga. Cresce por fotossíntese. Não recebe ração.' },
      { phase: 'Crescimento', weightRange: '200–1.000 g', minWeight: 200, maxWeight: 1000, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Crescimento em 45–60 dias. Limpar epífitas.' },
      { phase: 'Colheita', weightRange: '500–1.000 g', minWeight: 500, maxWeight: 1000, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Colheita a cada 45–60 dias.' },
    ],
  },
  {
    speciesId: 'gracilaria',
    source: 'Embrapa Pesca e Aquicultura. Manejo de Gracilaria.',
    rows: [
      { phase: 'Plantio', weightRange: '50–150 g', minWeight: 0, maxWeight: 150, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Macroalga. Cresce por fotossíntese. Não recebe ração.' },
      { phase: 'Crescimento', weightRange: '150–600 g', minWeight: 150, maxWeight: 600, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Crescimento em 45–60 dias.' },
      { phase: 'Colheita', weightRange: '300–600 g', minWeight: 300, maxWeight: 600, feedType: 'Não se aplica', granulometry: '—', protein: '—', feedRate: '—', feedRateValue: 0, frequency: '—', schedule: '—', notes: 'Colheita a cada 45–60 dias.' },
    ],
  },
];

export function getFoodTable(speciesId: string): FoodTable | undefined {
  return foodTables.find((t) => t.speciesId === speciesId);
}

export function detectPhase(
  weightGrams: number,
  rows: FoodTableRow[],
): FoodTableRow | undefined {
  return rows.find((r) => weightGrams >= r.minWeight && weightGrams < r.maxWeight)
    || rows.find((r) => weightGrams >= r.maxWeight && r === rows[rows.length - 1])
    || rows[rows.length - 1];
}
