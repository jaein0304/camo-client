import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as C from "./CafeWrite.styles";
import Upload02 from "../../../../commons/upload/02/Upload.container";

export default function CafeWriteUI(props: any) {
  return (
    <>
      <C.Wrapper>
        {props.isAddressOpen && (
          <Modal
            visible={true}
            closable={false}
            footer={[
              <button key="closeModal" id="modalClose" onClick={props.onClickAddressModal}>
                취소
              </button>,
            ]}
          >
            <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
          </Modal>
        )}

        <div>
          <C.Title>
            카페 등록하기
            {/* { props.isEdit ? "카페 정보 수정하기" : "카페 정보 등록하기" } */}
            <span>카페 정보를 입력해주세요. 카페 이미지는 최소 3장이상 등록해주세요</span>
          </C.Title>
        </div>

        <C.Form onSubmit={props.handleSubmit(props.onClickCreate)}>
          <C.ContentsWrap>
            <C.LabelBox>
              <C.Label>카페 이름</C.Label>
              <C.BR /> <C.BR />
              <C.InputBox type="text" {...props.register("title")} />
              <br />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>카페 주소</C.Label>
              <C.ZipcodeWrapper>
                <C.Zipcode
                  type="text"
                  placeholder="000000"
                  readOnly
                  {...props.register("zipcode")}
                />
                <C.AddressButton type="button" id="modalOpen" onClick={props.onClickAddressModal}>
                  우편번호 검색
                </C.AddressButton>
              </C.ZipcodeWrapper>
            </C.LabelBox>

            <C.LabelBox>
              <C.Label></C.Label>
              <C.InputBox type="text" readOnly {...props.register("address")} />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label></C.Label>
              <C.InputBox
                type="text"
                placeholder="상세주소를 적어주세요"
                {...props.register("addressDetail")}
              />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>카페 연락처</C.Label>
              <C.InputBox type="text" placeholder="010-0000-0000" {...props.register("phone")} />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>홈페이지 주소</C.Label>
              <C.InputBox
                placeholder="카페 홈페이지 주소 또는 블로그, SNS 주소가 있으면 입력해주세요"
                {...props.register("hompage")}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>태그</C.Label>
              <C.InputBox
                placeholder="#태그를 적어주세요. ex) 분위기 좋은, 예쁜, 조용한"
                {...props.register("tags")}
              />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>카페 소개</C.Label>

              <C.WebeditorBox>
                {/* <input onChange={props.onChangeContents} /> */}
                <C.ContentsReactQuill onChange={props.onChangeContents} />
              </C.WebeditorBox>
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>사진 첨부</C.Label>

              <C.ImageWrap>
                {props.fileUrls.map((el: any, index: any) => (
                  <Upload02
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </C.ImageWrap>
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>영업시간</C.Label>
              <C.InputShortBox placeholder="ex) 9:00" {...props.register("startTime")} />
              <C.InputShortBox placeholder="ex) 22:00" {...props.register("endTime")} />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>예약금</C.Label>
              <C.InputBox
                placeholder="카페 기본 음료 가격을 입력해주세요 (예: 5000 / 숫자만 입력해주세요)"
                {...props.register("deposit")}
              />
            </C.LabelBox>
          </C.ContentsWrap>

          <C.BottomWrap>
            <C.CancelBtn type="button" onClick={props.onClickCancel}>
              취소하기
            </C.CancelBtn>
            <C.RegisterBtn onClick={props.handleSubmit(props.onClickCreate)}>
              등록하기
            </C.RegisterBtn>
          </C.BottomWrap>
        </C.Form>
      </C.Wrapper>
    </>
  );
}
