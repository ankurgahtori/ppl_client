import React from "react";
import { Link, Route } from "react-router-dom";
import AddCategoryComp from "./AddCategoryComp";
import ShowCategory from "./ShowCategory";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { categories: state.categoryReducer.categories };
};

function SideNavBar({ categories, history }) {
  let handleClick = () => {
    if (categories.length === 0) {
      alert("add category First");
    } else {
      history.push("/timeline/upload");
    }
  };
  return (
    <>
      <div className="content_rgt">
        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="/images/btn_iconb.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="/images/btn_sep.png" alt="sep" />
          </span>{" "}
          <Link to="/timeline/addCategory">Add Categories</Link>{" "}
        </div>
        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="/images/btn_icona.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="/images/btn_sep.png" alt="sep" />
          </span>{" "}
          <a onClick={handleClick}>Upload Post</a>{" "}
        </div>

        <Route
          exact
          path="/timeline/addCategory"
          render={p => <AddCategoryComp {...p} />}
        />
        <Route
          exact
          path="/(timeline|timeline/upload|timeline/addCategory)"
          render={p => <ShowCategory {...p} />}
        />

        <div className="rght_cate">
          <div className="rght_cate_hd" id="opn_cat_bg">
            Featured
          </div>
          <div className="sub_dwn">
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img alt="Img" src="/images/feat_img1.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
            </div>

            <div className="feat_sec">
              <div className="feat_sec_img">
                <img alt="Img" src="/images/feat_img3.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps, null)(SideNavBar);