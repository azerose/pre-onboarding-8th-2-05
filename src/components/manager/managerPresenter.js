import ManagerList from "../managerlist/managerlist";

const ManagerPresenter = (props) => {
  return (
    <>
      <input type="text" onChange={props.onChangeManager} />
      {props.managerList?.map((manager) => (
        <div key={manager.id}>
          <ManagerList manager={manager} onClickSelect={props.onClickSelect} />
        </div>
      ))}
    </>
  );
};

export default ManagerPresenter;
