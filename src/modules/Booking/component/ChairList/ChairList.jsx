import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ChairList = ({ timeId }) => {
   const dispatch = useDispatch();
   const { bookingList } = useSelector((state) => state.movie);

   const {
      data: chairs,
      isLoading,
      error,
   } = useRequest(() => movieAPI.getChairList(timeId));

   if (!chairs) {
      return;
   }

   const handleSelect = (selectedChair) => {
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
                              : chair.isSelected
                              ? "#d10b0b"
                              : "",
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
               Gh??? th?????ng
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
               Gh??? VIP
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
               Gh??? ???? ?????t
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
               Gh??? ??ang ch???n
            </div>
         </div>
      </>
   );
};

export default ChairList;
