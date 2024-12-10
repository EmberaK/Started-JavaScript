export const required = (value) => (value ? undefined : 'This field is required');

export const number = (value) =>
  isNaN(value) ? 'Must be a number' : undefined;

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;
