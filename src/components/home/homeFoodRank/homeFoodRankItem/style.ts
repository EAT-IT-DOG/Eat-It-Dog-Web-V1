import styled from "styled-components";
import { widthOverflowEllipsisLine } from "../../../../style/libStyle";

export const HomeFoodRankItemContainer = styled.div`
  width: 140px;
  min-height: 20px;
  max-height: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const HomeFoodRankItemRank = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeFoodRankItemContent = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  text-align: start;
  ${widthOverflowEllipsisLine}
`;
