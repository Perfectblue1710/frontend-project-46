import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/genDiff.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename)
const read = (filename) => readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff flat JSON', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))
  expect(result).toBe(read('expected.txt').trim())
})

test('gendiff flat YAML', () => {
  const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))
  expect(result).toBe(read('expected.txt').trim())
})

test('gendiff nested JSON', () => {
  const result = genDiff(getFixturePath('nested1.json'), getFixturePath('nested2.json'))
  expect(result).toBe(read('expectedNested.txt').trim())
})

test('gendiff nested YAML', () => {
  const result = genDiff(getFixturePath('nested1.yml'), getFixturePath('nested2.yml'))
  expect(result).toBe(read('expectedNested.txt').trim())
})



