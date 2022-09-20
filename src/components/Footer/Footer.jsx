import React from "react";

const Footer = () => {
   return (
      <>
         <div className="m-container d-flex mt-5 mb-3">
            <div className="col-5 d-flex align-items-center">
               <h1>Cyber Movie</h1>
            </div>
            <div className="col-7 d-flex">
               <div className="col-6 text-secondary">
                  <h6 className="mb-4">TIX</h6>
                  <p>FAQ</p>
                  <p>Brand Guidelines</p>
                  <p>Thỏa thuận sử dụng</p>
                  <p>Chính sách ảo mật</p>
               </div>
               <div className="col-6 text-secondary">
                  <h6 className="mb-4">Đối tác</h6>
                  <p>CGV</p>
                  <p>BHD</p>
                  <p>Lotte Cinema</p>
                  <p>Galaxy Cinema</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
