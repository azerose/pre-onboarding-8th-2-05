import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { IsOpenState, ManagerState } from "../../commons/store";
import AddToDoPresenter from "./addtodoPresenter";

const AddToDoContainer = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(IsOpenState);
  const [manager, setManager] = useRecoilState(ManagerState);

  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const onChangeState = (e) => {
    setIsCompleted(e.target.value);
  };

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const onClickAddTodo = async () => {
    if (isCompleted === "진행중") {
      await axios.post("http://localhost:4444/working", {
        title,
        description,
        endDate,
        isCompleted,
        manager,
      });
      setDescription("");
      setTitle("");
      setEndDate("");
      setIsCompleted("");
      setManager("");
    }
    if (isCompleted === "완료") {
      await axios.post("http://localhost:4444/done", {
        title,
        description,
        endDate,
        isCompleted,
        manager,
      });
      setDescription("");
      setTitle("");
      setEndDate("");
      setIsCompleted("");
      setManager("");
    } else {
      await axios.post("http://localhost:4444/todos", {
        title,
        description,
        endDate,
        isCompleted,
        manager,
      });
      setDescription("");
      setTitle("");
      setEndDate("");
      setIsCompleted("");
      setManager("");
    }
  };

  const onClickUpdate = async (e) => {
    await axios.request({
      url: `http://localhost:4444/todos/${e.target.id}`,
      method: "put",
      data: {
        title,
        description,
        endDate,
        isCompleted,
        manager,
      },
    });
  };

  return (
    <AddToDoPresenter
      onChangeEndDate={onChangeEndDate}
      onClickAddTodo={onClickAddTodo}
      onChangeTitle={onChangeTitle}
      onChangeDesc={onChangeDesc}
      onChangeState={onChangeState}
      onClickOpen={onClickOpen}
      isOpen={isOpen}
      manager={manager}
      description={description}
      title={title}
      endDate={endDate}
      isCompleted={isCompleted}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
    />
  );
};

export default AddToDoContainer;
