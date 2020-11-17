const contexts = [
  require.context(
    './contexts',
    true,
    /contextA\.js$/,
    'lazy'
  ),
  require.context(
    './contexts',
    true,
    /contextB\.js$/,
    'lazy'
  ),
];
  
export default contexts;