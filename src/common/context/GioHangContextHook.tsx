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
  const [chitiet, setChitiet] = useState<DienThoaiType>({} as DienThoaiType);
  const handleXemChiTietSanPham = (sanpham: DienThoaiType): void => {
    setChitiet(sanpham);
  };

  const store: GioHangContextHookI = {
    danhSachSanPham: listSanPham,
    chitietSanPham: chitiet,
    xemChitietSanPham: handleXemChiTietSanPham,
  };

  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { GioHangContextHookProvider, GioHangHookContext };
