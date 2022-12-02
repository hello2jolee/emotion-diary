import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";

// components
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";

const getStringDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_description: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_description: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_description: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_description: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_description: "끔찍함",
  },
];

const DiaryEditor = () => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = new useNavigate(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate("/", { replace: true }); // replace : 다시 못 돌아오도록 하기 위해 replace: true 추가
  };

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <div>
        <section>
          <h2>오늘은 언제인가요?</h2>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
        </section>
        <section>
          <h2>오늘의 감정</h2>
          <div className="input_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>오늘의 일기</h2>
          <div className="input_box_text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section className="control_box">
          <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
          <MyButton
            text={"작성완료"}
            type={"positive"}
            onClick={handleSubmit}
          />
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
