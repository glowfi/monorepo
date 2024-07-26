import type { AppRouter } from '@monorepo/trpc-server/routers';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import 'dotenv/config';

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:8080/trpc'
        })
    ]
});
