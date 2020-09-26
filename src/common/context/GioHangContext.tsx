import React, { Component, createContext } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import listDTJson from "../../utils/danhSachDienThoai.json";
import GioHangContextI from "../../models/GioHangContextType";

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
    };
  }

  handleXemChiTietSanPham = (sanpham: DienThoaiType): void => {
    this.setState({
      chitietSanPham: sanpham,
    });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, GioHangProvider };
