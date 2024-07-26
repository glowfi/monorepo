import type { AppRouter } from '@monorepo/trpc-server/routers';
import { createTRPCReact } from '@trpc/react-query';

export const trpcClient = createTRPCReact<AppRouter>();
