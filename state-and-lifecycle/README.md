## STATE
1. Là trạng thái của component.
2. Khai báo các giá trị cần lưu trữ của riêng Component đó
3. Gọi state: this.state.key

## Lifecycle Methods
**componentWillMount** đây là method sẽ được thực thi trước khi 1 component được render trên cả server side và client side.

**componentDidMount** method này được thực thi khi 1 component được render trên client side. Đây là nơi các hàm AJAX requests, DOM or update state được thực thi. Method này cũng đucợ sử dụng để kết nối với các JS Framework khác và các function với delayed execution như setTimeout or setInterval.

**componentWillReceiveProps** sẽ được thực thi ngay khi thuộc tính props (tìm hiểu props là gì?) được update và trước khi component được render lại. Trong ví dụ dưới, ta sẽ sử dung method này vùng với setNewNumber để update state.

**shouldComponentUpdate** sẽ trả về kết quả true or false. Phương thức này sẽ xác định 1 component có được update hay không. Mặc định giá trị này là true. Nếu bạn không muốn component render lại sau khi update state hay props thì return giá trị thành false. Các bạn xem ví dụ dưới để hiểu rõ.

**componentWillUpdate** được gọi khi chúng ta update state của component trước khi nó render lại.

**componentDidUpdate** sau khi componentWillUpdate ở trên được gọi xong thì đến lượt thằng này được goi.

**componentWillUnmount** được gọi khi chúng ta unmout 1 component kiểu như xóa nó khỏi react.
