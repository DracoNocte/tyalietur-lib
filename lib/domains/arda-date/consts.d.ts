import { ArdaDateAge } from '../../models/roleplay/arda-date';
/**
 * Expression régulière permettant d'avoir la date à partir d'une chaîne.
 * Le groupe `age<1-2>` permet d'avoir l'Âge, tandis que le groupe `year<1-2>` permet d'avoir l'année.
 * ```js
 * /^(?<age1>A\.?(?:C|L|A)\.?|[1-9]\.?A\.?)[\ \t\-\_\:]?(?<year1>\d+)|(?<year2>\d+)[\ \t\-\_\:](?<age2>A\.?(?:C|L|A)\.?|[1-9]\.?A\.?)$/
 * ```
 */
export declare const ARDA_DATE_STRING_PATTERN: RegExp;
/**
 * Durée d'une année des premiers âges (année "valienne" ou année de Valinor) en années récentes.
 * @const 9.582
 */
export declare const VALIAN_YEAR_DURATION: 9.582;
/**
 * Modificateur de base de la date en fonction de l'âge.
 * @desc Les valeurs doivent être déclarées dans l'ordre décroissant !
 */
export declare const ARDA_DATE_AGE_BASE_TIME: {
    readonly thirdAge: 291484;
    readonly secondAge: 288043;
    readonly firstAge: 287460;
    readonly yearsOfTheTrees: 95820;
    readonly yearsOfTheLamps: 47910;
    readonly daysBeforeDays: 0;
};
/**
 * Différents formats d'affichage pour l'âge de la date.
 */
export declare const ARDA_DATE_AGE_STRINGS: {
    readonly full: {
        readonly thirdAge: "Troisième Âge";
        readonly secondAge: "Deuxième Âge";
        readonly firstAge: "Premier Âge";
        readonly yearsOfTheTrees: "Années des Arbres";
        readonly yearsOfTheLamps: "Années des Lampes";
        readonly daysBeforeDays: "Années de la Création";
    };
    readonly short: {
        readonly thirdAge: "3ème Âge";
        readonly secondAge: "2ème Âge";
        readonly firstAge: "1er Âge";
        readonly yearsOfTheTrees: "Âge des Arbres";
        readonly yearsOfTheLamps: "Âge des Lampes";
        readonly daysBeforeDays: "Âge de la Création";
    };
    readonly dotted: {
        readonly thirdAge: "T.A.";
        readonly secondAge: "S.A.";
        readonly firstAge: "P.A.";
        readonly yearsOfTheTrees: "A.A.";
        readonly yearsOfTheLamps: "A.L.";
        readonly daysBeforeDays: "A.C.";
    };
    readonly "dotted-alternate": {
        readonly thirdAge: "3.A.";
        readonly secondAge: "2.A.";
        readonly firstAge: "1.A.";
        readonly yearsOfTheTrees: "A.A.";
        readonly yearsOfTheLamps: "A.L.";
        readonly daysBeforeDays: "A.C.";
    };
    readonly coded: {
        readonly thirdAge: "TA";
        readonly secondAge: "SA";
        readonly firstAge: "PA";
        readonly yearsOfTheTrees: "AA";
        readonly yearsOfTheLamps: "AL";
        readonly daysBeforeDays: "AC";
    };
    readonly "coded-alternate": {
        readonly thirdAge: "3A";
        readonly secondAge: "2A";
        readonly firstAge: "1A";
        readonly yearsOfTheTrees: "AA";
        readonly yearsOfTheLamps: "AL";
        readonly daysBeforeDays: "AC";
    };
};
export declare const ARDA_DATE_AGE_FROM_CODE: {
    readonly TA: ArdaDateAge.ThirdAge;
    readonly SA: ArdaDateAge.SecondAge;
    readonly PA: ArdaDateAge.FirstAge;
    readonly '3A': ArdaDateAge.ThirdAge;
    readonly '2A': ArdaDateAge.SecondAge;
    readonly '1A': ArdaDateAge.FirstAge;
    readonly AA: ArdaDateAge.YearsOfTheTrees;
    readonly AL: ArdaDateAge.YearsOfTheLamps;
    readonly AC: ArdaDateAge.DaysBeforeDays;
};
