import {format} from '../src/dateFormatter';

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('when the date to format has a month or year below 10', () => {
  const January = 0; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, January, 6, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, January, 5, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('05/01/2018');
});

it('when the date to format is in the future', () => {
  const February = 1; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, February, 6, 10, 5).getTime();
  const dateTimeToFormat = new Date(2088, February, 5, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('05/02/2088');
});
//
// it('when the date to format is not a valid date', () => {
//   const July = 6; //js Date object month is indexed from 0
//   const systemDateTime = new Date(2018).getTime();
//   const dateTimeToFormat = new Date(2018, July, 5, 12, 50).getTime();
//   expect(format(dateTimeToFormat, systemDateTime)).toBe('NOT A VALID DATE');
// });
//
// it('when the date to format has a month or year below 10"', () => {
//   const January = 0; //js Date object month is indexed from 0
//   const systemDateTime = new Date(2018, January, , 10, 5).getTime();
//   const dateTimeToFormat = new Date(2018, January, 5, 12, 50).getTime();
//   expect(format(dateTimeToFormat, systemDateTime)).toBe('05/01/2018');
// });
//
// it('when the date to format has a month or year below 10"', () => {
//   const January = 1; //js Date object month is indexed from 0
//   const systemDateTime = new Date(2018, January, 6, 10, 5).getTime();
//   const dateTimeToFormat = new Date(2018, January, 5, 12, 50).getTime();
//   expect(format(dateTimeToFormat, systemDateTime)).toBe('05/01/2018');
// });
