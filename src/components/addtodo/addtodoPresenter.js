import ManagerContainer from "../manager/managerContainer";

const AddToDoPresenter = (props) => {
  return (
    <>
      <div>
        <div>
          <h2>제목</h2>
          <input type="text" onChange={props.onChangeTitle} />
        </div>
        <div>
          <h2>내용</h2>
          <textarea onChange={props.onChangeDesc} />
        </div>
        <div>
          <h2>마감일</h2>
          <input type="datetime-local" onChange={props.onChangeEndDate} />
        </div>
        <div>
          상태
          <select onChange={props.onChangeState}>
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
            <div>{props.isOpen && <ManagerContainer />}</div>
          </div>
        </div>
        <button onClick={props.onClickAddTodo}>저장</button>
      </div>
    </>
  );
};

export default AddToDoPresenter;
