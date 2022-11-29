# EMOTION DIARY


<img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
<img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
<img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
<img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
<img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} />
        
 제대로 안 될 때 아래 내용 추가
    ```javascript
    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";
    ```