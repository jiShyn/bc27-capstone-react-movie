import axiosClient from "./axiosClient";

const ticketAPI = {
	bookingTicket: (timeId, bookingList) => {
		const bookingObj = {
			maLichChieu: timeId,
			danhSachVe: bookingList
		}
		return axiosClient.post('QuanLyDatVe/DatVe', bookingObj)
	}
}

export default ticketAPI