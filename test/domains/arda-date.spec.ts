import { it, expect, describe } from 'vitest';
import { ArdaDate } from '@domains/arda-date/classes';
import { ArdaDateResolvable, ArdaDateTime } from '@models/roleplay/arda-date';

describe('ArdaDate', () => {
  it('should create instance', () => {
    expect(new ArdaDate(0)).toBeTruthy();
  });

  const typeInputs = [
    { type: 'number', value: 13579, expected: 13579 },
    { type: 'string', value: '0 AA', expected: 95820 },
  ] satisfies { type: string; value: ArdaDateResolvable; expected: ArdaDateTime }[];
  it.each(typeInputs)('should set date with $type input', ({ value, expected }) => {
    const ardaDate = new ArdaDate(value);
    expect(ardaDate.getTime()).toBe(expected);
  });
});
