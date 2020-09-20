import React, { Component } from "react";
import danhsachDTJSON from "../../utils/danhSachDienThoai.json";
import SanPham from "./SanPham";
import DienThoaiType from "../../models/SanPhamState";

export interface DannhSachDienThoaiState {
  listDienThoai: DienThoaiType[];
}

class DanhSachSanPham extends Component<{}, DannhSachDienThoaiState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listDienThoai: danhsachDTJSON,
    };
  }

  renderDanhSachSP = (): JSX.Element[] | null => {
    const { listDienThoai } = this.state;
    let result = null;
    if (!listDienThoai) return result;
    return (result = listDienThoai.map((sp) => {
      return <SanPham sanpham={sp} key={sp.id} />;
    }));
  };
  render() {
    return <div className="row text-center">{this.renderDanhSachSP()}</div>;
  }
}
export default DanhSachSanPham;
