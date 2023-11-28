import type { JobLevel, Proficiency, ShortUuid } from '@models';

export type JobOid = ShortUuid;

export type JobCategoryOid = ShortUuid;

export type JobLevels = Record<Proficiency, JobLevel>;

export {};
