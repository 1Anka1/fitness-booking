import { FaFilter } from 'react-icons/fa6';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radius.round};
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
  border: 1px solid ${(p) => p.theme.colors.borderDark};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: ${(p) => p.theme.space[4]}px;
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;
`;

export const FilterButton = styled.button`
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Filter = styled(FaFilter)`
  color: ${(p) => p.theme.colors.textSecondary};
  transition: color 250ms ${(p) => p.theme.cubic.timingFunction};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.borderDark};
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  color: #667085;
  padding: ${(p) => p.theme.space[2]}px ${(p) => p.theme.space[4]}px;
  background-color: ${(p) => p.theme.colors.background};
`;

export const HeadTitleEl = styled.p`
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.fontSizes.m}px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: ${(p) => p.theme.space[3]}px ${(p) => p.theme.space[4]}px;
  border-bottom: 1px solid ${(p) => p.theme.colors.borderDark};
`;

export const User = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]}px;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.s}px;

  img {
    border-radius: 50%;
  }

  span {
    color: ${(p) => p.theme.colors.textMuted};
  }
`;

export const badge = css`
  padding: ${(p) => p.theme.space[1]}px ${(p) => p.theme.space[2]}px;
  border-radius: 30px;
  width: fit-content;
`;

export const Role = styled.div<{ $role: string }>`
  ${badge};

  ${({ $role }) =>
    $role === 'Client'
      ? 'background:#e0ecff; color:#2454d1;'
      : 'background:#daf5e6; color:#1f7a4c;'}
`;

export const Status = styled.div<{ $status: string }>`
  ${badge};

  ${({ $status }) =>
    $status === 'Active'
      ? 'background:#daf5e6; color:#1f7a4c;'
      : 'background:#fff2cc; color:#946200;'}
`;

export const Joined = styled.div`
  color: ${(p) => p.theme.colors.textMuted};
  font-size: inherit;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]}px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${(p) => p.theme.colors.primary};
  }

  .danger {
    color: ${(p) => p.theme.colors.statusError};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(p) => p.theme.space[3]}px ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.label};
  font-weight: ${(p) => p.theme.fontWeights.normal};
`;

export const Pagination = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[1]}px;

  button {
    padding: 6px 12px;
    border-radius: ${(p) => p.theme.radius.round};
    border: 1px solid ${(p) => p.theme.colors.border};
    background: ${(p) => p.theme.colors.white};
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .active {
    background: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
    border: none;
  }
`;
