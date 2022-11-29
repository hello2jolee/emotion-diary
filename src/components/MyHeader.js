const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <h1 className="head_text">{headText}</h1>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
