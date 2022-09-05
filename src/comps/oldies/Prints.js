function Help(props) {
  return (
    <div className="printOutput">
      {props.keY} : <b>{props.app_data[props.keY]}</b>
      <br />
    </div>
  );
}

export function Printprops(props) {
  let arr = [];
  for (let key of Object.keys(props.app_data[props.dateIndex])) {
    let helpProps = {
      app_data: props.app_data[props.dateIndex],
      keY: key,
    };

    arr.push(<Help {...helpProps} />);
  }

  return <div>{arr}</div>;
}
