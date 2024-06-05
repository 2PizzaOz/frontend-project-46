import showeTheDiffer from '../Proba.js';

test('showeTheDiffer', () => {
  expect(showeTheDiffer('file1.json', 'file2.json')).toContain('\n - follow:false\n   host:hexlet.io\n - proxy:123.234.53.22\n - timeout:50\n + timeout:20\n + verbose:true');
});
