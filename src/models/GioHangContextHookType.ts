import DienThoaiType from "./DienThoaiType";

interface GioHangContextHookType {
  danhSachSanPham: DienThoaiType[];
  chitietSanPham?: DienThoaiType;
  xemChitietSanPham?: (sanpham: DienThoaiType) => void
}
export default GioHangContextHookType;
