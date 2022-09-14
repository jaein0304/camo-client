import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { IQuery, IQueryCheckUserEmailArgs } from "../../../../commons/types/generated/types";
import FindIdUI from "./FindId.presenter";
import { CHECK_SMS, FETCH_USER_BY_EMAIL, SEND_SMS } from "./FindId.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = yup.object({
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{3}\d{3,4}\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
  phoneNumberCheck: yup.string().required("휴대폰 인증 번호가 필요합니다."),
});

export default function FindId() {
  const client = useApolloClient();
  const { data: userEmailData } = useQuery<
    Pick<IQuery, "fetchUserByEmail">,
    IQueryCheckUserEmailArgs
  >(FETCH_USER_BY_EMAIL);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [sendNumber] = useMutation(SEND_SMS);
  const [checkSMSTokenValid] = useMutation(CHECK_SMS);
  const [checkSMSToken, setCheckSMSToken] = useState(false);

  const phoneNumber = watch("phoneNumber");
  const SMSToken = watch("phoneNumberCheck");

  const onClickSendAuthNumber = async () => {
    try {
      await sendNumber({
        variables: { phoneNumber },
      });
      if (!phoneNumber) return;
      alert("인증번호가 전송되었습니다.");
    } catch (error) {
      alert("휴대폰 번호를 입력해주세요");
    }
  };

  const onClickNumberConfirm = async () => {
    try {
      const result = await checkSMSTokenValid({
        variables: { phoneNumber, SMSToken },
      });
      const checkPhoneToken = result?.data?.checkSMSTokenValid;
      if (checkPhoneToken) alert("인증이 완료되었습니다.");
      setCheckSMSToken(true);
      console.log(result);
      console.log(checkPhoneToken);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmit = async (data: any) => {
    if (!checkSMSToken) return alert("휴대폰 인증을 해야합니다");
    try {
      const result = await client.query({
        query: FETCH_USER_BY_EMAIL,
        variables: {
          phoneNumber: data.phoneNumber,
        },
      });
      console.log(result);
      alert(`고객님의 아이디는 ${userEmailData?.fetchUserByEmail.email} 입니다.`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FindIdUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSendAuthNumber={onClickSendAuthNumber}
      onClickNumberConfirm={onClickNumberConfirm}
      onClickSubmit={onClickSubmit}
    />
  );
}
