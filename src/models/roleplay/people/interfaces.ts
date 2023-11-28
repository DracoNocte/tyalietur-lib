import type { LanguageOid, PeopleGroupOid, PeopleOid } from '@models';
import type { HexColorString } from 'discord.js';

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
  height: PeopleHeight;
  /** En années ; `-1` correspond à l'immortalité. */
  lifespan: number;
}

export interface PeopleColorScheme {
  primary: HexColorString;
  secondary: HexColorString;
  tertiary?: HexColorString;
}

export interface PeopleHeight {
  /** En centimètres. */
  min: number;
  /** En centimètres. */
  max: number;
  /** En centimètres. */
  avg: number;
}

export {};
