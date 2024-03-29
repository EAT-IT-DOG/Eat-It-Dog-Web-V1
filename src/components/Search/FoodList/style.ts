import styled from "styled-components";
import { FoodSafenessColor } from "../../../constants/search/search.constant";
import { palette } from "../../../style/palette";
import { FoodSafeness } from "../../../types/food/food.type";

export const SafenessWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 14px;
`;

export const SafenssLabel = styled.div<{
  safenessType: FoodSafeness;
}>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: ${({ safenessType }) => FoodSafenessColor[safenessType]};
`;

export const SafenssLabelName = styled.span`
  color: #bcbcbc;
  font-size: 8px;
  font-weight: 300;
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;
  overflow-y: scroll;
  row-gap: 34px;
  column-gap: 40px;
  margin-top: 40px;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    width: 18px;
    background-color: ${palette.gray[200]};
    border-radius: 15px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }
`;

export const FoodItem = styled.div<{
  safenessType: FoodSafeness;
}>`
  width: 161px;
  height: 82px;
  border-radius: 15px;
  border: 1px solid ${({ safenessType }) => FoodSafenessColor[safenessType]};
  cursor: pointer;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  row-gap: 2px;

  &:hover {
    background-color: ${({ safenessType }) => FoodSafenessColor[safenessType]};
  }
`;

export const FoodItemTitle = styled.span`
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.contrast};

  ${FoodItem}:hover & {
    color: white;
  }
`;

export const FoodItemType = styled.span`
  font-size: 12px;
  color: #bcbcbc;

  ${FoodItem}:hover & {
    color: white;
  }
`;
