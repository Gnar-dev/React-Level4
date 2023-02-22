import axios from "axios";
import AddProduct from "./../page/AddProduct";

//axios를 구성하는 환경설정 관련 코드가 입력값으로 들어간다.
// configuration
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

instance.interceptors.request.use(
  //요청을 보내기 전 수행
  function (config) {
    console.log("인터셉트 요청 성공!");
    return config;
  },

  // 오류 요청을 보내기 전 수행
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  //서버로부터 정상 응답을 받는 경우
  function (response) {
    console.log("인터셉트 정상 응답 수신!");
    return response;
  },

  //서버로부터 오류 응답을 받은 경우
  function (error) {
    console.log("인터셉트 오류 응답 수신!");
    return Promise.reject(error);
  },
);

const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

const addProduct = async (newProduct) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newProduct);
};
const removeProduct = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

const switchHeart = async (payload) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${payload.id}`, {
    heart: payload.heart,
  });
};
export { getProducts, addProduct, removeProduct, switchHeart };
export default instance;
