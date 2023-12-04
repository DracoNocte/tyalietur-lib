import { ArdaDateAge, ArdaDateAgeCode, ArdaDateAgeFormat } from '@models/roleplay/arda-date';

/**
 * Expression régulière permettant d'avoir la date à partir d'une chaîne.
 * Le groupe `age<1-2>` permet d'avoir l'Âge, tandis que le groupe `year<1-2>` permet d'avoir l'année.
 * ```js
 * /^(?<age1>A\.?(?:C|L|A)\.?|[1-9]\.?A\.?)[\ \t\-\_\:]?(?<year1>\d+)|(?<year2>\d+)[\ \t\-\_\:](?<age2>A\.?(?:C|L|A)\.?|[1-9]\.?A\.?)$/
 * ```
 */
export const ARDA_DATE_STRING_PATTERN: RegExp =
  /^(?<age1>A\.?(?:[ACL])\.?|[1-9PST]\.?A\.?)[ \t\-_:]?(?<year1>\d+)|(?<year2>\d+)[ \t\-_:](?<age2>A\.?(?:[ACL])\.?|[1-9PST]\.?A\.?)$/i;

/**
 * Durée d'une année des premiers âges (année "valienne" ou année de Valinor) en années récentes.
 * @const 9.582
 */
export const VALIAN_YEAR_DURATION = 9.582 as const;

/**
 * Modificateur de base de la date en fonction de l'âge.
 * @desc Les valeurs doivent être déclarées dans l'ordre décroissant !
 */
export const ARDA_DATE_AGE_BASE_TIME = {
  [ArdaDateAge.ThirdAge]: 291484,
  [ArdaDateAge.SecondAge]: 288043,
  [ArdaDateAge.FirstAge]: 287460,
  [ArdaDateAge.YearsOfTheTrees]: 95820,
  [ArdaDateAge.YearsOfTheLamps]: 47910,
  [ArdaDateAge.DaysBeforeDays]: 0,
} as const satisfies Record<ArdaDateAge, number>;

/**
 * Différents formats d'affichage pour l'âge de la date.
 */
export const ARDA_DATE_AGE_STRINGS = {
  [ArdaDateAgeFormat.Full]: {
    [ArdaDateAge.ThirdAge]: 'Troisième Âge',
    [ArdaDateAge.SecondAge]: 'Deuxième Âge',
    [ArdaDateAge.FirstAge]: 'Premier Âge',
    [ArdaDateAge.YearsOfTheTrees]: 'Années des Arbres',
    [ArdaDateAge.YearsOfTheLamps]: 'Années des Lampes',
    [ArdaDateAge.DaysBeforeDays]: 'Années de la Création',
  },
  [ArdaDateAgeFormat.Short]: {
    [ArdaDateAge.ThirdAge]: '3ème Âge',
    [ArdaDateAge.SecondAge]: '2ème Âge',
    [ArdaDateAge.FirstAge]: '1er Âge',
    [ArdaDateAge.YearsOfTheTrees]: 'Âge des Arbres',
    [ArdaDateAge.YearsOfTheLamps]: 'Âge des Lampes',
    [ArdaDateAge.DaysBeforeDays]: 'Âge de la Création',
  },
  [ArdaDateAgeFormat.Dotted]: {
    [ArdaDateAge.ThirdAge]: 'T.A.',
    [ArdaDateAge.SecondAge]: 'S.A.',
    [ArdaDateAge.FirstAge]: 'P.A.',
    [ArdaDateAge.YearsOfTheTrees]: 'A.A.',
    [ArdaDateAge.YearsOfTheLamps]: 'A.L.',
    [ArdaDateAge.DaysBeforeDays]: 'A.C.',
  },
  [ArdaDateAgeFormat.DottedAlt]: {
    [ArdaDateAge.ThirdAge]: '3.A.',
    [ArdaDateAge.SecondAge]: '2.A.',
    [ArdaDateAge.FirstAge]: '1.A.',
    [ArdaDateAge.YearsOfTheTrees]: 'A.A.',
    [ArdaDateAge.YearsOfTheLamps]: 'A.L.',
    [ArdaDateAge.DaysBeforeDays]: 'A.C.',
  },
  [ArdaDateAgeFormat.Coded]: {
    [ArdaDateAge.ThirdAge]: 'TA',
    [ArdaDateAge.SecondAge]: 'SA',
    [ArdaDateAge.FirstAge]: 'PA',
    [ArdaDateAge.YearsOfTheTrees]: 'AA',
    [ArdaDateAge.YearsOfTheLamps]: 'AL',
    [ArdaDateAge.DaysBeforeDays]: 'AC',
  },
  [ArdaDateAgeFormat.CodedAlt]: {
    [ArdaDateAge.ThirdAge]: '3A',
    [ArdaDateAge.SecondAge]: '2A',
    [ArdaDateAge.FirstAge]: '1A',
    [ArdaDateAge.YearsOfTheTrees]: 'AA',
    [ArdaDateAge.YearsOfTheLamps]: 'AL',
    [ArdaDateAge.DaysBeforeDays]: 'AC',
  },
} as const satisfies Record<ArdaDateAgeFormat, Record<ArdaDateAge, string>>;

export const ARDA_DATE_AGE_FROM_CODE = {
  TA: ArdaDateAge.ThirdAge,
  SA: ArdaDateAge.SecondAge,
  PA: ArdaDateAge.FirstAge,
  '3A': ArdaDateAge.ThirdAge,
  '2A': ArdaDateAge.SecondAge,
  '1A': ArdaDateAge.FirstAge,
  AA: ArdaDateAge.YearsOfTheTrees,
  AL: ArdaDateAge.YearsOfTheLamps,
  AC: ArdaDateAge.DaysBeforeDays,
} as const satisfies Record<ArdaDateAgeCode, ArdaDateAge>;
