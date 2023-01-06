import axios from "axios";
import { useEffect, useState } from "react";
import ToDoListPresenter from "./todolistPresenter";

const ToDoListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    (async () => {
      await ReadTodo();
    })();
    (async () => {
      await ReadInProgress();
    })();
    (async () => {
      await ReadDone();
    })();
  }, []);

  const ReadTodo = async () => {
    const { data } = await axios.get("http://localhost:4444/todos");
    setTodoList(data);
  };

  const ReadInProgress = async () => {
    const { data } = await axios.get("http://localhost:4444/working");
    setInProgress(data);
  };

  const ReadDone = async () => {
    const { data } = await axios.get("http://localhost:4444/done");
    setDone(data);
  };

  const onClickDeleteTodo = async (e) => {
    await axios.delete(`http://localhost:4444/todos/${e.target.id}`);
    await ReadTodo();
  };

  const onClickDeleteInProgress = async (e) => {
    await axios.delete(`http://localhost:4444/working/${e.target.id}`);
    await ReadInProgress();
  };

  const onClickDeleteDone = async (e) => {
    await axios.delete(`http://localhost:4444/done/${e.target.id}`);
    await ReadDone();
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickAddOpen = () => {
    setIsOpen(true);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <ToDoListPresenter
      onClickAddOpen={onClickAddOpen}
      onClickCancel={onClickCancel}
      isOpen={isOpen}
      todoList={todoList}
      inProgress={inProgress}
      done={done}
      onClickDeleteTodo={onClickDeleteTodo}
      onClickDeleteInProgress={onClickDeleteInProgress}
      onClickDeleteDone={onClickDeleteDone}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
    />
  );
};

export default ToDoListContainer;
