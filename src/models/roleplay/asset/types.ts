import type { Asset } from '@models';

export type Assets = Partial<Record<Asset | string, number>>;

export {};
