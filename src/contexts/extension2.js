import { register } from '../Registry';
import GreenComponent from '../components/GreenComponent';

const doRegister = () => {
  register('GreenComponent', GreenComponent);
};

export { doRegister };
