function Bag(props)
{
  const style = {
    color: 'red',
    border: '1px solid black'
  };
  return (
    <div style={style}>
        {props.children[0]}
        {props.children}
    </div>
  );
}

export default Bag;