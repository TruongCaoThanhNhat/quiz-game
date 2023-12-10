import "../assets/css/nhat.css";
const ForgotPage = () => {
    return (
        <div>
             <main>
      <div className="login row">
        <div className="icon-back">
          <i className="fa-regular fa-circle-left"></i>
          <a href="login.html">Quay lại</a>
        </div>
        <div><img src="public/logo.png" alt="" /></div>
        <form action="" className="form-login">
          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Nhập email đã đăng ký"
            />
          </div>
          <button className="btn-login">Xác nhận</button>
          <div className="form-text">
            <p className="text-content">
              <span>Bạn đã có tài khoản, </span>
              <a href="login.html">Đăng nhập ngay</a>
            </p>
          </div>
        </form>
      </div>
    </main>
        </div>
    );
};

export default ForgotPage;