import { ArdaDateTime, ArdaDateResolvable, ArdaDateAgeFormat } from '../../models/roleplay/arda-date';
export declare class ArdaDate {
    #private;
    /** Si l'âge de la date est antérieur au réveil des Hommes i.e. avant le 1A. */
    get isEarlyAge(): boolean;
    constructor(time: ArdaDateResolvable);
    setTime(time: ArdaDateResolvable): void;
    getTime(): ArdaDateTime;
    toYear(): number;
    toAge(ageFormat?: ArdaDateAgeFormat): "Troisième Âge" | "Deuxième Âge" | "Premier Âge" | "Années des Arbres" | "Années des Lampes" | "Années de la Création" | "3ème Âge" | "2ème Âge" | "1er Âge" | "Âge des Arbres" | "Âge des Lampes" | "Âge de la Création" | "T.A." | "S.A." | "P.A." | "A.A." | "A.L." | "A.C." | "3.A." | "2.A." | "1.A." | "TA" | "SA" | "PA" | "AA" | "AL" | "AC" | "3A" | "2A" | "1A";
    toString(ageFormat?: ArdaDateAgeFormat): string;
    hasError(): boolean;
}
