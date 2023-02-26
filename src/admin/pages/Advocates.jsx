import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import "../scss/adminadvocates.scss";
import LoadingBox from "../../components/LoadingBox";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

import {
  getAllAdvocates,
  getStatus,
  getIsDeleting,
  deleteAdvocate,
} from "../../features/teamSlice";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Advocates() {
  const navigate = useNavigate();
  const advocates = useSelector(getAllAdvocates);
  const status = useSelector(getStatus);
  const isDeleting = useSelector(getIsDeleting);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
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
        dispatch(deleteAdvocate(id));
        window.location.reload(false);

        if (isDeleting) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <TableContainer component={Paper} className="adminadvocates">
      <div>
        <Toaster />
      </div>
      <Helmet>
        <title>lawyers</title>
      </Helmet>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">
              <span>edit</span>/<span>delete</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {advocates.map((advocate) => (
            <TableRow
              key={advocate.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  className="adminadvocates__img"
                  src={`https://defendovb.az/api/v1/files?filepath=${advocate.image.filePath}`}
                  alt=""
                />
              </TableCell>
              <TableCell align="right">
                {advocate.firstName} {advocate.lastName}
              </TableCell>
              <TableCell align="right">{advocate.email}</TableCell>
              <TableCell align="right" className="adminadvocates__icons">
                <AiOutlineEdit
                  onClick={() => navigate(`/admin/advocates/${advocate.id}`)}
                  className="edit__icons"
                />
                <AiOutlineDelete
                  onClick={() => handleDelete(advocate.id)}
                  className="edit__icons"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button
        onClick={() => navigate("/admin/advocates/create")}
        className="adminadvocates__add"
      >
        vəkil əlavə et <AiOutlinePlusCircle className="plus__icon" />
      </button>
    </TableContainer>
  );
}
