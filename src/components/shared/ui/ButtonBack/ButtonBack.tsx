import { IoReturnUpBack } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import * as SC from './ButtonBack.styled';

export const ButtonBack = () => {
  // //NAVIGATION BACK
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  return (
    <>
      <SC.ButtonBack onClick={goBack}>
        <IoReturnUpBack size={27} />
      </SC.ButtonBack>
    </>
  );
};
