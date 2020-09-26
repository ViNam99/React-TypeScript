import DienThoaiType from "./DienThoaiType";
import SanPhamGioHangType from "./SanPhamGioHangType";

interface GioHangContextI {
  danhSachDienThoai: DienThoaiType[];
  chitietSanPham: DienThoaiType;
  xemChitietSanPham?: (sanpham: DienThoaiType) => void;
  muaSanPham?: (sanpham: DienThoaiType) => void;
  gioHang: Array<SanPhamGioHangType>;
  xoaSanPham?: (id: number) => void;
}

export default GioHangContextI;
