import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const parse = (data, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(data)
    case '.yml':
    case '.yaml':
      return yaml.load(data)

    default:
      throw new Error(`Unknown extension: ${extension}`)
  }
}

export const parseFile = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8')
  const extension = path.extname(filepath)

  return parse(data, extension)
}

