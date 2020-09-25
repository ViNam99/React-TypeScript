import React, { useState } from "react";
import danhsachDTJSON from "../../utils/danhSachDienThoai.json";
import DienThoaiType from "../../models/DienThoaiType";
import SanPham from "./SanPham";
const DanhSachSanPham: React.FC = () => {
  const [danhSachDienThoai] = useState<DienThoaiType[]>(danhsachDTJSON);
  const renderListDienThoai = (): JSX.Element[] | undefined => {
    if (!danhSachDienThoai) return;
    return danhSachDienThoai.map((sanpham) => {
      return <SanPham sanpham={sanpham} key={sanpham.id} />;
    });
  };
  return <div className="row text-center">{renderListDienThoai()}</div>;
};

export default DanhSachSanPham;
