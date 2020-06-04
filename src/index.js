const toUpperCase = value => {
  return value.toUpperCase();
};

const toLowerCase = value => {
  return value.toLowerCase();
};

const slug = value => {
  value = value.toString().toLowerCase().trim();

  return value
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export { toUpperCase, toLowerCase, slug };
