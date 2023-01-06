import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { IsOpenState, ManagerState } from "../../commons/store";
import ManagerPresenter from "./managerPresenter";

const ManagerContainer = () => {
  const [managerList, setManagerList] = useState([]);
  const [, setIsOpen] = useRecoilState(IsOpenState);
  const [manager, setManager] = useRecoilState(ManagerState);
  const [managerValue, setManagerValue] = useState("");

  const ReadManager = async () => {
    const { data } = await axios.get("http://localhost:4444/manager");
    const result = data.filter((el) => el.name.includes(managerValue));
    setManagerList(result);
    console.log(result);
  };
  useEffect(() => {
    (async () => {
      await ReadManager();
    })();
  }, [managerValue]);

  useEffect(() => {
    setIsOpen((prev) => !prev);
  }, [manager]);

  const onClickSelect = (e) => {
    setManager(e.currentTarget.id);
  };

  const onChangeManager = (e) => {
    setManagerValue(e.target.value);
  };

  return (
    <ManagerPresenter
      managerList={managerList}
      onClickSelect={onClickSelect}
      onChangeManager={onChangeManager}
      managerValue={managerValue}
    />
  );
};

export default ManagerContainer;
