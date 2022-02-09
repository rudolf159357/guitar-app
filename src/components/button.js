

function Button(props){
  return(
    <button className={`btn ${props.class}`}>{props.value}</button>
  );
  
}


export {Button};