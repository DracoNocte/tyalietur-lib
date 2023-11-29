import type { HexColorString } from 'discord.js';
import type { LanguageOid } from '../language';
import type { PeopleOid, PeopleGroupOid } from './types';

export interface People {
  _id: PeopleOid;
  name: string;
  alternateNames: string[] | null;
  group: PeopleGroupOid;
  colorScheme: PeopleColorScheme;
  baseLanguages: LanguageOid[] | null;
  height: number;
  isAlive: boolean;
  isPlayable: boolean;
}

export interface PeopleGroup {
  _id: PeopleGroupOid;
  name: string;
  height: PeopleGroupHeight;
  /** En années ; `-1` correspond à l'immortalité. */
  lifespan: number;
}

export interface PeopleColorScheme {
  primary: HexColorString;
  secondary: HexColorString;
  tertiary?: HexColorString;
}

export interface PeopleGroupHeight {
  /** En centimètres. */
  min: number;
  /** En centimètres. */
  max: number;
  /** En centimètres. */
  avg: number;
}
