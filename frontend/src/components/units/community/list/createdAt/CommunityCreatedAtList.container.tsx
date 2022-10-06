import CommunityListUI from "./CommunityCreatedAtList.presenter";
import { FETCH_FREE_BOARDS_CREATED_AT } from "../CommunityList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchFreeBoardsCreatedAtArgs,
} from "../../../../../commons/types/generated/types";
import { SyntheticEvent, useState } from "react";

export default function CommunityCreatedAtList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchFreeBoardsCreatedAt">,
    IQueryFetchFreeBoardsCreatedAtArgs
  >(FETCH_FREE_BOARDS_CREATED_AT, {
    fetchPolicy: "network-only",
  });

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/community/${el.id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  };

  return (
    <CommunityListUI
      data={data}
      refetch={refetch}
      onClickMoveToDetail={onClickMoveToDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      // onFetchMore={onFetchMore}
      onErrorImg={onErrorImg}
    />
  );
}