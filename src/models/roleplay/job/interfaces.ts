import type { Assets } from '../asset';
import type { JobOid, JobCategoryOid, JobLevels } from './types';

export interface Job {
  _id: JobOid;
  name: string;
  alternateNames: string[] | null;
  categories: JobCategoryOid[] | null;
  levels: JobLevels;
}

export interface JobCategory {
  _id: JobCategoryOid;
  name: string;
}

export interface JobLevel {
  name: string;
  minimumIncome: Assets;
  maximumIncome: Assets;
}
