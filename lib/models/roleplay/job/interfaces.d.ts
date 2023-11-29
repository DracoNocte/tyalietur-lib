import type { Assets, JobCategoryOid, JobLevels, JobOid } from '../..';
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
export {};
