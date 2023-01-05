import { useState } from "react";
import ToDoListPresenter from "./todolistPresenter";

const ToDoListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickAddOpen = () => {
    setIsOpen(true);
  };
  return <ToDoListPresenter onClickAddOpen={onClickAddOpen} isOpen={isOpen} />;
};

export default ToDoListContainer;
