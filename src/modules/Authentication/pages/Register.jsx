import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

// data: taiKhoan, matKhau, email, hoTen, soDt

const Register = () => {
   const {
      // register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm({
      defaultValues: {
         taiKhoan: "",
         matKhau: "",
         email: "",
         hoTen: "",
         soDt: "",
      },
      // Chế độ kích hoạt validation, mặc định là onSubmit
      mode: "onTouched",
   });
   const navigate = useNavigate();

   const { data: handleRegister, isLoading } = useRequest(
      (values) => authAPI.register(values),
      { isManual: true }
   );

   const onSubmit = async (values) => {
      try {
         await handleRegister(values);
         // Sau khi đăng ký thành công, ta cần chuyển user về trang login
         navigate("/login");
      } catch (error) {
         // Đăng ký thất bại show error ra cho user thấy
         notification.error({
            message: "Đăng ký thất bại",
            description: error,
         });
      }
   };

   const onError = (error) => {
      console.log(error);
   };

   // return (
   //    <div className="logo-register">
   //       <h1>Đăng Ký</h1>
   //       <form
   //          className="form-register"
   //          onSubmit={handleSubmit(onSubmit, onError)}
   //       >
   //          <div>
   //             <input
   //                className="form-control mb-3"
   //                type="text"
   //                placeholder="Tài Khoản"
   //                {...register("taiKhoan", {
   //                   required: {
   //                      value: true,
   //                      message: "Tài khoản không được để trống",
   //                   },
   //                   minLength: {
   //                      value: 5,
   //                      message: "Tài khoản phải từ 5 đến 20 ký tự",
   //                   },
   //                   maxLength: {
   //                      value: 20,
   //                      message: "Tài khoản phải từ 5 đến 20 ký tự",
   //                   },
   //                })}
   //             />
   //             {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
   //          </div>

   //          <div>
   //             <input
   //                className="form-control mb-3"
   //                type="text"
   //                placeholder="Mật Khẩu"
   //                {...register("matKhau", {
   //                   required: {
   //                      value: true,
   //                      message: "Mật khẩu không được để trống",
   //                   },
   //                })}
   //             />
   //             {errors.matKhau && <p>{errors.matKhau.message}</p>}
   //          </div>

   //          <div>
   //             <input
   //                className="form-control mb-3"
   //                type="text"
   //                placeholder="Email"
   //                {...register("email", {
   //                   required: {
   //                      value: true,
   //                      message: "Email không được để trống",
   //                   },
   //                   pattern: {
   //                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
   //                      message: "Email không đúng định dạng",
   //                   },
   //                })}
   //             />
   //             {errors.email && <p>{errors.email.message}</p>}
   //          </div>

   //          <div>
   //             <input
   //                className="form-control "
   //                type="text"
   //                placeholder="Họ Tên"
   //                {...register("hoTen", {
   //                   required: {
   //                      value: true,
   //                      message: "Họ tên không được để trống",
   //                   },
   //                })}
   //             />
   //             {errors.hoTen && <p>{errors.hoTen.message}</p>}
   //          </div>
   //          <br />
   //          <div>
   //             <input
   //                className="form-control mb-3"
   //                type="text"
   //                placeholder="Số Điện Thoại"
   //                {...register("soDt", {
   //                   required: {
   //                      value: true,
   //                      message: "Số Điện Thoại không được để trống",
   //                   },
   //                })}
   //             />
   //             {errors.soDt && <p>{errors.soDt.message}</p>}
   //          </div>
   //          <br />
   //          <button className="btn btn-success">Đăng Ký</button>
   //       </form>
   //    </div>
   // );

   return (
      <div className="register">
         <Form
            className="form-register"
            onFinish={handleSubmit(onSubmit)}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 8 }}
         >
            <h1 className="text-center text-black">Đăng Ký</h1>

            <Controller
               name="taiKhoan"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Tài khoản không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input
                        placeholder="Tài khoản"
                        size="small"
                        type="text"
                        {...field}
                     />
                  </Form.Item>
               )}
            />
            <Controller
               name="matKhau"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Mật Khẩu không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input.Password
                        placeholder="Mật Khẩu"
                        size="small"
                        type="password"
                        {...field}
                     />
                  </Form.Item>
               )}
            />
            <Controller
               name="email"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Email không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input
                        placeholder="Email"
                        size="small"
                        type="email"
                        {...field}
                     />
                  </Form.Item>
               )}
            />
            <Controller
               name="hoTen"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Họ tên không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input
                        placeholder="Họ và tên"
                        size="small"
                        type="text"
                        {...field}
                     />
                  </Form.Item>
               )}
            />
            <Controller
               name="soDt"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Số điện thoại không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input
                        placeholder="Số điện thoại"
                        size="small"
                        type="number"
                        {...field}
                     />
                  </Form.Item>
               )}
            />

            <Form.Item>
               <div className="text-center mt-3">
                  <Button
                     type="primary"
                     htmlType="submit"
                     disabled={isLoading}
                     loading={isLoading}
                  >
                     Đăng Ký
                  </Button>
               </div>
            </Form.Item>

            <Form.Item>
               <div className="text-end fs-1">
                  <Button
                     type="link"
                     size="small"
                     onClick={() => navigate("/login")}
                  >
                     Bạn đã có tài khoản. Đăng nhập ngay!
                  </Button>
               </div>
            </Form.Item>
         </Form>
      </div>
   );
};

export default Register;

// import React from 'react';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// /* eslint-disable no-template-curly-in-string */

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
// /* eslint-enable no-template-curly-in-string */

// const Register = () => {
//   const onFinish = (values) => {
//     console.log(values);
//   };

//   return (
//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item
//         name={['user', 'name']}
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={['user', 'email']}
//         label="Email"
//         rules={[
//           {
//             type: 'email',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={['user', 'age']}
//         label="Age"
//         rules={[
//           {
//             type: 'number',
//             min: 0,
//             max: 99,
//           },
//         ]}
//       >
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'website']} label="Website">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'introduction']} label="Introduction">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Register;
