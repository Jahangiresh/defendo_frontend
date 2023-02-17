import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/products.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2/dist/sweetalert2";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, services: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const Services = () => {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };
  const navigate = useNavigate();

  const [{ loader, services, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    services: [],
  });
  const apiEndPoint = `http://defendo-001-site1.atempurl.com/api/v1/providedservices`;
  useEffect(() => {
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        popUp("Oops...", "error", "Nəsə səhf getdi");
      }
    };
    getItem();
  }, []);

  const { accessToken } = JSON.parse(localStorage.getItem("user"));

  const deleteService = async (e, id) => {
    e.stopPropagation();
    await axios
      .delete(`${apiEndPoint}/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        // window.location.reload(false);
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your imaginary file is safe :)",
                "error"
              );
            }
          });
      })
      .catch((err) => {
        popUp("Oops...", "error", "Nəsə səhv getdi");
      });
  };

  return (
    <>
      <Link
        to={"/admin/service/create"}
        style={{
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Xidmət Yartamaq
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Şəkil</TableCell>
              <TableCell>Başlıq</TableCell>
              <TableCell>Haqqında</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services &&
              services.map((service, index) => (
                <TableRow
                  onClick={() => {
                    window.location = `/admin/services/${service.id}`;
                  }}
                  style={{ cursor: "pointer" }}
                  key={service.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "50px" }}
                      src={"../api/v1/files?filepath=" + service.image.filePath}
                      alt=""
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {service.title.length > 20
                      ? service.title.slice(0, 20) + "..."
                      : service.title}
                  </TableCell>
                  <TableCell>
                    {service.description.length > 25
                      ? service.description.slice(0, 25) + "..."
                      : service.description}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteService(e, service.id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Services;
