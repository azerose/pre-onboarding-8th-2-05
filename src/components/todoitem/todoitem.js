import * as S from "./todoitemStyle";

const todo = (props) => {
  return (
    <>
      <S.MainWrapper id={props.todo.id}>
        <div>{props.todo.title}</div>
        <div>{props.todo.description}</div>
        <div>{props.todo.endDate.slice(0, 10)}</div>
        <div>{props.todo.endDate.slice(11, 16)}</div>
        <div>{props.todo.isCompleted}</div>
        <div>{props.todo.manager}</div>
        <S.DeleteBtn id={props.todo.id} onClick={props.onClickDeleteTodo}>
          삭제
        </S.DeleteBtn>
        <S.EditBtn>수정</S.EditBtn>
      </S.MainWrapper>
    </>
  );
};

export default todo;
