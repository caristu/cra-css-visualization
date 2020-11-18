import BaseComponent from '../components/BaseComponent';
import { register } from '../Registry';

const doRegister = () => {
  register('BaseComponent', BaseComponent);
};

export { doRegister };
