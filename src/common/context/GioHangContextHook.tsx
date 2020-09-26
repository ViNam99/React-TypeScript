import React, { createContext, useState } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import GioHangContextHookI from "../../models/GioHangContextHookType";
import listDTJSON from "../../utils/danhSachDienThoai.json";

const GioHangHookContext = createContext<GioHangContextHookI>(
  {} as GioHangContextHookI
);
const { Provider } = GioHangHookContext;

const GioHangContextHookProvider = ({ ...props }) => {
  const [listSanPham] = useState<DienThoaiType[]>(listDTJSON);

  const store: GioHangContextHookI = {
    danhSachSanPham: listSanPham,
  };
  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { GioHangContextHookProvider, GioHangHookContext };
