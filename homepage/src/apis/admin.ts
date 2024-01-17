import axios from "axios";

// admin page에서 각 함수 호출해서 데이터 가져와야 함

// 어드민 티켓 데이터 가져오기
export const getTicketAdmin = async () => {
  const access = localStorage.getItem("access");
  // api 연결 필요
  const res = await axios.get("", {
    headers: {
      Authorization: access,
    },
  });

  // response 타입 보고 수정 가능
  return res.data;
};

// 어드민 지원 데이터 가져오기
export const getApplyAdmin = async () => {
  const access = localStorage.getItem("access");

  // api 연결 필요
  const res = await axios.get("", {
    headers: {
      Authorization: access,
    },
  });

  // response 타입 보고 수정 가능
  return res.data;
};
