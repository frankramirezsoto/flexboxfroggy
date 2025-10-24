var levels = [
  {
    name: 'Justify-content: flex-end',
    instructions: {
      'es': '<p>¡Bienvenido! Usa <code>justify-content</code> para mover a las ranas hacia la derecha. Escribe <code>flex-end</code> para alinear las hojas en ese extremo.</p>',
      'en': '<p>¡Bienvenido! Usa <code>justify-content</code> para mover a las ranas hacia la derecha. Escribe <code>flex-end</code> para alinear las hojas en ese extremo.</p>'
    },
    board: 'gyr',
    style: { 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Justify-content: center',
    instructions: {
      'es': '<p>Centra a las ranas usando <code>justify-content</code>. El valor <code>center</code> las ubicará justo en el medio del estanque.</p>',
      'en': '<p>Centra a las ranas usando <code>justify-content</code>. El valor <code>center</code> las ubicará justo en el medio del estanque.</p>'
    },
    board: 'gyrg',
    style: { 'justify-content': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Justify-content: space-between',
    instructions: {
      'es': '<p>Necesitamos hojas equidistantes. Con <code>justify-content</code> y el valor <code>space-between</code> lograrás que la primera rana quede a la izquierda y la última a la derecha.</p>',
      'en': '<p>Necesitamos hojas equidistantes. Con <code>justify-content</code> y el valor <code>space-between</code> lograrás que la primera rana quede a la izquierda y la última a la derecha.</p>'
    },
    board: 'gygy',
    style: { 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Align-items: flex-end',
    instructions: {
      'es': '<p>Ahora ajusta el eje vertical. Usa <code>align-items</code> con el valor <code>flex-end</code> para que las ranas descansen en la parte inferior.</p>',
      'en': '<p>Ahora ajusta el eje vertical. Usa <code>align-items</code> con el valor <code>flex-end</code> para que las ranas descansen en la parte inferior.</p>'
    },
    board: 'gyr',
    style: { 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Combinación: centro perfecto',
    instructions: {
      'es': '<p>Queremos que todas las ranas queden juntas en el centro. Combina <code>justify-content</code> con <code>align-items</code> para alinearlas en ambos ejes usando el valor <code>center</code>.</p>',
      'en': '<p>Queremos que todas las ranas queden juntas en el centro. Combina <code>justify-content</code> con <code>align-items</code> para alinearlas en ambos ejes usando el valor <code>center</code>.</p>'
    },
    board: 'gyrg',
    style: { 'justify-content': 'center', 'align-items': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Flex-direction: fila invertida',
    instructions: {
      'es': '<p>Las hojas quedaron invertidas. Usa <code>flex-direction</code> con <code>row-reverse</code> para cambiar el orden de las ranas.</p>',
      'en': '<p>Las hojas quedaron invertidas. Usa <code>flex-direction</code> con <code>row-reverse</code> para cambiar el orden de las ranas.</p>'
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'Flex-direction: columna espaciada',
    instructions: {
      'es': '<p>Último reto: organiza las ranas en una columna con espacio uniforme. Combina <code>flex-direction</code> con el valor <code>column</code> y <code>justify-content</code> con <code>space-between</code>.</p>',
      'en': '<p>Último reto: organiza las ranas en una columna con espacio uniforme. Combina <code>flex-direction</code> con el valor <code>column</code> y <code>justify-content</code> con <code>space-between</code>.</p>'
    },
    board: 'gyry',
    style: { 'flex-direction': 'column', 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];
