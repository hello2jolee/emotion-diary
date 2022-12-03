import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

// components
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate(); // 로그인 안 한 사용자가 로그인하는 페이지로 이동할 때 주로 사용
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { repleace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
