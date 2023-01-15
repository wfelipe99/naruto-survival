import { PrismaClient } from '@prisma/client'
import {
  territorioFogoArredoresData,
  territorioFogoFronteirasData,
  territorioFogoLocalidadesData,
} from './seed/PaisFogo/territorioFogoPlaces'
import {
  vilaFolhaAdministrativosData,
  vilaFolhaAtendimentoData,
  vilaFolhaExtremidadesData,
} from './seed/PaisFogo/vilaFolhaPlaces'

const prisma = new PrismaClient()

async function main() {
  const paisFogo = await prisma.country.create({
    data: {
      name: 'País do Fogo',
      description:
        'O País do Fogo (火の国, Hi no Kuni) é um dos maiores e mais poderosos países no mundo ninja. Seu líder governamental é o Daimyō do Fogo. O País do Fogo foi o primeiro país a adotar uma aldeia ninja, a Vila Oculta da Folha (木ノ葉隠れの里, Konohagakure no Sato), um costume que logo depois outros países vieram a adotar. Este país é apropriadamente orientado para o elemento fogo, normalmente tendo um clima muito ensolarado e quente. Embora não seja o maior país fisicamente, tem a maior aldeia oculta.',
      population: 5,
      militia: 3,
      economy: 3,
    },
  })

  const vilaFolhaExtremidades = await prisma.place.create({ data: vilaFolhaExtremidadesData })
  const vilaFolhaAdministrativos = await prisma.place.create({ data: vilaFolhaAdministrativosData })
  const vilaFolhaAtendimento = await prisma.place.create({ data: vilaFolhaAtendimentoData })

  const vilaFolha = await prisma.village.create({
    data: {
      name: 'Vila Oculta da Folha',
      country: { connect: { id: paisFogo.id } },
      places: {
        connect: [
          { id: vilaFolhaExtremidades.id },
          { id: vilaFolhaAdministrativos.id },
          { id: vilaFolhaAtendimento.id },
        ],
      },
    },
  })

  const territorioFogoFronteiras = await prisma.place.create({ data: territorioFogoFronteirasData })
  const territorioFogoArredores = await prisma.place.create({ data: territorioFogoArredoresData })
  const vilaFolhaLocalidades = await prisma.place.create({ data: territorioFogoLocalidadesData })

  const territorioFogo = await prisma.territory.create({
    data: {
      name: 'Território do Fogo',
      country: { connect: { id: paisFogo.id } },
      places: {
        connect: [
          { id: territorioFogoFronteiras.id },
          { id: territorioFogoArredores.id },
          { id: vilaFolhaLocalidades.id },
        ],
      },
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
