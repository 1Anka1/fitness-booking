import { useCallback, useRef, useState } from 'react';

import * as SC from './PassesByType.styled';
import { useDataAPI } from '../../../hooks/useDataAPI';
import { getPass } from '../../../api/userData';
import type { Pass } from '../../../utils/types/types';
import {
  clearSelectedPass,
  setPassStartDate,
  setSelectedPass,
} from '../../../redux/checkout/checkoutSlice';
import { IoCaretForwardOutline } from 'react-icons/io5';
import { RxDividerVertical } from 'react-icons/rx';
import { PassList } from '../PassList/PassList';
import { PassAuth } from '../PassAuth/PassAuth';
import { useAppDispatch } from '../../../redux/hooks/hooks';

const formatDateForInput = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const formatDateForDisplay = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString('de-DE');
};

type PassesByTypeProps = {
  selectedPassType: string;
};

export const PassesByType = ({ selectedPassType }: PassesByTypeProps) => {
  const today = formatDateForInput(new Date());

  const [passWithAllClubsId, setPassWithAllClubsId] = useState<string | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [passStartDate, setLocalPassStartDate] = useState(today);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const getPassByType = useCallback(() => getPass(selectedPassType), [selectedPassType]);
  const { results } = useDataAPI<Pass[]>(getPassByType, selectedPassType, []);

  const handleToggle = (pass: Pass) => {
    const includeAllClubs = passWithAllClubsId !== pass._id;

    setPassWithAllClubsId(includeAllClubs ? pass._id : null);

    if (selectedCardId === pass._id) {
      dispatch(
        setSelectedPass({
          pass,
          includeAllClubs,
        }),
      );
    }
  };

  const handleSelectPass = (pass: Pass) => {
    const isSamePass = selectedCardId === pass._id;

    if (isSamePass) {
      setSelectedCardId(null);
      dispatch(clearSelectedPass());
      return;
    }
    setSelectedCardId(pass._id);

    dispatch(
      setSelectedPass({
        pass,
        includeAllClubs: passWithAllClubsId === pass._id,
      }),
    );
    dispatch(setPassStartDate(passStartDate));
  };

  const handleOpenDatePicker = () => {
    const dateInput = dateInputRef.current;

    if (!dateInput) return;

    dateInput.focus();
    dateInput.showPicker?.();
  };

  const handleDateChange = (value: string) => {
    if (!value || value < today) return;

    setLocalPassStartDate(value);
    dispatch(setPassStartDate(value));
  };

  return (
    <SC.Wrapper>
      <PassList
        passes={results}
        selectedCardId={selectedCardId}
        passWithAllClubsId={passWithAllClubsId}
        onSelect={handleSelectPass}
        onToggle={handleToggle}
      />

      {selectedCardId && (
        <SC.InfoWrapper>
          <SC.Title>
            <IoCaretForwardOutline size={40} color="#0a88c9" />
            Pass start
          </SC.Title>

          <SC.StartWrapper>
            <p>Pass will start </p>
            <RxDividerVertical size={40} color="#0a88c9" />
            <p>{formatDateForDisplay(passStartDate)}</p>

            <SC.ChangeButton type="button" onClick={handleOpenDatePicker}>
              Change
              <SC.DateInput
                ref={dateInputRef}
                type="date"
                min={today}
                value={passStartDate}
                onChange={(e) => handleDateChange(e.target.value)}
                aria-label="Choose pass start date"
                required
              />
            </SC.ChangeButton>
          </SC.StartWrapper>
        </SC.InfoWrapper>
      )}
      <SC.Title id="passes">
        <IoCaretForwardOutline size={40} color="#0a88c9" />
        Your data
      </SC.Title>

      <PassAuth />
    </SC.Wrapper>
  );
};
