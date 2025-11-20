import stylish from './stylish.js';

export default (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};