import React, { Component, createContext } from "react";
import DienThoaiType from "../../models/DienThoaiType";
import listDTJson from "../../utils/danhSachDienThoai.json";

interface GioHangContextI {
  danhSachDienThoai: DienThoaiType[];
}

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
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, GioHangProvider };
