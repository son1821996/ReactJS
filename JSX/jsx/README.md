##JSX
1. Viết theo kiểu XML. Thay thế cho React.createElement()
2. Thuộc tính class => className
3. Không đặt dấu ngoặc kép quanh dấu ngoặc nhọn khi nhúng một biểu thức JavaScript trong một thuộc tính. Nếu không, JSX sẽ coi thuộc tính là một chuỗi chữ chứ không phải là một biểu thức. Bạn nên sử dụng dấu ngoặc kép (cho giá trị chuỗi) hoặc dấu ngoặc nhọn (cho các biểu thức), nhưng không phải cả hai trong cùng một thuộc tính.
4. Nếu một thẻ trống, bạn có thể đóng nó lại ngay lập tức với />, như XML:
