import * as zod from 'zod';

export const userDetailsValidator = zod.object({
    name: zod
        .string()
        .max(10)
        .min(1),
    lastName: zod
        .string()
        .max(50)
        .min(1)
});

export type IUserDetails = zod.infer<typeof userDetailsValidator>;
