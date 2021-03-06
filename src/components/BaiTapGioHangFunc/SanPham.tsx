import React from "react";
import DienThoaiType from "../../models/DienThoaiType";
interface SanPhamProps {
  sanpham: DienThoaiType;
  key: number;
  handleXemChiTietSanPhamDS?: (sanpham: DienThoaiType) => void;
  handleMuaSanPhamDS?: (sanpham: DienThoaiType) => void;
}
const SanPham: React.FC<SanPhamProps> = (props) => {
  const { sanpham, handleXemChiTietSanPhamDS, handleMuaSanPhamDS } = props;
  const renderSanPham = (): JSX.Element => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={sanpham.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{sanpham.name}</h5>
          <p className="card-text">{sanpham.description}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-success mr-2"
            onClick={() => handleMuaSanPhamDS?.(sanpham)}
          >
            Mua
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={() => handleXemChiTietSanPhamDS?.(sanpham)}
          >
            Xem
          </button>
        </div>
      </div>
    );
  };
  return <div className="col-lg-4">{renderSanPham()}</div>;
};

export default SanPham;
