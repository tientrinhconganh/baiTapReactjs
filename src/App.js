import React from 'react';
import './App.css';
// import BaiTap1 from "./Bai-tap1"
// import Baitap2 from "./Bai-tap2"
// import Baitap3 from "./Bai-tap3"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import RenderingElements from "./rendering-element"
import HandlingEvent from "./handling-event"
import ExampleHandlingEvent from "./handling-event/example"
import State from "./state"
import ListKey from "./listKey"
import BaiTapCar from "./Baitap-car"
import BaitapList from "./Bai-tap-list"

function App() {
  return (
    <div >
      <div>
        {/* <BaiTap1 /> */}
        {/* <Baitap2/> */}
        {/* <Baitap3/> */}
        {/* <RenderingElements/>
        <hr/>
        <HandlingEvent/>
        <hr/>
        <ExampleHandlingEvent/>
        <hr/>
        <State/>
        <hr/>
        <ListKey/>
        <hr/>
        <BaiTapCar/> */}

        <BaitapList/>
      </div>
    </div>
  );
}

export default App;
