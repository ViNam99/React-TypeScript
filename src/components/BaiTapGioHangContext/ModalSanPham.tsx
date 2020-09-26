import React, { Component } from "react";
import { Consumer } from "../../common/context/GioHangContext";
import GioHangContextI from "../../models/GioHangContextType";

class ModalSanPham extends Component {
  renderSanPhamTrongGioHang = (context: GioHangContextI): JSX.Element[] => {
    const { gioHang, xoaSanPham } = context;
    return gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.id}</td>
          <td>{sp.name}</td>
          <td>
            <img src={sp.image} alt="img" width="50px" height="50px" />
          </td>
          <td>
            <button className="btn btn-primary mr-2">-</button>
            {sp.soLuong}
            <button className="btn btn-primary ml-2">+</button>
          </td>
          <td>{sp.price}</td>
          <td>{sp.price * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaSanPham?.(sp.id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ Hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <Consumer>
                        {(context) =>
                          context && (
                            <>{this.renderSanPhamTrongGioHang(context)}</>
                          )
                        }
                      </Consumer>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ModalSanPham;
