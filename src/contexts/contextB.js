import ComponentB from '../components/ComponentB';
import { register } from '../Registry';

const doRegister = () => {
  register('MyComponentB', ComponentB);
};

export { doRegister };
