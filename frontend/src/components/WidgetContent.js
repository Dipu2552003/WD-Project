import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="./img/img2.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>TEDxVITPune </h5>
          <p>In the upcoming month the TEDxVITpune is coming up with their event</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
