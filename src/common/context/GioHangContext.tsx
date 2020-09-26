import React, { Component, createContext } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import listDTJson from "../../utils/danhSachDienThoai.json";
import GioHangContextI from "../../models/GioHangContextType";
import SanPhamGioHangType from "../../models/SanPhamGioHangType";

interface GioHangContextState extends GioHangContextI {}

interface GioHangProps {
  children?: React.ReactNode;
}

const GioHangContext = createContext<GioHangContextI>({} as GioHangContextI);

const { Consumer, Provider } = GioHangContext;

class GioHangProvider extends Component<GioHangProps, GioHangContextState> {
  constructor(props: GioHangProps) {
    super(props);
    this.state = {
      danhSachDienThoai: listDTJson,
      chitietSanPham: {} as DienThoaiType,
      xemChitietSanPham: this.handleXemChiTietSanPham,
      muaSanPham: this.handleMuaSanPham,
      gioHang: [],
    };
  }

  findIndexById = (arr: SanPhamGioHangType[], id: number): number => {
    return arr.findIndex((sp: SanPhamGioHangType) => sp.id === id);
  };

  handleXemChiTietSanPham = (sanpham: DienThoaiType): void => {
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
    const index = this.findIndexById(listGioHang, sanPhamGioHang.id);
    index === -1
      ? listGioHang.push(sanPhamGioHang)
      : (listGioHang[index].soLuong += 1);
    this.setState({
      gioHang: listGioHang,
    });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, GioHangProvider };
