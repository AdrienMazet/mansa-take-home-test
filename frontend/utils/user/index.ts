export const getInitials = (firstName: string, lastName: string) =>
  `${lastName.charAt(0).toUpperCase()}${firstName.charAt(0).toUpperCase()}`;

export const getFormattedFullName = (firstName: string, lastName: string) =>
  `${lastName.toUpperCase()} ${firstName}`;
