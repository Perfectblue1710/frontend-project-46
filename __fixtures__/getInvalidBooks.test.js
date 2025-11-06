import getInvalidBooks from '../index.js';

describe('getInvalidBooks', () => {
  test('возвращает книги без name или author', () => {
    const books = [
      { name: 'Book 1', author: 'Author 1' },
      { author: 'Author 2' },
      { name: 'Book 3' } 
    ];
    const result = getInvalidBooks(books);
    expect(result).toEqual([
      { author: 'Author 2' },
      { name: 'Book 3' }
    ]);
  });

  test('возвращает книги с пустой ссылкой', () => {
    const books = [
      { name: 'Book 1', author: 'Author 1', link: '' },
      { name: 'Book 2', author: 'Author 2', link: 'https://example.com' },
    ];
    const result = getInvalidBooks(books);
    expect(result).toEqual([{ name: 'Book 1', author: 'Author 1', link: '' }]);
  });

  test('возвращает книги с неправильным жанром', () => {
    const books = [
      { name: 'Book 1', author: 'Author 1', genre: 'fantasy' },
      { name: 'Book 2', author: 'Author 2', genre: 'unknown' }
    ];
    const result = getInvalidBooks(books);
    expect(result).toEqual([{ name: 'Book 2', author: 'Author 2', genre: 'unknown' }]);
  });
});
