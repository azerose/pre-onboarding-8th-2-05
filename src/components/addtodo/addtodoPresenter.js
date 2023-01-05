import ManagerContainer from "../manager/managerContainer";
import * as S from "./addtodoStyle";

const AddToDoPresenter = (props) => {
  return (
    <>
      <S.MainWrapper>
        <div>
          <h2>제목</h2>
          <input
            type="text"
            onChange={props.onChangeTitle}
            value={props.title}
          />
        </div>
        <div>
          <h2>내용</h2>
          <textarea onChange={props.onChangeDesc} value={props.description} />
        </div>
        <div>
          <h2>마감일</h2>
          <input
            type="datetime-local"
            onChange={props.onChangeEndDate}
            value={props.endDate}
          />
        </div>
        <div>
          상태
          <select onChange={props.onChangeState} value={props.isCompleted}>
            <option>진행상황</option>
            <option value="할 일">할일</option>
            <option value="진행중">진행중</option>
            <option value="완료">완료</option>
          </select>
        </div>
        <div>
          <h2>담당자</h2>
          <div onClick={props.onClickOpen}>
            <input type="text" readOnly value={props.manager} />
            <div>{props.isOpen ? <ManagerContainer /> : <></>}</div>
          </div>
        </div>
        <S.SaveBtn onClick={props.onClickAddTodo}>저장</S.SaveBtn>
      </S.MainWrapper>
    </>
  );
};

export default AddToDoPresenter;
