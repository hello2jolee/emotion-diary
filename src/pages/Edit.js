import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate(); // 로그인 안 한 사용자가 로그인하는 페이지로 이동할 때 주로 사용
  const [searchParams, setSearchParams] = useSearchParams(); // [] : 배열 비구조 할당

  const id = searchParams.get("id");
  console.log(id);
  const mode = searchParams.get("mode");
  console.log(mode);
  return (
    <div>
      <h2>EDIT</h2>
      <p>이곳은 수정 입니다</p>
      <button onClick={() => setSearchParams({ who: "jolee" })}>바꾸기</button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
            <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
