import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../scss/products.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2/dist/sweetalert2";
import { Helmet } from "react-helmet";
import {
  deleteService,
  getAllServices,
  getIsDeleting,
  getStatus,
} from "../../features/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Services = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const services = useSelector(getAllServices);
  const isDeleting = useSelector(getIsDeleting);
  // const status = useSelector(getStatus);
  // const deleteSrv = useSelector(deleteService);
  const deleteHandler = (e, id) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteService(id));
        setTimeout(() => {
          window.location.reload(false);
        }, 700);
        if (isDeleting) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>service</title>
      </Helmet>
      <Link
        to={"/admin/service/create"}
        style={{
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Xidmət Yaratmaq
      </Link>
      <div>
        <Toaster />
      </div>
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
                  onClick={() => navigate(`/admin/services/${service.id}`)}
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
                      src={
                        "https://defendovb.az/api/v1/files?filepath=" +
                        service.image.filePath
                      }
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
                      onClick={(e) => deleteHandler(e, service.id)}
                    >
                      sil
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
