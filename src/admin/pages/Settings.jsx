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
import { Swal } from "sweetalert2/dist/sweetalert2";
import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, settings: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

export default function Settings() {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };
  const navigate = useNavigate();

  const [{ loader, settings, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    settings: [],
  });
  const apiEndPoint = `https://defendovb.az/api/v1/settings`;
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
  const deleteService = async (e, id) => {
    const { accessToken } = JSON.parse(localStorage.getItem("user"));
    e.stopPropagation();
    await axios
      .delete(`https://defendovb.az/api/v1/settings/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        popUp("Oops...", "error", "Nəsə səhv getdi");
      });
  };
  return (
    <>
      <Link
        to={"/admin/setting/create"}
        style={{
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Setting Yartamaq
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
                      onClick={(e) => deleteService(e, setting.id)}
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
}
