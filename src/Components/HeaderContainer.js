function Heading() {
  return (
    <div className="header-container">
      <div className="promotion-bar-top">
        <div className="container mx-auto text-center padding-top-left-5px text-white">
          <p className="text-14 mx-auto-0">Valentine promotion available*</p>
        </div>
      </div>
      <div className="header-bar-navigation">
        <div className="container mx-auto">
          <div className="d-flex justify-between">
            <div className="logo">
              <a className="inline-block" href="http://">
                <img
                  className="width-70-px"
                  src={require("../img/logo.png")}
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-bar">
              <form className="flex width-100">
                <div className="search-form width-100 d-flex padding-top-bottom-dot5">
                  <div className="position-relative width-100 padding-top-left-5px d-flex flex-row">
                    <button className="search-submit" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                    {/* <img className="width-7-px" src={require('../img/logo.png')} alt="" srcset="" /> */}
                    <div className="flex-basis-80">
                      <input className="search-input width-100"></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="user-header-bar d-flex justify-end position-relative">
              <div className="width-35-px padding-top-bottom-dot5">
                <i class="fa fa-user-o scale-1-3" aria-hidden="true"></i>
              </div>
              <div className="padding-top-bottom-dot5">
                <i
                  class="fa fa-shopping-basket scale-1-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-category">
        <div className="container mx-auto">
          <div className="d-flex justify-between position-relative">
            <div className="d-flex item-center width-100">
              <div className="width-25">
                <div>
                  Shop all categories
                </div>
              </div>
              <div className="d-flex flex-1 justify-between">
                <div className="item-center d-flex">
                  <div>Brands</div>
                  <a href="/pages/promotion">Promotions</a>
                  <div>Wineneocity Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Heading;
