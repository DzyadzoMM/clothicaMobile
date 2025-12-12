//Валідація паролю

export const isValidPassword = (password: string, minLength: number = 8): boolean => {
  return password.length >= minLength;
};