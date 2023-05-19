import React from "react";
import { RiAddFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { TbReload } from "react-icons/tb";
import "./simpleswap.css";

function SimpleSwap() {
  return (
    <div className="simple-swap">
      <div className="top-menu">
        <div className="left">
          <a href="">Swap</a>
          <a href="">Limit</a>
          <a href="">P2P</a>
        </div>
  
        <div className="right">
          <div className="btn reload-btn">
            <TbReload size={24} color="white" />
          </div>
          <div className="btn add-btn">
            <RiAddFill size={24} color="white" />
          </div>
          <div className="btn swap-setting-btn">
            <VscSettings size={24} color="white" />
            <div class="card card-cascade narrower">

  

</div>


          </div>
        </div>
      </div>




  <div class="card text-white bg-black mb-3" style={{"max-width": "18rem;",}}>
    
  <div class="card-body">
  <p class="card-title">You sell</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
  
  <div class="card text-white bg-dark " style={{"max-width": "18rem;"}}>
 
  <div class="card-body">
    <p class="card-title">You Buy</p>
    <select  class="select bg-black text-white ">
  <option value="1"><image src={"https://ethereum.org/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg"}></image>One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
</select>
  </div>
  </div>
    </div>
  );
}

export default SimpleSwap;
