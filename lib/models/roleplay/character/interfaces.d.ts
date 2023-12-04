import type { ISO8601Date } from '../../common';
import type { Assets } from '../asset';
import type { MemberOid } from '../member';
import type { PeopleOid } from '../people';
import type { CharacterType, Gender, SocialRank } from './enums';
import type { CharacterOid } from './types';
export interface Character {
    _id: CharacterOid;
    type: CharacterType;
    names: CharacterNames;
    description: string;
    gender: Gender | null;
    ethnicity: PeopleOid;
    socialRank: SocialRank;
    assets: Assets | null;
    creatorId: MemberOid;
    ownerId: MemberOid | null;
    createdAt: ISO8601Date;
    updatedAt: ISO8601Date;
}
export interface CharacterNames {
    /** Nom usuel d'une personne. */
    firstname: string;
    /** Nom de famille d'un Hobbit ou issu d'une lignée noble ou bourgeoise. */
    lastname?: string;
    /** Nom de naissance donné par le père chez les Ñoldor (*essë*). */
    fathername?: string;
    /** Nom donné par la mère une fois que l'enfant a grandi chez les Ñoldor (*amilessë*). */
    mothername?: string;
    /** Nom choisi par un Ñoldo pour se désigner lui-même et reflétant ses capacités linguistiques (*cilmessë*). */
    chosenname?: string;
    /** Nom donné en gage d'honneur et d'admiration (*epessë*). */
    aftername?: string;
}
export {};
