import React, { useState } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import SanPhamGioHangType from "../../models/SanPhamGioHangType";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

const BaiTapGioHangFunc: React.FC = () => {
  const [chitetSP, setchitietSP] = useState<DienThoaiType>({} as DienThoaiType);
  const [gioHang, setGiohang] = useState<SanPhamGioHangType[]>([]);

  const findIndexByID = (arr: SanPhamGioHangType[], id: number): number => {
    return arr.findIndex((sp: SanPhamGioHangType) => sp.id === id);
  };

  const handleXemChiTietSanPham = (sannpham: DienThoaiType): void => {
    setchitietSP(sannpham);
  };
  const handleMuaSanPham = (sanpham: DienThoaiType): void => {
    const sanPhamGioHang: SanPhamGioHangType = {
      id: sanpham.id,
      name: sanpham.name,
      image: sanpham.image,
      price: sanpham.price,
      soLuong: 1,
    };
    const listGioHang = [...gioHang];
    const index = findIndexByID(listGioHang, sanPhamGioHang.id);
    index !== -1
      ? (listGioHang[index].soLuong += 1)
      : listGioHang.push(sanPhamGioHang);
    setGiohang(listGioHang);
  };

  return (
    <>
      <h2 className="text-center p-5 bg-dark text-light">Bài Tập Giỏ Hàng</h2>
      <p
        className="text-right text-danger "
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ cursor: "pointer" }}
      >
        Giỏ Hàng (0)
      </p>
      <DanhSachSanPham
        handleXemChiTietSanPhamRoot={handleXemChiTietSanPham}
        handleMuaSanPhamRoot={handleMuaSanPham}
      />

      {Object.keys(chitetSP).length ? (
        <ChitietSanPham chitiet={chitetSP} />
      ) : (
        <p className="text-center text-danger p-5">Không có sản phẩm nào</p>
      )}

      <ModalSanPham gioHang={gioHang} />
    </>
  );
};

export default BaiTapGioHangFunc;
