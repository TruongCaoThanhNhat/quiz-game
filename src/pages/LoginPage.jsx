import "../assets/css/nhat.css";
const LoginPage = () => {
    return (
        <>
             <main>
      <div className="login row">
        <div className="icon-back">
          <i className="fa-regular fa-circle-left"></i>
          <a href="">Quay lại</a>
        </div>
        <div><img src="public/logo.png" alt="" /></div>
        <form action="" className="form-login">
          <div className="field">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="username"
              id="username"
              placeholder="Password"
            />
          </div>
          <button className="btn-login">Đăng nhập</button>
          <div className="form-text">
            <p className="text-content">
              <span>Bạn chưa có tài khoản, </span>
              <a href="register.html">Đăng ký ngay</a>
            </p>
            <a href="forgot.html">Quên mật khẩu</a>
          </div>
        </form>
      </div>
    </main>
        </>
    );
};

export default LoginPage;