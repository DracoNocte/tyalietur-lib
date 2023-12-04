import type { Asset } from './enums';
export type Assets = Partial<Record<Asset | string, number>>;
