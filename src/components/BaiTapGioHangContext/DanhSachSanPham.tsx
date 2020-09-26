import React, { Component } from "react";
import { Consumer } from "../../common/context/GioHangContext";
import DienThoaiType from "../../models/DienThoaiType";
import SanPham from "./SanPham";

class DanhSachSanPham extends Component {
  renderDanhSachSanPham = (
    danhSachDienThoai: Array<DienThoaiType>
  ): JSX.Element[] | undefined => {
    if (danhSachDienThoai.length < 0) return;
    return danhSachDienThoai.map((sanpham) => {
      return <SanPham sanpham={sanpham} key={sanpham.id} />;
    });
  };
  render() {
    return (
      <div className="row text-center">
        <Consumer>
          {(context): React.ReactNode => {
            return <>{this.renderDanhSachSanPham(context.danhSachDienThoai)}</>;
          }}
        </Consumer>
      </div>
    );
  }
}
export default DanhSachSanPham;
