import React, { createContext, useState, useEffect } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import GioHangContextHookI from "../../models/GioHangContextHookType";
import SanPhamGioHangType from "../../models/SanPhamGioHangType";
import listDTJSON from "../../utils/danhSachDienThoai.json";

const GioHangHookContext = createContext<GioHangContextHookI>(
  {} as GioHangContextHookI
);
const { Provider } = GioHangHookContext;

const GioHangContextHookProvider = ({ ...props }) => {
  const [listSanPham] = useState<DienThoaiType[]>(listDTJSON);
  const [chitiet, setChitiet] = useState<DienThoaiType>({} as DienThoaiType);
  const [gioHang, setGioHang] = useState<Array<SanPhamGioHangType>>([]);

  useEffect(() => {
    if (gioHang) localStorage.setItem("gioHang", JSON.stringify(gioHang));
  }, [gioHang]);

  const findIndexById = (arr: SanPhamGioHangType[], id: number): number => {
    return arr.findIndex((sp: SanPhamGioHangType) => sp.id === id);
  };
  const handleXemChiTietSanPham = (sanpham: DienThoaiType): void => {
    setChitiet(sanpham);
  };

  const handleMuaSanPham = (sanpham: DienThoaiType): void => {
    const sanPhamGioHang: SanPhamGioHangType = {
      id: sanpham.id,
      name: sanpham.name,
      image: sanpham.image,
      price: sanpham.price,
      soLuong: 1,
    };

    const listGioHang: SanPhamGioHangType[] = [...gioHang];
    const index = findIndexById(listGioHang, sanPhamGioHang.id);

    index === -1
      ? listGioHang.push(sanPhamGioHang)
      : (listGioHang[index].soLuong += 1);
    setGioHang(listGioHang);
  };

  const handleXoaSanPham = (id: number): void => {
    const listGioHang: SanPhamGioHangType[] = [...gioHang];
    const index = findIndexById(listGioHang, id);
    index !== -1 && listGioHang.splice(index, 1);
    setGioHang(listGioHang);
  };

  const handleTangGiamSL = (id: number, bool: boolean): void => {
    const listGioHang: SanPhamGioHangType[] = [...gioHang];
    const index = findIndexById(listGioHang, id);
    if (index === -1) return;
    bool
      ? (listGioHang[index].soLuong += 1)
      : (listGioHang[index].soLuong -= 1);
    listGioHang[index].soLuong < 1 && listGioHang.splice(index, 1);
    setGioHang(listGioHang);
  };

  const handleSetGioHang = (data: SanPhamGioHangType[]): void => {
    setGioHang(data);
  };

  const store: GioHangContextHookI = {
    danhSachSanPham: listSanPham,
    chitietSanPham: chitiet,
    gioHang,
    xemChitietSanPham: handleXemChiTietSanPham,
    muaSanPham: handleMuaSanPham,
    xoaSanPham: handleXoaSanPham,
    tangGiamSL: handleTangGiamSL,
    setGioHang: handleSetGioHang,
  };

  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { GioHangContextHookProvider, GioHangHookContext };
