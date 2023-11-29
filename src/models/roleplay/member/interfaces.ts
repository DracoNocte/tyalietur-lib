import type { ISO8601Date } from '@models/common';
import type { Snowflake } from 'discord.js';
import type { CharacterOid } from '../character';
import type { MemberOid, MemberRoleOid } from './types';

export interface Member {
  _id: MemberOid;
  discordIds: Snowflake[];
  pseudo: string;
  currentCharactersIds: CharacterOid[] | null;
  roles: MemberRoleOid[];
  isActive: boolean;
  joinedAt: ISO8601Date;
}

export interface MemberRole {
  _id: MemberRoleOid;
  discordId: Snowflake;
  name: string;
}
