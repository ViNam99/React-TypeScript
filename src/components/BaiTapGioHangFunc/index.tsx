import React, { useState } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

const BaiTapGioHangFunc: React.FC = () => {
  const [chitetSP, setchitietSP] = useState<DienThoaiType>({} as DienThoaiType);
  const handleXemChiTietSanPham = (sannpham: DienThoaiType) => {
    setchitietSP(sannpham);
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
      <DanhSachSanPham handleXemChiTietSanPhamRoot={handleXemChiTietSanPham} />

      {Object.keys(chitetSP).length ? (
        <ChitietSanPham chitiet={chitetSP} />
      ) : (
        <p className="text-center text-danger p-5">Không có sản phẩm nào</p>
      )}

      <ModalSanPham />
    </>
  );
};

export default BaiTapGioHangFunc;
