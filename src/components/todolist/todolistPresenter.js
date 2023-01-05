import AddTodo from "../../../pages/addtodo";
import * as S from "./todolistStyles";

const ToDoListPresenter = (props) => {
  return (
    <>
      {props.isOpen && <AddTodo />}
      <div>
        <div>할일</div>
        <S.AddBtn onClick={props.onClickAddOpen}>추가하기</S.AddBtn>
        <div>진행 중</div>
        <div>완료</div>
      </div>
    </>
  );
};

export default ToDoListPresenter;
