/* eslint-disable no-console */
import { ArdaDate } from '@domains/arda-date';
import { ArdaDateAgeFormat } from '@models/roleplay/arda-date';

const ardaDate: ArdaDate = new ArdaDate('567 PA');

console.log(ardaDate.toString(ArdaDateAgeFormat.Dotted));
