import * as S from "./Login.styles";
import * as B from "../../commons/wrapper/LoginWrapper.styles";
import { ILoginUIProps } from "./Login.types";
import { Error, Form } from "./signUp/SignUp.styles";
import Link from "next/link";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <B.Wrapper>
        {/* <B.SideWrapper>
          <B.ColumnWrapper>
            <B.SubLogo>당신이 원하는 카페들을 모은</B.SubLogo>
            <B.SideLogo src="/CAMO.png" />
          </B.ColumnWrapper>
        </B.SideWrapper> */}
        <Form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Wrapper>
            <B.Title>로그인</B.Title>
            <S.SubTitle>당신이 아는 카페들을 모은 카모</S.SubTitle>
            <S.MainWrapper>
              <B.Input type="text" placeholder="이메일(아이디)" {...props.register("email")} />
              <Error>{props.formState.errors.email?.message}</Error>
              <B.Input type="password" placeholder="비밀번호" {...props.register("password")} />
              <Error>{props.formState.errors.password?.message}</Error>
              <B.ButtonWrapper>
                <B.SubmitButton>로그인</B.SubmitButton>
              </B.ButtonWrapper>
              <S.SocialLoginWrapper>
                <B.SocialA href="https://cafemoment-backend.site/login/google">
                  <S.GoogleLogin src="/Google.png" />
                </B.SocialA>
                <B.SocialA href="https://cafemoment-backend.site/login/kakao">
                  <S.SocialLogin src="/Kakao.png" />
                </B.SocialA>
                <B.SocialA href="https://cafemoment-backend.site/login/naver">
                  <S.SocialLogin src="/Naver.png" />
                </B.SocialA>
              </S.SocialLoginWrapper>
              <S.FooterWrapper>
                <S.RowWrapper>
                  <S.FooterText>아직 계정이 없으신가요?</S.FooterText>
                  <Link href="/login/signUp">
                    <S.FooterButton>
                      <a>회원가입</a>
                    </S.FooterButton>
                  </Link>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.FooterText>아이디를 잊으셨나요?</S.FooterText>
                  <S.FooterButton>아이디 찾기</S.FooterButton>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.FooterText>비밀번호를 잊으셨나요?</S.FooterText>
                  <S.FooterButton>비밀번호 찾기</S.FooterButton>
                </S.RowWrapper>
              </S.FooterWrapper>
            </S.MainWrapper>
          </S.Wrapper>
        </Form>
      </B.Wrapper>
    </>
  );
}
