import React, { useContext } from "react";
import { GioHangHookContext } from "../../common/context/GioHangContextHook";
import SanPhamGioHangType from "../../models/SanPhamGioHangType";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

const BaiTapGioHangContextHook: React.FC = () => {
  const { chitietSanPham, gioHang } = useContext(GioHangHookContext);

  const totalSanPham = gioHang?.reduce(
    (total: number, spGioHang: SanPhamGioHangType): number => {
      return (total += spGioHang.soLuong);
    },
    0
  );

  return (
    <>
      <h2 className="text-center p-5 bg-dark text-light">Bài Tập Giỏ Hàng</h2>
      <p
        className="text-right text-danger "
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ cursor: "pointer" }}
      >
        Giỏ Hàng ({totalSanPham})
      </p>
      <DanhSachSanPham />

      {chitietSanPham && Object.keys(chitietSanPham).length ? (
        <ChitietSanPham chitiet={chitietSanPham} />
      ) : (
        <p className="text-center text-danger p-5">Không có sản phẩm nào</p>
      )}

      <ModalSanPham />
    </>
  );
};

export default BaiTapGioHangContextHook;
