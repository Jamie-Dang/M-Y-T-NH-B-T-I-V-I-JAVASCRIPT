// Lấy phần tử HTML có id là "display" và gán cho biến 'screen'.
let screen = document.getElementById("display");

// Lấy tất cả các phần tử button và gán cho biến 'buttons'.
buttons = document.querySelectorAll("button");

// Khởi tạo một biến string để lưu trữ giá trị hiển thị trên màn hình.
let screenValue = "";

// Lặp qua từng phần tử trong NodeList 'buttons'.
for (item of buttons) {
  // Thêm sự kiện 'click' cho mỗi button.
  item.addEventListener("click", (e) => {
    // Lấy nội dung văn bản của button được nhấn.
    buttonText = e.target.innerText;

    // Kiểm tra nội dung của button và thực hiện hành động tương ứng.
    if (buttonText == "x") {
      // Nếu button là 'x', thay thế bằng '*' và cập nhật 'screenValue'.
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      // Nếu button là 'C', xóa hết nội dung 'screenValue'.
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      // Nếu button là '=', tính toán biểu thức trong 'screenValue'.
      var result;
      try {
        // Sử dụng 'eval()' để tính toán biểu thức.
        result = eval(screenValue);
      } catch (err) {
        // Nếu có lỗi, đặt 'result' là "Expression error".
        result = "Expression error";
      }
      // Cập nhật kết quả lên màn hình và xóa 'screenValue'.
      screen.value = result;
      screenValue = "";
    } else {
      // Nếu button khác, thêm nội dung vào 'screenValue' và cập nhật màn hình.
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
