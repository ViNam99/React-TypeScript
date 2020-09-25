import React, { Component } from "react";
import danhsachDTJSON from "../../utils/danhSachDienThoai.json";
import SanPham from "./SanPham";
import DienThoaiType from "../../models/DienThoaiType";

export interface DannhSachDienThoaiState {
  listDienThoai: DienThoaiType[];
}

export interface DanhSachDienThoaiProps {
  handleXemChiTietRoot?: (sanpham: DienThoaiType) => void;
  handleMuaSanPhamRoot?: (sanpham: DienThoaiType) => void;
}

class DanhSachSanPham extends Component<
  DanhSachDienThoaiProps,
  DannhSachDienThoaiState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      listDienThoai: danhsachDTJSON,
    };
  }

  handleXemChiTiet = (sanpham: DienThoaiType): void => {
    const { handleXemChiTietRoot } = this.props;
    handleXemChiTietRoot?.(sanpham);
  };

  handleMuaSanPham = (sanpham: DienThoaiType): void => {
    const { handleMuaSanPhamRoot } = this.props;
    handleMuaSanPhamRoot?.(sanpham);
  };

  renderDanhSachSP = (): JSX.Element[] | null => {
    const { listDienThoai } = this.state;
    let result = null;
    if (!listDienThoai) return result;
    return (result = listDienThoai.map((sp) => {
      return (
        <SanPham
          sanpham={sp}
          key={sp.id}
          handleXemChiTietDS={this.handleXemChiTiet}
          handleMuaSanPhamDS={this.handleMuaSanPham}
        />
      );
    }));
  };
  render() {
    return <div className="row text-center">{this.renderDanhSachSP()}</div>;
  }
}
export default DanhSachSanPham;
