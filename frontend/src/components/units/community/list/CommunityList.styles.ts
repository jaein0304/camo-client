import { LikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url("https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 20px 0;
  padding-bottom: 50px;
`;

export const NavWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1100px) {
    // 모바일
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SortList = styled.div`
  @media (max-width: 1100px) {
    margin: 1rem 0;
  }
`;

export const InputWrapper = styled.div`
  width: 230px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.input`
  width: 12rem;
  height: 2rem;
  padding-left: 0.7erem;
`;

export const WriteBtn = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: #1e3932;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: fixed;
  color: #fff;
  right: 3%;
  bottom: 5%;

  ::before {
    content: "+";
    font-size: 3rem;
    line-height: 2rem;
  }
  :hover::before {
    content: "글쓰기";
    font-size: 1.2rem;
    line-height: 1.3rem;
  }

  @media ${breakPoints.mobile} {
    right: 12%;
    bottom: 25%;
    width: 4rem;
    height: 4rem;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 600px);
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(1, 350px);
    padding: 0 0 0 0;
  }
`;

export const ItemContent = styled.div`
  width: 95%;
  height: 200px;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  @media (max-width: 1100px) {
    width: 95%;
    height: 200px;
  }
`;

export const ItemImgWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 4px 0 0 4px;
`;

export const ItemTextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
`;

export const ItemTextTitleWrapper = styled.div`
  width: 100%;
`;

export const ItemTextTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const TagsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ItemTextTag = styled.span`
  font-size: 0.9rem;
  margin-right: 0.3rem;
  color: steelblue;
`;

export const ItemTextUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ItemTextLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTextLike = styled(LikeFilled)`
  font-size: 1rem;
  margin-bottom: 0.1rem;
`;

export const ItemTextLikeCount = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

export const ItemTextUser = styled.div`
  padding: 5px 0;
`;

export const PagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
