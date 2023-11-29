import type { CharacterOid, ISO8601Date, MemberOid, MemberRoleOid } from '../..';
import type { Snowflake } from 'discord.js';
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
export {};
