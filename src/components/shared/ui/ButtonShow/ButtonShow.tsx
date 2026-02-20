import * as SC from './ButtonShow.styled';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

export default function ButtonShow({ visible, onToggle }: Props) {
  return (
    <SC.Button onClick={onToggle} type="button">
      {visible ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
    </SC.Button>
  );
}
