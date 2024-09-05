interface IProductDetail {
    id: number;
    id_loai: number;
    ten_sp: string;
    slug: string;
    gia: number;
    gia_km: number;
    hinh: string;
    ngay: Date;
    luot_xem: number;
    ram: string;
    cpu: string;
    dia_cung: string;
    can_nang: string;
    mo_ta:string;
    ten_loai:string;
    mau_sac:string;
    hot: number;
    quantity?: number
}
export default IProductDetail;