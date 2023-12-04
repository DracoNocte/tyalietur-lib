import { ARDA_DATE_AGE_STRINGS } from '@domains/arda-date';
import type { ArdaDateAgeFormat, ArdaDateAge } from './enums';

export type ArdaDateAgeCode = (typeof ARDA_DATE_AGE_STRINGS)[
  | ArdaDateAgeFormat.Coded
  | ArdaDateAgeFormat.CodedAlt][ArdaDateAge];

export type ArdaDateAgeCodedOrDotted = ArdaDateAgeCode extends `${infer A1}${infer A2}`
  ? `${A1}${'' | '.'}${A2}${'' | '.'}`
  : never;

export type ArdaDateStringResolvable =
  | `${number}${' ' | '-' | '_'}${ArdaDateAgeCodedOrDotted}`
  | `${ArdaDateAgeCodedOrDotted}${'' | ' ' | '-' | '_'}${number}`;

export type ArdaDateTime = number;

export type ArdaDateResolvable = ArdaDateStringResolvable | ArdaDateTime;
