import mongoose from "mongoose"
// Khai báo 1 đối tượng rỗng có tên là `connection`, sử dụng để lưu trữ thông tin và kết nối cơ sở dữ liệu
const connection = {};
// Dòng này định nghĩa một hàm không đồng bộ có tên là `connectToDb`. Từ khoá async được sử dụng để chỉ định rằng
// Hàm này chứa các hoạt động không đồng bộ
export const connectToDb = async () => {
    try {
        // Kiểm tra xem đã kết nối chưa
        if(connection.isConnected) {
            console.log("Using existing connection");
            return;
          }
        // Thiết lập một kết nối đến cơ sở dữ liệu MongoDB 
        const db = await mongoose.connect(process.env.MONGO);
        // Cập nhập thuộc tính với trạng thái kết nối 
        // Thuộct tính readyState đại diện cho trạng thái hiện tại kết nối MongoDB
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        //Nếu có bất kỳ lỗi nào xảy ra trong quá trình thử nghiệm kết nối, 
        //nó sẽ được bắt và một lỗi sẽ được ném ra. Điều này đảm bảo rằng mọi vấn đề liên quan đến kết nối cơ sở dữ liệu được xử lý đúng cách.
        console.log(error);
        throw new Error(error);
    }
}