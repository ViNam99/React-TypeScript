import DienThoaiType from "./DienThoaiType";

interface GioHangContextI {
  danhSachDienThoai: DienThoaiType[];
  chitietSanPham: DienThoaiType;
  xemChitietSanPham?: (sanpham: DienThoaiType) => void;
}

export default GioHangContextI;
