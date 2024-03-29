import { useLocation, useNavigate } from "react-router-dom";
import { useGetFoodNamesByType } from "../../../queries/food/food.query";
import { FoodTypeKorean } from "../../../types/food/food.type";
import { queryStringParser } from "../../../utils/queryStringParser";
import SafenessLabel from "../../Common/SafenessLabel";
import FoodNotFound from "../FoodNotFound";
import * as S from "./style";

const FoodList = () => {
  const { search } = useLocation();

  const navigate = useNavigate();

  const { data: serverFoodNamesData } = useGetFoodNamesByType(
    {
      type: search && queryStringParser(search).type,
    },
    {
      suspense: true,
    }
  );

  return (
    <>
      <S.SafenessWrap>
        <SafenessLabel safenessType="SAFE" />
        <SafenessLabel safenessType="NORMAL" />
        <SafenessLabel safenessType="DANGEROUS" />
      </S.SafenessWrap>
      {serverFoodNamesData?.length === 0 ? (
        <FoodNotFound />
      ) : (
        <S.ItemWrap>
          {serverFoodNamesData?.map((foodName) => (
            <S.FoodItem
              safenessType={foodName.safeness}
              onClick={() => navigate(`/search/${foodName.name}`)}
            >
              <S.FoodItemTitle>{foodName.name}</S.FoodItemTitle>
              <S.FoodItemType>
                #{FoodTypeKorean[queryStringParser(search).type]}
              </S.FoodItemType>
            </S.FoodItem>
          ))}
        </S.ItemWrap>
      )}
    </>
  );
};
export default FoodList;
