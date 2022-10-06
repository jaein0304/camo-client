import * as C from "./Searchbars02.styles";

export default function Searchbars02UI(props: any) {
  return (
    <>
      <C.SearchBarWrap>
        <C.SearchbarInput placeholder="검색어를 입력해 주세요." onChange={props.onChangeSearch} />
        <C.SearchbarBtn>검색</C.SearchbarBtn>
      </C.SearchBarWrap>
    </>
  );
}