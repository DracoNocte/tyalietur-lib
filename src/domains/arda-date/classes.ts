import {
  ArdaDateTime,
  ArdaDateResolvable,
  ArdaDateAge,
  ArdaDateAgeFormat,
  ArdaDateAgeCode,
} from '@models/roleplay/arda-date';
import {
  ARDA_DATE_AGE_BASE_TIME,
  ARDA_DATE_AGE_FROM_CODE,
  ARDA_DATE_AGE_STRINGS,
  ARDA_DATE_STRING_PATTERN,
  VALIAN_YEAR_DURATION,
} from './consts';

export class ArdaDate {
  #time!: number;
  #age!: ArdaDateAge;
  #hasError = false;

  /** Si l'âge de la date est antérieur au réveil des Hommes i.e. avant le 1A. */
  get isEarlyAge(): boolean {
    return this.#time < ARDA_DATE_AGE_BASE_TIME[ArdaDateAge.FirstAge];
  }

  constructor(time: ArdaDateResolvable) {
    this.setTime(time);
  }

  setTime(time: ArdaDateResolvable) {
    switch (typeof time) {
      case 'number':
        this.#time = Math.max(0, time);
        break;
      case 'string':
        this.#time = time.match(/^\d+$/) ? parseInt(time) : this.#fetchTimeFromString(time);
        break;
      default:
        throw new Error('Invalid time resolvable');
    }
    for (const [age, ageTime] of Object.entries(ARDA_DATE_AGE_BASE_TIME)) {
      if (this.#time >= ageTime) {
        this.#age = age as ArdaDateAge;
        break;
        // Fonctionne car ARDA_DATE_AGE_BASE_TIME est triée par ordre décroissant.
      }
    }
  }

  getTime(): ArdaDateTime {
    return this.#time;
  }

  toYear(): number {
    return this.isEarlyAge
      ? Math.round((this.#time - ARDA_DATE_AGE_BASE_TIME[this.#age]) / VALIAN_YEAR_DURATION)
      : this.#time - ARDA_DATE_AGE_BASE_TIME[this.#age];
  }

  toAge(ageFormat: ArdaDateAgeFormat = ArdaDateAgeFormat.Coded) {
    return ARDA_DATE_AGE_STRINGS[ageFormat][this.#age];
  }

  toString(ageFormat: ArdaDateAgeFormat = ArdaDateAgeFormat.Coded): string {
    let ardaDateString: string;
    const isEarlyAge: boolean = this.isEarlyAge;
    const ageString = this.toAge(ageFormat);

    ardaDateString = `${this.toYear()}`;
    if (ageFormat === ArdaDateAgeFormat.Full) {
      return (ardaDateString += ` ${isEarlyAge ? 'des' : 'du'} ${ageString}`);
    }
    if (ageFormat === ArdaDateAgeFormat.Short) {
      return (ardaDateString += ` ${isEarlyAge ? "de l'" : 'du '}${ageString}`);
    }
    return (ardaDateString += ` ${ageString}`);
  }

  hasError(): boolean {
    return this.#hasError;
  }

  #fetchTimeFromString(timeString: string): ArdaDateTime {
    const dateString: RegExpMatchArray | null = timeString.match(ARDA_DATE_STRING_PATTERN);
    if (dateString && dateString.groups) {
      const ageCode: ArdaDateAgeCode = (dateString.groups.age1 || dateString.groups.age2).replaceAll(
        '.',
        ''
      ) as ArdaDateAgeCode;
      const age = ARDA_DATE_AGE_FROM_CODE[ageCode];
      const year = parseInt(dateString.groups.year1 || dateString.groups.year2);
      this.#hasError = false;
      return this.#calculateArdaTimeFromAgeAndYear(age, year);
    }
    this.#hasError = true;
    throw new Error('Invalid date string');
  }

  #calculateArdaTimeFromAgeAndYear(age: ArdaDateAge, year: number): ArdaDateTime {
    switch (age) {
      case ArdaDateAge.DaysBeforeDays:
      case ArdaDateAge.YearsOfTheLamps:
      case ArdaDateAge.YearsOfTheTrees:
        return year * VALIAN_YEAR_DURATION + ARDA_DATE_AGE_BASE_TIME[age];
      case ArdaDateAge.FirstAge:
      case ArdaDateAge.SecondAge:
      case ArdaDateAge.ThirdAge:
        return year + ARDA_DATE_AGE_BASE_TIME[age];
      default:
        throw new Error('Invalid age');
    }
  }
}
