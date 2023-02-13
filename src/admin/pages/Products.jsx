import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/products.scss";
const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="products">
      <div className="col-12 p-0">
        <table class="table ">
          <thead className="p-0">
            <tr>
              <th scope="col">#</th>
              <th scope="col">sekil</th>
              <th scope="col">ad</th>
              <th className="d-none d-md-block " scope="col">
                say
              </th>
              <th className="d-none d-md-block " scope="col">
                qiymet
              </th>
              <th className="d-none d-md-block " scope="col">
                status
              </th>
              <th>edit</th>
            </tr>
          </thead>
          <div className="my__box ">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="image__td">
                  <img
                    src="https://i.pinimg.com/originals/cc/f5/66/ccf56662158c2d0c6cff1a6eee971628.png"
                    alt=""
                  />
                </td>
                <td>ayaqqabi</td>
                <td className="d-none d-md-block ">343</td>
                <td className="d-none d-md-block ">100azn</td>

                <td className="d-none d-md-block ">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>active</option>
                    <option value="1">deactive</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => navigate("/productdetails")}
                    className="border-0 bg-light"
                  >
                    edit
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Products;
