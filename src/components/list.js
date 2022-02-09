

function List(props){
  return(
    <li className={props.class}><a href="#">{props.name}</a></li>
  );
 
}

export {List};