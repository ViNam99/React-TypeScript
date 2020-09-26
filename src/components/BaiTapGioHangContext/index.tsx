import React, { Component } from "react";
import { Consumer } from "../../common/context/GioHangContext";
import ChitietSanPham from "./ChitietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";

class BaiTapGioHangContext extends Component {
  render() {
    return (
      <>
        <h2 className="text-center p-5 bg-dark text-light">
          Bài Tập Giỏ Hàng Context
        </h2>
        <p
          className="text-right text-danger "
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ cursor: "pointer" }}
        >
          Giỏ Hàng (0)
        </p>
        <DanhSachSanPham />

        <Consumer>
          {(context) =>
            context && Object.keys(context.chitietSanPham).length > 0 ? (
              <ChitietSanPham chitiet={context.chitietSanPham} />
            ) : (
              <p className="text-center text-danger p-5">
                Không có sản phẩm nào
              </p>
            )
          }
        </Consumer>

        <ModalSanPham />
      </>
    );
  }
}
export default BaiTapGioHangContext;
