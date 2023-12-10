import "../assets/css/nhat.css";
const RegisterPage = () => {
  return (
    <div>
      <main>
      <div className="register row" style={{ height: '650px' }}>
          <div className="icon-back">
            <i className="fa-regular fa-circle-left"></i>
            <a href="login.html">Quay lại</a>
          </div>
          <div>
            <img src="public/logo.png" alt="" />
          </div>
          <form action="" className="form-register">
            <div className="field">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Nhập username"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Nhập email"
              />
              <input
                type="password"
                name="username"
                id="username"
                placeholder="Nhập mật khẩu"
              />
              <input
                type="password"
                name="username"
                id="username"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <button className="btn-register">Đăng ký</button>
            <div className="form-text">
              <p className="text-content">
                <span>Bạn đã có tài khoản, </span> <a href="">Đăng nhập</a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
