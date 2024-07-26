'use client';
import { trpcClient } from '@monorepo/trpc-client/src/client';
import { trpc } from '@monorepo/trpc-client/src';
import React from 'react';

const Page = () => {
    const res = trpcClient.auth.getallusers.useQuery();
    // const res = await trpc.auth.getallusers.query();

    return <div>{JSON.stringify(res.data)}</div>;
};

export default Page;
