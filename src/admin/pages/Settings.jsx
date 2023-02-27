import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import "../scss/settings.scss";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSetting,
  getAllSetting,
  isDeleting,
} from "../../features/settingSlice";
import { Helmet } from "react-helmet";

export default function Settings() {
  const settings = useSelector(getAllSetting);
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
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
        dispatch(deleteSetting(id));
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
        <title>setting</title>
      </Helmet>
      <Link
        to={"/admin/setting/create"}
        style={{
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Setting Yaratmaq
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Açar söz</TableCell>
              <TableCell>Şəkil & Dəyər</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {settings &&
              settings.map((setting, index) => (
                <TableRow
                  onClick={() => {
                    window.location = `/admin/setting/${setting.id}`;
                  }}
                  style={{ cursor: "pointer" }}
                  key={setting.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {setting.key}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {setting.image ? (
                      <img
                        style={{ width: "50px" }}
                        src={
                          "https://defendovb.az/api/v1/files?filepath=" +
                          setting.image.filePath
                        }
                        alt=""
                      />
                    ) : (
                      setting.value
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(e, setting.id)}
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
}
