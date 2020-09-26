import DienThoaiType from "./DienThoaiType";
import SanPhamGioHangType from "./SanPhamGioHangType";

interface GioHangContextI {
  danhSachDienThoai: DienThoaiType[];
  chitietSanPham: DienThoaiType;
  xemChitietSanPham?: (sanpham: DienThoaiType) => void;
  muaSanPham?: (sanpham: DienThoaiType) => void;
  gioHang: Array<SanPhamGioHangType>;
  xoaSanPham?: (id: number) => void;
  tangGiamSL?: (id: number, bool: boolean) => void;
}

export default GioHangContextI;
