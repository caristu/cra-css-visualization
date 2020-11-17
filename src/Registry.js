const registry = {};

function register(name, component) {
  registry[name] = component;
}

function get(name) {
  return registry[name];
}

export {register, get}