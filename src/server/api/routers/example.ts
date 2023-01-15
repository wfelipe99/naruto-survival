import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    }
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.country.findUniqueOrThrow({
      where: { name: 'País do Fogo' },
      include: {
        villages: { include: { places: { include: { places: true } } } },
        territories: { include: { places: { include: { places: true } } } },
      },
    })
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
