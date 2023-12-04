import type { ShortUuid } from '../../common';
import type { Proficiency } from '../meta';
import type { JobLevel } from './interfaces';
export type JobOid = ShortUuid;
export type JobCategoryOid = ShortUuid;
export type JobLevels = Record<Proficiency, JobLevel>;
