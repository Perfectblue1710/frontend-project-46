const stringify = (value) => {
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const formatPlain = (tree) => {

  const iter = (nodes, path) => {
    return nodes
      .filter((node) => node.type !== 'unchanged')
      .map((node) => {
        const property = [...path, node.key].join('.')

        switch (node.type) {
          case 'added':
            return `Property '${property}' was added with value: ${stringify(node.value)}`

          case 'removed':
            return `Property '${property}' was removed`
            
          case 'changed':
            return `Property '${property}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`

          case 'nested':
            return iter(node.children, [...path, node.key])

          default:
            return null

        }
      })
      .flat() 
      .join('\n')
  }

  return iter(tree, [])
}

export default formatPlain


