export const randomInt = (max) => {
  const myMax = max || Number.MAX_SAFE_INTEGER;
  return Math.floor(Math.random() * Math.floor(myMax));
}

export const defaultValidationMessages = {
  mandatory: 'This field is required',
  invalidURL: 'Please enter a valid URL'
}
