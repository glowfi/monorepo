import { publicProcedure, router } from '../trpc';
import { prisma } from '@monorepo/db';

export const authRoutes = router({
    getallusers: publicProcedure.query(() => {
        return prisma.user.findMany({});
    })
});
