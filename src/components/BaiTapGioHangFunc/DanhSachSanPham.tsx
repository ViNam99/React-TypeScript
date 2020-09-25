import React, { useState } from "react";
import danhsachDTJSON from "../../utils/danhSachDienThoai.json";
import DienThoaiType from "../../models/DienThoaiType";
import SanPham from "./SanPham";

interface DanhSachSanPhamProps {
  handleXemChiTietSanPhamRoot?: (sanpham: DienThoaiType) => void;
}
const DanhSachSanPham: React.FC<DanhSachSanPhamProps> = (props) => {
  const [danhSachDienThoai] = useState<DienThoaiType[]>(danhsachDTJSON);
  const { handleXemChiTietSanPhamRoot } = props;
  const handleXemChiTietSanPham = (sanpham: DienThoaiType) => {
    handleXemChiTietSanPhamRoot?.(sanpham);
  };
  const renderListDienThoai = (): JSX.Element[] | undefined => {
    if (!danhSachDienThoai) return;
    return danhSachDienThoai.map((sanpham) => {
      return (
        <SanPham
          sanpham={sanpham}
          key={sanpham.id}
          handleXemChiTietSanPhamDS={handleXemChiTietSanPham}
        />
      );
    });
  };
  return <div className="row text-center">{renderListDienThoai()}</div>;
};

export default DanhSachSanPham;
