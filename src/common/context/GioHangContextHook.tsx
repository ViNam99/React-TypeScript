import React, { createContext, useState } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import GioHangContextHookType from "../../models/GioHangContextHookType";
import listDTJSON from "../../utils/danhSachDienThoai.json";

const GioHangHookContext = createContext({});
const { Consumer, Provider } = GioHangHookContext;

const GioHangContextHookProvider = ({ ...props }) => {
  const [listSanPham] = useState<DienThoaiType[]>(listDTJSON);

  const store: GioHangContextHookType = {
    danhSachSanPham: listSanPham,
  };
  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { Consumer, GioHangContextHookProvider };
