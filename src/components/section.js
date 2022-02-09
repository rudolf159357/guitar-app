import {Button} from "./button.js";

function Section(){
  return (
    <div className="content">
      <div className="container">
        <small className="place">SLOVAKIA</small>
        <h1 className="title">Learning guitar the easy way</h1>
        <p className="text">Guitar lessons for everyone who wants learn music in a fun and enjoyable way</p>
        <Button class="try-btn" value="TRY FREE LESSON"/>
        <Button class="watch-btn" value="WATCH VIDEO"/>
        <Button class="scroll-btn" value="SCROLL DOWN"/>

      </div>
    </div>
  );
}

export {Section};