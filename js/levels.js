var levels = [
  {
    name: 'Justify-content: flex-end',
    instructions: {
      'es': '<p>¡Estas ranas necesitan justificarse horizontalmente!</p>',
      'en': '<p>These frogs need horizontal justification!</p>'
    },
    board: 'gyr',
    style: { 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Justify-content: center',
    instructions: {
      'es': '<p>Usa justify-content para ayudar a estas ranas.</p>',
      'en': '<p>Use justify-content to help these frogs.</p>'
    },
    board: 'gyrg',
    style: { 'justify-content': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Justify-content: space-between',
    instructions: {
      'es': '<p>¡Más práctica con justify-content!</p>',
      'en': '<p>More practice with justify-content!</p>'
    },
    board: 'gygy',
    style: { 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Align-items: flex-end',
    instructions: {
      'es': '<p>Esta vez necesitarás align-items.</p>',
      'en': '<p>This time youll need align-items.</p>'
    },
    board: 'gyr',
    style: { 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Combinación: centro perfecto',
    instructions: {
      'es': '<p>¡Combina justify-content y align-items!</p>',
      'en': '<p>Combine justify-content and align-items!</p>'
    },
    board: 'gyrg',
    style: { 'justify-content': 'center', 'align-items': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Flex-direction: fila invertida',
    instructions: {
      'es': '<p>Prueba usando flex-direction.</p>',
      'en': '<p>Try using flex-direction.</p>'
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Flex-direction: columna espaciada',
    instructions: {
      'es': '<p>Necesitarás flex-direction y justify-content juntos.</p>',
      'en': '<p>Youll need both flex-direction and justify-content.</p>'
    },
    board: 'gyry',
    style: { 'flex-direction': 'column', 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];
