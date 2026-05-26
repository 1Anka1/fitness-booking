import { SyncLoader } from 'react-spinners';
import * as SC from './Loader.styled';

export const Loader = () => {
  return (
    <SC.Overlay>
      <SyncLoader size={20} color="#0284C7" />
    </SC.Overlay>
  );
};
