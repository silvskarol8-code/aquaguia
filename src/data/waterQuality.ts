export interface WaterParam {
  id: string;
  name: string;
  icon: string;
  ideal: string;
  color: string;
  what: string;
  why: string;
  how: string;
}

export const waterParams: WaterParam[] = [
  {
    id: 'temperature',
    name: 'Temperatura',
    icon: 'thermometer',
    ideal: '26–30°C',
    color: 'from-aqua-500 to-teal-600',
    what:
      'A temperatura da água afeta diretamente o metabolismo dos peixes. Peixes de água quente crescem mais rápido em temperaturas elevadas, enquanto peixes de água fria precisam de temperaturas baixas.',
    why: 'Temperaturas fora da faixa ideal causam estresse, reduzem o crescimento, diminuem a imunidade e podem levar à morte. Cada espécie tem sua faixa ideal.',
    how: 'Use um termômetro de aquicultura. Para aumentar a temperatura, use aquecedores ou cubra o viveiro. Para diminuir, aumente o fluxo de água, plante árvores ao redor ou use sombreamento.',
  },
  {
    id: 'ph',
    name: 'pH',
    icon: 'droplet',
    ideal: '6,5–8,5',
    color: 'from-deep-500 to-aqua-600',
    what:
      'O pH mede se a água está ácida, neutra ou básica. A escala vai de 0 a 14, sendo 7 neutro. Valores abaixo de 7 são ácidos e acima de 7 são básicos.',
    why: 'pH muito baixo (ácido) ou muito alto (básico) prejudica as brânquias dos peixes, reduz o crescimento e pode causar morte. Afeta também a toxicidade da amônia.',
    how: 'Use um kit de pH ou medidor digital. Para elevar o pH, use calcário agrícola. Para reduzir, troque parte da água ou use ácidos orgânicos. Meça sempre no mesmo horário.',
  },
  {
    id: 'oxygen',
    name: 'Oxigênio Dissolvido',
    icon: 'wind',
    ideal: '> 5 mg/L',
    color: 'from-aqua-400 to-deep-600',
    what:
      'O oxigênio dissolvido (OD) é a quantidade de oxigênio disponível na água para os peixes respirarem. É o parâmetro mais crítico para a sobrevivência.',
    why: 'Baixos níveis de oxigênio causam sufocação, reduzem o crescimento e aumentam a suscetibilidade a doenças. O amanhecer é o momento mais crítico, pois o OD é mais baixo.',
    how: 'Use um oxímetro. Para aumentar o OD, use aeradores, bombas de ar, cascatas ou fontes. Evite excesso de ração e matéria orgânica, que consomem oxigênio na decomposição.',
  },
  {
    id: 'ammonia',
    name: 'Amônia',
    icon: 'alert-triangle',
    ideal: '< 0,5 mg/L',
    color: 'from-accent-500 to-aqua-600',
    what:
      'A amônia é um composto tóxico resultante da decomposição de fezes, ração não consumida e matéria orgânica. Existe em duas formas: amônia tóxica (NH3) e amônio menos tóxico (NH4+).',
    why: 'Amônia alta queima as brânquias, reduz o crescimento, causa estresse e pode matar os peixes rapidamente. É mais tóxica em pH alto e temperatura elevada.',
    how: 'Use um kit de teste de amônia. Para reduzir: troque parte da água, pare a alimentação temporariamente, aumente a aeração e adicione bactérias nitrificantes. Evite superalimentação.',
  },
  {
    id: 'nitrite',
    name: 'Nitrito',
    icon: 'activity',
    ideal: '< 0,1 mg/L',
    color: 'from-accent-400 to-teal-500',
    what:
      'O nitrito é um produto intermediário da decomposição da amônia por bactérias. É tóxico e indica que o sistema de filtragem ainda não está completo.',
    why: 'Nitrito alto impede o transporte de oxigênio no sangue dos peixes (síndrome do sangue marrom), causando sufocação interna mesmo com oxigênio adequado na água.',
    how: 'Use um kit de teste. Para reduzir: troque parte da água, aumente a aeração, adicione sal (cloreto de sódio) que compete com o nitrito e evite superalimentação.',
  },
  {
    id: 'alkalinity',
    name: 'Alcalinidade',
    icon: 'shield',
    ideal: '20–150 mg/L',
    color: 'from-teal-500 to-teal-700',
    what:
      'A alcalinidade mede a capacidade da água de neutralizar ácidos, funcionando como um amortecedor de pH. É determinada principalmente por carbonatos e bicarbonatos.',
    why: 'Alcalinidade baixa causa variações bruscas de pH, que estressam os peixes. Alcalinidade adequada mantém o pH estável e favorece o crescimento do plâncton.',
    how: 'Use um kit de teste. Para aumentar, aplique calcário agrícola (carbonato de cálcio) ou bicarbonato de sódio. Meça mensalmente ou após chuvas fortes.',
  },
  {
    id: 'hardness',
    name: 'Dureza',
    icon: 'layers',
    ideal: '20–150 mg/L',
    color: 'from-aqua-600 to-teal-600',
    what:
      'A dureza mede a quantidade de minerais dissolvidos na água, principalmente cálcio e magnésio. Águas muito moles têm poucos minerais; águas duras têm muitos.',
    why: 'Cálcio e magnésio são essenciais para a formação de ossos e escamas. Dureza muito baixa prejudica o crescimento e a reprodução. Dureza muito alta pode reduzir a disponibilidade de outros nutrientes.',
    how: 'Use um kit de teste. Para aumentar, adicione calcário. Para reduzir, dilua com água mais mole. A maioria das espécies se adapta bem a dureza moderada.',
  },
  {
    id: 'transparency',
    name: 'Transparência',
    icon: 'eye',
    ideal: '30–60 cm',
    color: 'from-deep-400 to-aqua-500',
    what:
      'A transparência mede a clareza da água, indicada pelo disco de Secchi. Água muito transparente permite crescimento excessivo de plantas; água turva indica excesso de partículas.',
    why: 'Transparência adequada indica equilíbrio entre plâncton (alimento natural) e qualidade da água. Muito baixa pode indicar excesso de matéria orgânica; muito alta, falta de alimento natural.',
    how: 'Use um disco de Secchi. Para reduzir transparência (aumentar plâncton), adicione fertilizante ou farelo. Para aumentar, troque parte da água ou reduza a adubação.',
  },
];
