import AddTodo from "../../../pages/addtodo";
import EditTodo from "../../../pages/edittodo";
import DoneItem from "../done/doneitem";
import InProgressItem from "../inprogress/inprogressitem";
import ToDoItem from "../todoitem/todoitem";
import * as S from "./todolistStyles";

const ToDoListPresenter = (props) => {
  const isEdit = props.isEdit;
  return (
    <>
      {props.isOpen && (
        <>
          <AddTodo />
          <S.CancelBtn onClick={props.onClickCancel}>닫기</S.CancelBtn>
        </>
      )}
      {props.isEdit && (
        <>
          <EditTodo />
          <S.CancelBtn onClick={props.onClickCancel}>닫기</S.CancelBtn>
        </>
      )}
      <S.MainWrapper>
        <S.ListWrapper>
          <div>할일</div>
          {props.todoList?.map((todo) => (
            <div key={todo.id}>
              <ToDoItem
                onClickDeleteTodo={props.onClickDeleteTodo}
                onClickEdit={props.onClickEdit}
                todo={todo}
                isEdit={isEdit}
              />
            </div>
          ))}
        </S.ListWrapper>
        <S.ListWrapper>
          <div>진행 중</div>
          {props.inProgress.map((working) => (
            <div key={working.id}>
              <InProgressItem
                onClickDeleteInProgress={props.onClickDeleteInProgress}
                onClickEdit={props.onClickEdit}
                working={working}
                isEdit={isEdit}
              />
            </div>
          ))}
        </S.ListWrapper>
        <S.ListWrapper>
          <div>완료</div>
          {props.done.map((done) => (
            <div key={done.id}>
              <DoneItem
                onClickDeleteDone={props.onClickDeleteDone}
                onClickEdit={props.onClickEdit}
                done={done}
                isEdit={isEdit}
              />
            </div>
          ))}
        </S.ListWrapper>
        <S.AddBtn onClick={props.onClickAddOpen}>추가하기</S.AddBtn>
      </S.MainWrapper>
    </>
  );
};

export default ToDoListPresenter;
