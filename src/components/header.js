import {List} from "./list.js";


function Header(){
  return (
    <div className="navbar fixed-top">
      <div className="container">
        <div className="d-flex">
          <h2 className="logo">V</h2>
          <ul className="navigation">
            <List class="nav-item" name="Classes"/>
            <List class="nav-item" name="Teachers"/>
            <List class="nav-item" name="Price List"/>
            <List class="nav-item" name="About"/>
            <List class="nav-item" name="Contacts"/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export {Header};