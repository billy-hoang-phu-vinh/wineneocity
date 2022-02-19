import React from "react";

function CategoryPromotion() {
  return (
    <div className="container mx-auto">
      <div className="d-flex justify-between position-relative">
        <div className="d-flex flex-col item-center width-100 ">
          <div className=" border-top-bottom-1px width-100 d-flex ">
            <div className="width-100  d-flex flex-col item-center height-100 padding-8px">
            <div className="categoryPromo justify-center width-100 d-flex flex-wrap flex-row item-center">
             <div className="category_title">Wines & Spirits</div>
            

                
              </div>
              <div className="categoryPromo justify-center width-100 d-flex flex-wrap flex-row item-center">
                <div className="card">
                    <div className="d-flex flex-col item-center">
                    <a href="./page/product/whisky">
                    <img
                      src={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Whiskey_%2831031085%29.jpeg"}
                      alt=""
                    />
                  </a>
                  <div className="categoryName">Whisky</div>

                    </div>
             
                </div>
                <div className="card">
                    <div className="d-flex flex-col item-center">
                    <a href="./page/product/redwine">
                    <img
                      src={"https://static.onecms.io/wp-content/uploads/sites/23/2021/11/30/red-wine-health-benefits.jpg"}
                      alt=""
                    />
                  </a>
                  <div className="categoryName">Red wine</div>

                    </div>
             
                </div>
                <div className="card">
                    <div className="d-flex flex-col item-center">
                    <a href="./page/product/whiskey">
                    <img
                      src={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Whiskey_%2831031085%29.jpeg"}
                      alt=""
                    />
                  </a>
                  <div className="categoryName">Whisky</div>

                    </div>
             
                </div>
                <div className="card">
                    <div className="d-flex flex-col item-center">
                    <a href="./page/product/whiskey">
                    <img
                      src={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Whiskey_%2831031085%29.jpeg"}
                      alt=""
                    />
                  </a>
                  <div className="categoryName">Whisky</div>

                    </div>
             
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryPromotion;
