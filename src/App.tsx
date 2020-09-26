import React from "react";
import { GioHangContextHookProvider } from "./common/context/GioHangContextHook";
import BaiTapGioHangContextHook from "./components/BaiTapGioHangContextHook";
// import { GioHangProvider } from "./common/context/GioHangContext";
// import BaiTapGioHangContext from "./components/BaiTapGioHangContext";
// import BaiTapGioHangFunc from "./components/BaiTapGioHangFunc";
// import BaiTapGioHangClass from "./components/BaiTapGioHangClass";
const App: React.FC = () => {
  return (
    <div className="container my-3">
      {/* <BaiTapGioHangClass /> */}
      {/* <BaiTapGioHangFunc/> */}
      {/* <GioHangProvider>
        <BaiTapGioHangContext />
      </GioHangProvider> */}

      <GioHangContextHookProvider>
        <BaiTapGioHangContextHook />
      </GioHangContextHookProvider>
    </div>
  );
};

export default App;
