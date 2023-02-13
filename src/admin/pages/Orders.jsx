import React from "react";
import "../scss/orders.scss";

const Orders = () => {
  return (
    <div className="order">
      <div className="col-12 p-0">
        <table class="table ">
          <thead className="p-0">
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">product</th>
              <th scope="col">quantity</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <div className="my__box ">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>ayaqqabi</td>
                <td>2</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>pending</option>
                    <option value="1">sent</option>
                    <option value="2">faild</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </div>
          <div className="my__box ">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>ayaqqabi</td>
                <td>2</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>pending</option>
                    <option value="1">sent</option>
                    <option value="2">faild</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Orders;
