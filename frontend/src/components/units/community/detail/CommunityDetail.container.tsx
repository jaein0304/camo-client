import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import { FETCH_BOARDS } from "../list/CommunityList.queries";
import CommunityDetailUI from "./CommunityDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./CommunityDetail.queries";

export default function CommunityDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.communityId },
  });
  console.log(data);

  console.log(`"데이타"${data}`);

  //   const onClickUpdate = () => {
  //     router.push(`/product/${router.query.detail}/edit`)
  // }

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.communityId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      router.push("/community");
      alert("삭제 완료");
    } catch (error) {
      alert("삭제 실패");
    }
  };

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  };

  return <CommunityDetailUI data={data} onClickDelete={onClickDelete} onErrorImg={onErrorImg} />;
}
