export const territorioFogoFronteirasData = {
  name: 'Fronteiras',
  isPostable: false,
  places: {
    createMany: {
      data: [
        {
          name: 'Fronteiras com o Mar Fukai',
          isPostable: true,
        },
        {
          name: 'Fronteiras com o Mar Naka',
          isPostable: true,
        },
      ],
    },
  },
}

export const territorioFogoArredoresData = {
  name: 'Arredores',
  isPostable: false,
  places: {
    createMany: {
      data: [
        {
          name: 'Akagahara',
          isPostable: true,
        },
        {
          name: 'Campos',
          isPostable: true,
        },
      ],
    },
  },
}

export const territorioFogoLocalidadesData = {
  name: 'Localidades',
  isPostable: false,
  places: {
    createMany: {
      data: [
        {
          name: 'Casa de Repouso',
          isPostable: true,
        },
        {
          name: 'Cidade Tanzaku',
          isPostable: true,
        },
      ],
    },
  },
}
