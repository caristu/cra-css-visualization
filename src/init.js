const contexts = [
  require.context('./contexts', true, /core\.js$/, 'lazy'),
  require.context('./contexts', true, /extension1\.js$/, 'lazy'),
  require.context('./contexts', true, /extension2\.js$/, 'lazy')
];

export default contexts;
