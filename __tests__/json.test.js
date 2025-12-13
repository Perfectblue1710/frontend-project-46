import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/genDiff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readJson = (filename) => JSON.parse(readFileSync(getFixturePath(filename), 'utf-8'))

test('gendiff JSON format', () => {
  const filepath1 = getFixturePath('nested1.json')
  const filepath2 = getFixturePath('nested2.json')

  const expected = readJson('expectedJsonFormat.txt')
  const result = JSON.parse(genDiff(filepath1, filepath2, 'json'))

  expect(result).toEqual(expected)
})


