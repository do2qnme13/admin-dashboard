import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/charts/Charts";
import "./single.scss";
import List from "../../components/table/Table";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="../../src/img/p1.jpeg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Bluga</h1>
                <div className="detailItem">
                  <span className="itemkey">Email:</span>
                  <span className="itemValue">blugawoola@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemValue">+95-123-456-789</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address:</span>
                  <span className="itemValue">Sahchaung,NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue">Spain</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transitions</h1>

          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
