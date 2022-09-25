import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ChairList = ({ timeId }) => {
   const dispatch = useDispatch();
   const {
      data: chairs,
      isLoading,
      error,
   } = useRequest(() => movieAPI.getChairList(timeId));

   if (!chairs) {
      return;
   } else {
      const chairList = chairs.danhSachGhe;
      console.log(chairList);

      dispatch({ type: "getChair", chairList });
   }

   // const [isSelected, setIsSelected] = useState(false);
   // const [isBooked, setIsBooked] = useState(false);

   const handleSelect = (selectedChair) => {
      // console.log(selectedChair);

      if (selectedChair.daDat) {
         return;
      } else {
         dispatch({ type: "select", selectedChair });
      }
   };
   //  console.log(bookingList);
   return (
      <>
         <div className=" py-5 d-flex">
            <div className="col-1">
               <div className="d-flex flex-column">
                  <p className=" chair-col">A</p>
                  <p className=" chair-col">B</p>
                  <p className=" chair-col">C</p>
                  <p className=" chair-col">D</p>
                  <p className=" chair-col">E</p>
                  <p className=" chair-col">F</p>
                  <p className=" chair-col">G</p>
                  <p className=" chair-col">H</p>
                  <p className=" chair-col">I</p>
                  <p className=" chair-col">J</p>
               </div>
            </div>
            <div className="col-11 d-flex flex-wrap">
               {chairs?.danhSachGhe?.map((chair) => {
                  return (
                     <button
                        onClick={() => handleSelect(chair)}
                        className="chairs"
                        key={chair.maGhe}
                        style={{
                           backgroundColor: chair.daDat
                              ? "#e6b908"
                              : chair.loaiGhe === "Vip"
                              ? "#2deb0c"
                              : // : isSelected
                                // ? "#d10b0b"
                                "",
                           cursor: chair.daDat ? "not-allowed" : "pointer",
                        }}
                     >
                        {chair.stt}
                     </button>
                  );
               })}
            </div>
         </div>
         <div className="d-flex flex-row">
            <div className="me-3">
               <div
                  style={{
                     display: "inline-block",
                     width: "24px",
                     height: "24px",
                     backgroundColor: "#514e4e",
                  }}
                  className="rounded-1"
               ></div>{" "}
               Ghế thường
            </div>
            <div className="me-3">
               <div
                  style={{
                     display: "inline-block",
                     width: "24px",
                     height: "24px",
                     backgroundColor: "#2deb0c",
                  }}
                  className="rounded-1"
               ></div>{" "}
               Ghế VIP
            </div>
            <div className="me-3">
               <div
                  style={{
                     display: "inline-block",
                     width: "24px",
                     height: "24px",
                     backgroundColor: "#e6b908",
                  }}
                  className="rounded-1"
               ></div>{" "}
               Ghế đã đặt
            </div>
            <div className="me-3">
               <div
                  style={{
                     display: "inline-block",
                     width: "24px",
                     height: "24px",
                     backgroundColor: "#d10b0b",
                  }}
                  className="rounded-1"
               ></div>{" "}
               Ghế đang chọn
            </div>
         </div>
      </>
   );
};

export default ChairList;
