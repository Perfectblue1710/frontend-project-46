import _ from 'lodash'

const makeIndent = (depth, spacesCount = 4) =>
  ' '.repeat(depth * spacesCount - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const entries = Object.entries(value)
    .map(([key, val]) =>
      `${makeIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`,
    );

  return `{\n${entries.join('\n')}\n${makeIndent(depth)}  }`
};

const stylish = (tree) => {
  const iter = (nodes, depth) => nodes.map((node) => {
    switch (node.type) {
      case 'added':
        return `${makeIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`

      case 'removed':
        return `${makeIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`

      case 'unchanged':
        return `${makeIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`

      case 'changed':
        return [
          `${makeIndent(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`,
          `${makeIndent(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`
        ].join('\n');

      case 'nested':
        return `${makeIndent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1)}\n${makeIndent(depth)}  }`

      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  }).join('\n')

  return `{\n${iter(tree, 1)}\n}`
};

export default stylish
