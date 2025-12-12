//Валідація номера
export const formatPhoneNumber = (value: string): string => {
  const cleanNumbers = value.replace(/\D/g, '');

  let numbers = cleanNumbers;

  if (numbers.startsWith('38')) {
    numbers = numbers.substring(2);
  }
  if (numbers.startsWith('0')) {
    numbers = numbers.substring(1);
  }
  const mainNumbers = numbers.slice(0, 9);
  const length = mainNumbers.length;
  
  if (length === 0) {
    return '';
  }

  const code = mainNumbers.slice(0, 2); 
  const rest = mainNumbers.slice(2);
  
  if (length <= 2) {
    return `+38 (0${code}`;
  }
  
  if (length <= 5) {
    return `+38 (0${code}) ${rest}`;
  }
  
  if (length <= 7) {
    return `+38 (0${code}) ${rest.slice(0, 3)}-${rest.slice(3)}`;
  }

  return `+38 (0${code}) ${rest.slice(0, 3)}-${rest.slice(3, 5)}-${rest.slice(5, 7)}`;
};
export const isValidPhoneNumber = (value: string): boolean => {
  const cleanNumbers = value.replace(/\D/g, '');
  
  let numbers = cleanNumbers;
  if (numbers.startsWith('38')) {
    numbers = numbers.substring(2);
  }
  if (numbers.startsWith('0')) {
    numbers = numbers.substring(1);
  }

  return numbers.length === 9;
};
