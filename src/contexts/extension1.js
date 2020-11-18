import { register } from '../Registry';
import BlueComponent from '../components/BlueComponent';

const doRegister = () => {
  register('BlueComponent', BlueComponent);
};

export { doRegister };
