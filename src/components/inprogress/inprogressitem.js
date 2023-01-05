import * as S from "./inprogressitemStyle";

const InProgressItem = (props) => {
  return (
    <>
      <S.MainWrapper id={props.working.id}>
        <div>{props.working.title}</div>
        <div>{props.working.description}</div>
        <div>{props.working.endDate.slice(0, 10)}</div>
        <div>{props.working.endDate.slice(11, 16)}</div>
        <div>{props.working.isCompleted}</div>
        <div>{props.working.manager}</div>
        <S.DeleteBtn
          id={props.working.id}
          onClick={props.onClickDeleteInProgress}
        >
          삭제
        </S.DeleteBtn>
        <S.EditBtn>수정</S.EditBtn>
      </S.MainWrapper>
    </>
  );
};

export default InProgressItem;
