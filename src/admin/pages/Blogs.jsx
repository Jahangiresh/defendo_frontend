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

import parse from "html-react-parser";

import {
  getAllBlogs,
  deleteBlog,
  getStatus,
  getIsDeleting,
} from "../../features/blogSlice";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blogs() {
  const navigate = useNavigate();
  const blogs = useSelector(getAllBlogs);
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
        dispatch(deleteBlog(id));
        setTimeout(() => {
          window.location.reload(false);
        }, 700);
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
      <Helmet>
        <title>blogs</title>
      </Helmet>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">body</TableCell>
            <TableCell align="right">
              <span>edit</span>/<span>delete</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow
              key={blog.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  className="adminadvocates__img"
                  src={`https://defendovb.az/api/v1/files?filepath=${blog.image.filePath}`}
                  alt="img"
                />
              </TableCell>
              <TableCell align="left">
                {blog.title > 20 ? blog.title.slice(0, 20) + "..." : blog.title}
              </TableCell>
              <TableCell align="left">
                {parse(blog.body) > 25
                  ? parse(blog.body).slice(0, 25) + "..."
                  : parse(blog.body)}
              </TableCell>
              <TableCell align="right" className="adminadvocates__icons">
                <AiOutlineEdit
                  onClick={() => navigate(`/admin/blogs/${blog.id}`)}
                  className="edit__icons"
                />
                <AiOutlineDelete
                  onClick={() => handleDelete(blog.id)}
                  className="edit__icons"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button
        onClick={() => navigate("/admin/blogs/create")}
        className="adminadvocates__add"
      >
        blog əlavə et <AiOutlinePlusCircle className="plus__icon" />
      </button>
    </TableContainer>
  );
}
