const ManagerList = (props) => {
  return (
    <>
      <div id={props.manager.name} onClick={props.onClickSelect}>
        {props.manager.name}
      </div>
    </>
  );
};

export default ManagerList;
