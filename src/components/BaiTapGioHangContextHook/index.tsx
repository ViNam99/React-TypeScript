import React from "react";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

const BaiTapGioHangContextHook:React.FC = () => {
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

      {/* {Object.keys(chitetSP).length ? (
            
          ) : (
            <p className="text-center text-danger p-5">Không có sản phẩm nào</p>
          )} */}
      <ChitietSanPham />

      <ModalSanPham />
    </>
  );
};

export default BaiTapGioHangContextHook;
