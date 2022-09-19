import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyLike.styles";
import { IMyLikeUIProps } from "./MyLike.types";
import { v4 as uuidv4 } from "uuid";
import PaginationContainer from "./pagination/Pagination.container";

export default function MyLikeUI(props: IMyLikeUIProps) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>찜목록</B.StayMenu>
          <B.Line />
          <S.LikeWrapper key={uuidv4()}>
            {props.favoriteData?.fetchUserFavoriteCafe?.map((el) => (
              <>
                <S.CafeWrapper>
                  <S.CafeImage src="/Rectangle 3118.png" />
                  <S.CafeName>
                    {el.cafeList?.title}
                    {/* <S.HeartIcon /> */}
                  </S.CafeName>
                  <S.CafeDetail>{el.cafeList?.address}</S.CafeDetail>
                </S.CafeWrapper>
              </>
            ))}
          </S.LikeWrapper>
          <S.PaginationWrapper>
            <PaginationContainer
              refetch={props.refetch}
              count={props.count?.fetchFavoriteCafeNumber}
            />
          </S.PaginationWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
