import React from "react";
import BaiTapGioHangFunc from "./components/BaiTapGioHangFunc";
// import BaiTapGioHangClass from "./components/BaiTapGioHangClass";
const App: React.FC = () => {
  return (
    <div className="container my-3">
      {/* <BaiTapGioHangClass /> */}
      <BaiTapGioHangFunc/>
    </div>
  );
};

export default App;
