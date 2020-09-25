import React, { Component } from "react";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";
import DienThoaiType from "../../models/DienThoaiType";
import SanPhamGioHangType from "../../models/SanPhamGioHangType";

interface StateI {
  chitietSanPham: DienThoaiType;
  gioHang: SanPhamGioHangType[];
}
class BaiTapGioHangClass extends Component<{}, StateI> {
  constructor(props: {}) {
    super(props);
    this.state = {
      chitietSanPham: {} as DienThoaiType,
      gioHang: [],
    };
  }
  componentDidMount() {
    const data = localStorage.getItem("gioHang");
    if (data !== null)
      this.setState({
        gioHang: JSON.parse(data),
      });
  }

  componentDidUpdate(prevProps: any, prevState: any): void {
    if (prevState.gioHang !== this.state.gioHang) {
      return localStorage.setItem(
        "gioHang",
        JSON.stringify(this.state.gioHang)
      );
    }
  }

  findIndexByID = (arr: SanPhamGioHangType[], id: number): number => {
    return arr.findIndex((sp: SanPhamGioHangType) => sp.id === id);
  };

  handleXemChiTiet = (sanpham: DienThoaiType): void => {
    this.setState({
      chitietSanPham: sanpham,
    });
  };

  handleMuaSanPham = (sanpham: DienThoaiType): void => {
    const sanPhamGioHang: SanPhamGioHangType = {
      id: sanpham.id,
      name: sanpham.name,
      image: sanpham.image,
      price: sanpham.price,
      soLuong: 1,
    };
    const listGioHang: SanPhamGioHangType[] = [...this.state.gioHang];
    const index = this.findIndexByID(listGioHang, sanPhamGioHang.id);
    index === -1
      ? listGioHang.push(sanPhamGioHang)
      : (listGioHang[index].soLuong += 1);

    this.setState({
      gioHang: listGioHang,
    });
  };

  handleTangGianSL = (id: number, bool: boolean): void | null => {
    const listGioHang: SanPhamGioHangType[] = [...this.state.gioHang];
    const index = this.findIndexByID(listGioHang, id);
    if (index === -1) return null;
    if (bool) listGioHang[index].soLuong += 1;
    if (!bool) listGioHang[index].soLuong -= 1;
    if (listGioHang[index].soLuong < 1) listGioHang.splice(index, 1);
    this.setState({
      gioHang: listGioHang,
    });
  };

  handleXoaSanPham = (id: number) => {
    const listGioHang: SanPhamGioHangType[] = [...this.state.gioHang];
    const index = this.findIndexByID(listGioHang, id);
    if (index !== -1) listGioHang.splice(index, 1);
    this.setState({
      gioHang: listGioHang,
    });
  };
  render() {
    const { chitietSanPham, gioHang } = this.state;

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
        <DanhSachSanPham
          handleXemChiTietRoot={this.handleXemChiTiet}
          handleMuaSanPhamRoot={this.handleMuaSanPham}
        />

        {Object.keys(chitietSanPham).length > 0 && (
          <ChitietSanPham chitiet={chitietSanPham} />
        )}

        <ModalSanPham
          gioHang={gioHang}
          handleTangGiamSLRoot={this.handleTangGianSL}
          handleXoaSanPhamRoot={this.handleXoaSanPham}
        />
      </>
    );
  }
}
export default BaiTapGioHangClass;
