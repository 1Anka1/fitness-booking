import type { Pass } from '../../../utils/types/types';
import * as SC from './PassList.styled';

type PassListProps = {
  passes: Pass[];
  selectedCardId: string | null;
  passWithAllClubsId: string | null;
  onToggle: (pass: Pass) => void;
  onSelect: (pass: Pass) => void;
};

export const PassList = ({
  passes,
  selectedCardId,
  passWithAllClubsId,
  onToggle,
  onSelect,
}: PassListProps) => {
  return (
    <SC.CardWrapper>
      {passes.map((pass: Pass) => {
        const { _id, description, name, openingHours, price } = pass;
        const isCardSelected = selectedCardId === _id;
        const includeAllClubs = passWithAllClubsId === _id;
        const finalPrice = price + (includeAllClubs ? 20 : 0);

        return (
          <SC.Card key={_id} $active={isCardSelected}>
            <SC.CardHeader>
              <SC.PassTitle>{name}</SC.PassTitle>
              <SC.Subtitle>paid in advance</SC.Subtitle>
            </SC.CardHeader>

            <SC.PriceSection>
              <SC.Price>
                <SC.PriceMain>{finalPrice}</SC.PriceMain>
                <SC.PriceSide>$</SC.PriceSide>
              </SC.Price>

              <SC.EntryFee>
                entry fee <strong>20$</strong>
              </SC.EntryFee>

              <SC.AddonRow>
                <span>Access to all clubs</span>
                <SC.Toggle
                  type="button"
                  aria-pressed={includeAllClubs}
                  onClick={() => onToggle(pass)}
                />
                <span>+20 $</span>
              </SC.AddonRow>
            </SC.PriceSection>

            <SC.ButtonSection>
              <SC.SelectPass $active={isCardSelected} href="#passes" onClick={() => onSelect(pass)}>
                {isCardSelected ? 'Selected' : 'Join Now'}
              </SC.SelectPass>
            </SC.ButtonSection>

            <SC.Features>
              <SC.FeatureItem>{openingHours}</SC.FeatureItem>
              <SC.FeatureItem>{description}</SC.FeatureItem>
              <SC.FeatureItem>Free water for training</SC.FeatureItem>
              <SC.FeatureItem>Group classes included in the price</SC.FeatureItem>
            </SC.Features>
          </SC.Card>
        );
      })}
    </SC.CardWrapper>
  );
};
