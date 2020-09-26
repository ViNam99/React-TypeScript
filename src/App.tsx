import React from "react";
import { GioHangProvider } from "./common/context/GioHangContext";
import BaiTapGioHangContext from "./components/BaiTapGioHangContext";
// import BaiTapGioHangFunc from "./components/BaiTapGioHangFunc";
// import BaiTapGioHangClass from "./components/BaiTapGioHangClass";
const App: React.FC = () => {
  return (
    <div className="container my-3">
      {/* <BaiTapGioHangClass /> */}
      {/* <BaiTapGioHangFunc/> */}
      <GioHangProvider>
        <BaiTapGioHangContext />
      </GioHangProvider>
    </div>
  );
};

export default App;
