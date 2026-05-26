import { FaFilter } from 'react-icons/fa6';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.round};
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: ${({ theme }) => theme.space[4]}px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const FilterButton = styled.button`
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Filter = styled(FaFilter)`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  color: #667085;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeadTitleEl = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const User = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s}px;

  img {
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const badge = css`
  padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[2]}px;
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
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: inherit;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  .danger {
    color: ${({ theme }) => theme.colors.statusError};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Pagination = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[1]}px;

  button {
    padding: 6px 12px;
    border-radius: ${({ theme }) => theme.radius.round};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;
