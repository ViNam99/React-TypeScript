import DienThoaiType from "./DienThoaiType";
import SanPhamGioHangType from "./SanPhamGioHangType";

interface GioHangContextHookType {
  danhSachSanPham: DienThoaiType[];
  chitietSanPham?: DienThoaiType;
  gioHang?: Array<SanPhamGioHangType>;
  xemChitietSanPham?: (sanpham: DienThoaiType) => void;
  muaSanPham?: (sampham: DienThoaiType) => void;
  xoaSanPham?: (id: number) => void;
  tangGiamSL?: (id: number, bool: boolean) => void;
  setGioHang?: (data: Array<SanPhamGioHangType>) => void;
}
export default GioHangContextHookType;
