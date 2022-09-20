import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as C from "./CafeWrite.styles";
import { v4 as uuidv4 } from "uuid";
import Upload02 from "../../../commons/upload/02/Upload.container";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ToastUI = dynamic(() => import("../../../commons/editor"), {
  ssr: false,
});

export default function CafeWriteUI(props: any) {
  return (
    <>
      <C.Wrapper>
        {props.isAddressOpen && (
          <Modal
            visible={true}
            closable={false}
            footer={[
              <Button key="closeModal" id="modalClose" onClick={props.onClickAddressModal}>
                취소
              </Button>,
            ]}
          >
            <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
          </Modal>
        )}

        <div>
          <C.Title>
            ✏️ &nbsp; {props.isEdit ? "카페 정보 수정하기" : "카페 등록하기"}
            <span>
              {props.isEdit ? "카페 정보를 수정해주세요." : "카페 소개 내용을 입력해주세요."}{" "}
            </span>
          </C.Title>
        </div>

        <C.Form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickCreate)
          }
        >
          <C.ContentsWrap>
            <C.LabelBox>
              <C.Label>카페 이름</C.Label>
              <C.BR /> <C.BR />
              <C.InputBox
                type="text"
                placeholder="카페 이름을 입력해주세요"
                defaultValue={props.data?.fetchCafeList.title || ""}
                {...props.register("title")}
              />
              <br />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>카페 주소</C.Label>
              <C.ZipcodeWrapper>
                <C.Zipcode
                  placeholder="000000"
                  defaultValue={props.data?.fetchCafeList.zipcode || ""}
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
              <C.InputBox
                type="text"
                defaultValue={props.data?.fetchCafeList.address || ""}
                readOnly
                {...props.register("address")}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label></C.Label>
              <C.InputBox
                type="text"
                placeholder="상세주소를 적어주세요"
                defaultValue={props.data?.fetchCafeList.addressDetail || ""}
                {...props.register("addressDetail")}
              />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>카페 연락처</C.Label>
              <C.InputBox
                type="text"
                defaultValue={props.data?.fetchCafeList.phone || ""}
                placeholder="010-1234-5678"
                {...props.register("phone")}
              />
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>홈페이지 주소</C.Label>
              <C.InputBox
                type="text"
                placeholder="카페 홈페이지 주소 또는 블로그, SNS 주소가 있으면 입력해주세요"
                defaultValue={props.data?.fetchCafeList.homepage || ""}
                {...props.register("homepage")}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>한줄소개</C.Label>
              <C.InputBox
                type="text"
                defaultValue={props.data?.fetchCafeList.remarks || ""}
                placeholder="카페 한줄 소개를 적어주세요"
                {...props.register("remarks")}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>태그</C.Label>
              <C.InputBox
                type="text"
                placeholder="태그를 적어주세요. ex) 분위기 좋은, 예쁜, 조용한"
                defaultValue={props.data?.fetchCafeList.tags || ""}
                {...props.register("tags")}
                // defaultValue={props.data?.createCafeList.cafeListTag}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>카페 소개</C.Label>

              <C.WebeditorBox>
                <ToastUI
                  onChangeContents={props.onChangeContents}
                  editorRef={props.editorRef}
                  initialValue={props.data?.fetchCafeList.contents}
                />
              </C.WebeditorBox>
            </C.LabelBox>

            <C.LabelBox>
              <C.Label>사진 첨부</C.Label>

              <C.ImageWrap>
                {/* <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "gray",
                    cursor: "pointer",
                  }}
                  onClick={props.onClickImage}
                >
                  이미지선택
                </div>
                <input type="file" onChange={props.onChangeFile} ref={props.fileRef} />
                <img src={props.imageUrl[0]} /> */}

                {/* <img src={`https://storage.googleapis.com/${props.imageUrl}`} /> */}

                {props.fileUrls.map((el: any, index: any) => (
                  <Upload02
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    // el을 하면 수정하기가 안보이고
                    // fileUrls={el.url}
                    // el.url을 하면 수정하기가 보임
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </C.ImageWrap>
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>영업시간</C.Label>
              <C.InputShortBox
                type="text"
                defaultValue={props.data?.fetchCafeList.startTime || ""}
                placeholder="ex) 9:00"
                {...props.register("startTime")}
              />
              <C.InputShortBox
                type="text"
                defaultValue={props.data?.fetchCafeList.endTime || ""}
                placeholder="ex) 22:00"
                {...props.register("endTime")}
              />
            </C.LabelBox>
            <C.LabelBox>
              <C.Label>예약금</C.Label>
              <C.InputBox
                defaultValue={props.data?.fetchCafeList.deposit || ""}
                placeholder="카페 기본 음료 가격을 입력해주세요 (예: 5000 / 숫자만 입력해주세요)"
                {...props.register("deposit")}
              />
            </C.LabelBox>
          </C.ContentsWrap>

          <C.BottomWrap>
            <C.CancelBtn type="button" onClick={props.onClickCancel}>
              취소하기
            </C.CancelBtn>
            {/* <C.RegisterBtn onClick={props.onClickCreate}> */}
            <C.RegisterBtn
              type="submit"
              // onSubmit={
              //   props.isEdit
              //     ? props.handleSubmit(props.onClickUpdate)
              //     : props.handleSubmit(props.onClickCreate)
              // }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </C.RegisterBtn>
          </C.BottomWrap>
        </C.Form>
      </C.Wrapper>
    </>
  );
}
