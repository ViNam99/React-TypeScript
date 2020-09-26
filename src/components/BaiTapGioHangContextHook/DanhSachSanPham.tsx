import React, { useContext } from "react";
import { GioHangHookContext } from "../../common/context/GioHangContextHook";
import DienThoaiType from "../../models/DienThoaiType";
import SanPham from "./SanPham";

const DanhSachSanPham: React.FC = () => {
  const { danhSachSanPham } = useContext(GioHangHookContext);
  const renderDanhSachSanPham = (): JSX.Element[] | undefined => {
    if (danhSachSanPham.length < 0) return;
    return danhSachSanPham.map(
      (sanpham: DienThoaiType): JSX.Element => {
        return <SanPham sanpham={sanpham} key={sanpham.id} />;
      }
    );
  };
  return <div className="row text-center">{renderDanhSachSanPham()}</div>;
};

export default DanhSachSanPham;
