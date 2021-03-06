import React, { useContext } from "react";
import { GioHangHookContext } from "../../common/context/GioHangContextHook";
import DienThoaiType from "../../models/DienThoaiType";

interface SanPhamPropsI {
  sanpham: DienThoaiType;
  key?: number;
}
const SanPham: React.FC<SanPhamPropsI> = ({ ...props }) => {
  const { sanpham } = props;
  const { xemChitietSanPham, muaSanPham } = useContext(GioHangHookContext);
  const renderSanPham = (): JSX.Element => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={sanpham?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{sanpham?.name}</h5>
          <p className="card-text">{sanpham?.description}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-success mr-2"
            onClick={() => muaSanPham?.(sanpham)}
          >
            Mua
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={() => xemChitietSanPham?.(sanpham)}
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
