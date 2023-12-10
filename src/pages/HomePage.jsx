import "../assets/css/nhat.css";
const HomePage = () => {
  return (
    <main>
      <div className="main-warpper">
        <div className="main-content">
          <div className="logo">
            <img src="/public/logo.png" alt="" />
          </div>
          <div className="avatar">
            <div className="avatar__img"></div>
            <span className="avatar__edit">
              <i className="fa-solid fa-pencil"></i>
            </span>
          </div>

          <div className="form-name">
            <form action="" className="mx-auto">
              <div className="mx-auto">
                {/* <label for="" className="d-inline-block">Biệt danh</label>  */}

                <div className="form-name__input">
                  <input type="text" placeholder="Quyết thắng" />
                  <span className="form-name__edit">
                    <i className="fa-solid fa-pencil"></i>
                  </span>
                </div>
              </div>
              <div className="btn d-flex mt-4">
                <div>
                  <button className="btn-create mr-5">Tạo phòng</button>
                </div>
                <div className="btn__room">
                  <button className="btn-enter d-block">Vào phòng</button>
                  <span className="mt-2 d-block">
                    <input type="text" placeholder="Nhập mã phòng" />
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="account mt-4 d-flex">
            <div>
              <a href="">Đăng ký ngay</a>
            </div>
            <div>
              <a href="">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
