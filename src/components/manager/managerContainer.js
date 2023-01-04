import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { IsOpenState, ManagerState } from "../../commons/store";
import ManagerPresenter from "./managerPresenter";

const ManagerContainer = () => {
  const [managerList, setManagerList] = useState([]);
  const [, setIsOpen] = useRecoilState(IsOpenState);
  const [manager, setManager] = useRecoilState(ManagerState);

  const ReadManager = async () => {
    const { data } = await axios.get("http://localhost:4444/manager");
    setManagerList(data);
  };
  useMemo(() => {
    (async () => {
      await ReadManager();
    })();
  }, []);

  useEffect(() => {
    setIsOpen((prev) => !prev);
  }, [manager]);

  const onClickSelect = (e) => {
    setManager(e.currentTarget.id);
  };

  return (
    <ManagerPresenter managerList={managerList} onClickSelect={onClickSelect} />
  );
};

export default ManagerContainer;
