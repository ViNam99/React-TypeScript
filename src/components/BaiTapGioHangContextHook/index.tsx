import React, { useContext } from "react";
import { GioHangHookContext } from "../../common/context/GioHangContextHook";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

const BaiTapGioHangContextHook: React.FC = () => {
  const { chitietSanPham } = useContext(GioHangHookContext);

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
