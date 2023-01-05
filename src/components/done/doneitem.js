import * as S from "./doneitemStyle";

const DoneItem = (props) => {
  return (
    <>
      <S.MainWrapper id={props.done.id}>
        <div>{props.done.title}</div>
        <div>{props.done.description}</div>
        <div>{props.done.endDate.slice(0, 10)}</div>
        <div>{props.done.endDate.slice(11, 16)}</div>
        <div>{props.done.isCompleted}</div>
        <div>{props.done.manager}</div>
        <S.DeleteBtn id={props.done.id} onClick={props.onClickDeleteDone}>
          삭제
        </S.DeleteBtn>
        <S.EditBtn>수정</S.EditBtn>
      </S.MainWrapper>
    </>
  );
};

export default DoneItem;
