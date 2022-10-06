import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import {
  IMutation,
  IMutationDeleteLoginUserArgs,
} from "../../../../src/commons/types/generated/types";
import useAuth from "../../../../src/components/commons/hooks";
import { DELETE_LOGIN_USER } from "../../../../src/components/units/myPage/myEdit/MyEdit.queries";
import * as B from "../../../../src/components/units/myPage/MyPage.styles";
import { breakPoints } from "../../../../styles/media";

export const BigWrapper = styled.section`
  width: 100vw;
  /* height: 80vh; */
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media ${breakPoints.mobile} {
    width: 100vw;
  }
`;
const Wrapper = styled.body`
  width: 100%;
  margin: auto;

  @media ${breakPoints.mobile} {
    width: none;
  }
`;

export const Body = styled.main`
  width: 70vw;
  margin: auto;
  background-color: white;
  padding-top: 100px;
  @media ${breakPoints.mobile} {
    width: 50vw;
    margin: auto;
  }
`;
const MainWrapper = styled.main`
  width: 30vw;
  margin: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.tablet} {
    width: 50vw;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const InputTitle = styled.h3`
  padding-bottom: 0.5rem;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding-left: 0.5rem;
`;

const DeleteButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  height: 44px;
  color: rgb(255, 255, 255);
  background-color: #1e3932;
  border: 0px none;
  width: 120px;
  margin: 0px 4px;
  border-radius: 3px;
  cursor: pointer;
`;

const CancelButton = styled(DeleteButton)`
  background-color: white;
  color: #1e3832;
  border: 1px solid #1e3832;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media ${breakPoints.tablet} {
    width: 50vw;
  }
`;

export default function MyDeletePage() {
  useAuth();
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [password, setPassword] = useState("");
  const [deleteLoginUser] = useMutation<
    Pick<IMutation, "deleteLoginUser">,
    IMutationDeleteLoginUserArgs
  >(DELETE_LOGIN_USER, {
    fetchPolicy: "network-only",
  });

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteLoginUser({
        variables: { password },
      });
      if (!password) {
        Modal.error({ content: "비밀번호가 다릅니다. 다시 입력해주세요." });
        return;
      }
      router.push("/");
      Modal.success({ content: "탈퇴되었습니다. 다음에 또 이용해주세요." });
      setAccessToken("");
    } catch (error) {
      console.log(error);
    }
  };

  const Social = styled.div`
    font-size: 0.75rem;
    color: gray;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <BigWrapper>
        <Body>
          <B.StayMenu>회원 탈퇴</B.StayMenu>
          <B.Line />
          <Wrapper>
            <MainWrapper>
              고객님께서 회원 탈퇴를 원하신다니 저희 CAMO의 서비스가 많이 부족하고 미흡했나 봅니다.
              불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해
              드리도록 노력하겠습니다.
              <br /> <br />
              회원정보 등 개인형 서비스 이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
              삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업을 해주세요. <br /> <br />
              현재 예약한 데이터들이 모두 삭제되며, 예약한 내역들 또한 모두 삭제되고, 재가입해도
              자동으로 복구되지 않습니다.
              <br />
              <br />
              <InputTitle>비밀번호 입력</InputTitle>
              <InputWrapper>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onChangePassword}
                />
              </InputWrapper>
              <ButtonWrapper>
                <CancelButton>취소</CancelButton>
                <DeleteButton onClick={onClickDelete}>탈퇴</DeleteButton>
              </ButtonWrapper>
            </MainWrapper>
          </Wrapper>
          <Social>소셜로그인 비밀번호는 social1!입니다.</Social>
          <br /> <br /> <br /> <br />
          <br />
          <br />
        </Body>
      </BigWrapper>
    </>
  );
}