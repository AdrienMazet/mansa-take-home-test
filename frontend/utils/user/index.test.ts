import { getFormattedFullName, getInitials } from '.';

describe('getInitials', () => {
  it.each([
    ['', '', ''],
    ['John', 'John', 'JJ'],
    ['John', 'Florence', 'FJ'],
    ['Louis Philippe', '1er', '1L'],
  ])(
    'return correct initials from firstName %p and lastName %p : %p',
    (firstName, lastName, initials) => {
      expect(getInitials(firstName, lastName)).toBe(initials);
    },
  );
});

describe('getFormattedFullName', () => {
  it.each([
    ['', '', ' '],
    ['John', 'John', 'JOHN John'],
    ['John', 'Florence', 'FLORENCE John'],
    ['Louis Philippe', '1er', '1ER Louis Philippe'],
  ])(
    'return correct initials from firstName %p and lastName %p : %p',
    (firstName, lastName, fullname) => {
      expect(getFormattedFullName(firstName, lastName)).toBe(fullname);
    },
  );
});
