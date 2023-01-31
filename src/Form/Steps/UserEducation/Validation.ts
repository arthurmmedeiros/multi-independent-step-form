import * as zod from 'zod';

export const userEducationValidator = zod.object({
    school: zod
        .string()
        .max(50)
        .min(1),
    major: zod
        .string()
        .max(50)
        .min(1)
});

export type IUserEducation = zod.infer<typeof userEducationValidator>;
