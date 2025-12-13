import { parseFile } from './parsers.js'
import buildDiffTree from './diffBuilder.js'
import format from './formatters/index.js'

const genDiff = (file1, file2, formatName = 'stylish') => {

  const obj1 = parseFile(file1) 
  const obj2 = parseFile(file2)

  const diffTree = buildDiffTree(obj1, obj2)

  return format(diffTree, formatName)
}

export default genDiff



