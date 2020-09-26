import DienThoaiType from "./DienThoaiType";
import SanPhamGioHangType from "./SanPhamGioHangType";

interface GioHangContextHookType {
  danhSachSanPham: DienThoaiType[];
  chitietSanPham?: DienThoaiType;
  gioHang?: Array<SanPhamGioHangType>
  xemChitietSanPham?: (sanpham: DienThoaiType) => void;
  muaSanPham?: (sampham: DienThoaiType) => void;
}
export default GioHangContextHookType;
