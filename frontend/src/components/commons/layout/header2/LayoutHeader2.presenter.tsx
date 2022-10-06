import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  HeaderWrapper,
  LoginButton,
  LoginUser,
  LoginWrapper,
  Logo,
  LogoMenuWrapper,
  MenuFonts,
  MenuTab,
  MenuWrapper,
  Wrapper,
} from "./LayoutHeader2.style";
import { ILayoutHeaderUIProps } from "./LayoutHeader2.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <LogoMenuWrapper>
            <h1>
              <Link href="/">
                <a>
                  <Logo src="/Final_logo1.png" alt="logo" />
                </a>
              </Link>
            </h1>

            <MenuWrapper>
              <Link href="/cafe">
                <a>
                  <MenuFonts>HOME</MenuFonts>
                </a>
              </Link>
              <Link href="/cafe">
                <a>
                  <MenuFonts>ABOUT</MenuFonts>
                </a>
              </Link>

              <Link href="/cafe">
                <a>
                  <MenuFonts>RESERVATION</MenuFonts>
                </a>
              </Link>

              <Link href="/community">
                <a>
                  <MenuFonts>COMMUNITY</MenuFonts>
                </a>
              </Link>
              {props.accessToken ? (
                <Link href="/myPage/myLike">
                  <a>
                    <MenuFonts>MY PAGE</MenuFonts>
                  </a>
                </Link>
              ) : (
                <a></a>
              )}
            </MenuWrapper>
          </LogoMenuWrapper>

          {props.accessToken ? (
            <LoginWrapper>
              <LoginUser>
                <UserOutlined />
                &nbsp;
                {props.data?.fetchLoginedUser.nickName}님
              </LoginUser>

              <LoginButton onClick={props.onClickLogout}>로그아웃</LoginButton>
              <MenuTab />
            </LoginWrapper>
          ) : (
            <LoginWrapper>
              <Link href="/login">
                <a>
                  <LoginButton>로그인</LoginButton>
                </a>
              </Link>
              <Link href="/login/selectSignUp">
                <a>
                  <LoginButton>회원가입</LoginButton>
                </a>
              </Link>
              <MenuTab />
            </LoginWrapper>
          )}
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}