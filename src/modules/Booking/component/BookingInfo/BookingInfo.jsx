import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import ticketAPI from "apis/ticketAPI";
import { notification } from "antd";

const BookingInfo = ({ timeId }) => {
   const dispatch = useDispatch();
   const {
      data: chairs,
      isLoading,
      error,
   } = useRequest(() => movieAPI.getChairList(timeId));

   const { selectedChairs } = useSelector((state) => state.movie);
   // console.log('selectedChairs dưới useSelector', selectedChairs)

   const totalPay = selectedChairs.reduce(
      (total, value) => (total += value.giaVe),
      0
   );

   const handleBooking = async (selectedChairs) => {
      if (!selectedChairs) return;

      // console.log("maLichChieu", timeId);
      // console.log("bookingList input 2", bookingList);

      const newSelectedChairs = selectedChairs.map((item) => {
         if (!item.daDat) {
            item.daDat = !item.daDat;
         }
         // console.log("item.daDat", item.daDat);
         return item;
      });

      // console.log("newBookingList", newBookingList);

      try {
         await ticketAPI.bookingTicket(timeId, newSelectedChairs);
         // //thành công
         // dispatch({ type: "remove"});
         console.log("đặt vé thành công");
         notification.success({
            message: "Đặt vé thành công",
         });
      } catch (error) {
         notification.error({
            message: "Đặt vé thất bại",
            description: error,
         });
      }
   };

   return (
      <div className="border border-dark border-2 rounded-2 p-3">
         <h4 className="py-3 border-bottom border-dark border-1 text-dark text-center">
            {chairs?.thongTinPhim.tenPhim}
         </h4>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span>Ngày khởi chiếu :</span>{" "}
            <span>
               {chairs?.thongTinPhim.ngayChieu} {chairs?.thongTinPhim.gioChieu}
            </span>{" "}
         </div>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span> Cụm Rạp :</span> <span></span>
            {chairs?.thongTinPhim.tenCumRap}
         </div>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span>Rạp : </span> <span>{chairs?.thongTinPhim.tenRap}</span>{" "}
         </div>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span>Ghế chọn :</span>{" "}
            <span>
               {selectedChairs?.map((chair) => {
                  return <span key={chair.maGhe}>{chair.tenGhe}, </span>;
               })}
            </span>
         </div>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span>Ưu đãi : </span>
         </div>
         <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
            <span>Tổng Tiền :</span> <span>{totalPay}</span>
         </div>
         <button
            className="my-3  btn-style w-100 fs-5"
            onClick={() => {
               handleBooking(selectedChairs);
            }}
         >
            ĐẶT VÉ
         </button>
      </div>
   );
};
export default BookingInfo;
