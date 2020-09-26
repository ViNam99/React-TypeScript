import React, { Component } from "react";
import DienThoaiType from "../../models/DienThoaiType";
interface SanPhamProps {
  sanpham?: DienThoaiType;
}
class SanPham extends Component<SanPhamProps> {
  renderSanPham = (): JSX.Element => {
    const { sanpham } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={sanpham?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{sanpham?.name}</h5>
          <p className="card-text">{sanpham?.description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mr-2">Mua</button>
          <button className="btn btn-primary ml-2">Xem</button>
        </div>
      </div>
    );
  };
  render() {
    return <div className="col-lg-4">{this.renderSanPham()}</div>;
  }
}
export default SanPham;
