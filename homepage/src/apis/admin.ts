import axios from "axios";
import { getNewRefreshToken } from "./refresh";

// admin page에서 각 함수 호출해서 데이터 가져와야 함

// 어드민 티켓 데이터 가져오기
export const getTicketAdmin = async () => {
  const access = localStorage.getItem("access");

  try {
    // api 연결 필요
    const res = await axios.get("", {
      headers: {
        Authorization: access,
      },
    });

    // response 타입 보고 수정 가능
    return res.data;
  } catch (error) {
    // 테스트 필요
    if (error instanceof Error) {
      console.log(error.message);
      // 401 일 때 (토큰 만료 시)
      //   const { access, refresh } = await getNewRefreshToken();
      //   error.config.headers.Authorization = access;
      //   localStorage.setItem("access", access);
      //   localStorage.setItem("refresh", refresh);
      //   return axios.get(error.config.url, error.config).data;
    }
  }
};

// 어드민 지원 데이터 가져오기
export const getApplyAdmin = async () => {
  const access = localStorage.getItem("access");

  try {
    // api 연결 필요
    const res = await axios.get("", {
      headers: {
        Authorization: access,
      },
    });

    // response 타입 보고 수정 가능
    return res.data;
  } catch (error) {
    // 테스트 필요
    if (error instanceof Error) {
      console.log(error.message);
      // 401 일 때 (토큰 만료 시)
      //   const { access, refresh } = await getNewRefreshToken();
      //   error.config.headers.Authorization = access;
      //   localStorage.setItem("access", access);
      //   localStorage.setItem("refresh", refresh);
      //   return axios.get(error.config.url, error.config).data;
    }
  }
};
