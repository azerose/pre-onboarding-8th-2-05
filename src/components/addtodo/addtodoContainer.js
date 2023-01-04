import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { IsOpenState, ManagerState } from "../../commons/store";
import AddToDoPresenter from "./addtodoPresenter";

const AddToDoContainer = () => {
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
    />
  );
};

export default AddToDoContainer;
