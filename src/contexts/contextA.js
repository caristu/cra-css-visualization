import ComponentA from '../components/ComponentA';
import { register } from '../Registry';

const doRegister = () => {
  register('MyComponentA', ComponentA);
};

export { doRegister };
