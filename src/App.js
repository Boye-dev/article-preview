import React, {useState} from 'react';
import drawers from './drawers.jpg'
import mitchelle from './mitchelle.jpg';
import share from './share.svg';
function App() {



const [isMouseOver,setIsMouseOver]= useState(false);

const show=()=>{
  setIsMouseOver(true);
}
const disable=()=>{
  setIsMouseOver(false);
}


  return (
    <div>
<div className="cont">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <img className="draw" src={drawers}/>
      </div>
      <div className="col-lg-7">
        <div className="cont-b">
<p className="par">Shift the overall look and feel by adding these wonderful
  touches to furniture in your home</p>
  <p className="txt">Ever been in a room and felt like something was missing? Perhaps
  it felt slightly bare and uninviting. I’ve got some simple tips
  to help you make any room feel complete.</p>
  <div className="row">
    <div className="col-3">
        <img className="mit" src={mitchelle}/>
    </div>
    <div className="col-3">
      <p className="name">Michelle Appleton</p>
      <p className="date">28 Jun 2020</p>
    </div>
<div className="col-6">
  <div>
    <div className="text-right icon">
<i class="fas fa-share"
   onMouseOver={show}
   onMouseOut={disable}
  ></i>
    </div>
    <div className="content-part" style={{visibility :isMouseOver&&"visible"}}>
    <span className="share">SHARE</span>
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-pinterest"></i>
    <i class="fab fa-twitter"></i>
    <i class="fas fa-caret-down"></i>
    </div>
  </div>


</div>
</div>

</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
