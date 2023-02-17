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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Settings() {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      address: "",
      instagram: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <label className="settings__label" htmlFor="address">
                  address
                </label>
              </TableCell>
              <TableCell align="right"></TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <input
                  className="settings__input"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </TableCell>
              <TableCell align="right">
                {" "}
                <input
                  className="settings__input"
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </TableCell>

              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <label className="settings__label" htmlFor="address">
                  email
                </label>
              </TableCell>
              <TableCell align="right"></TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <input
                  className="settings__input"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </TableCell>
              <TableCell align="right">
                {" "}
                <input
                  className="settings__input"
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </TableCell>

              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <button className="settings__button" type="submit">
        Submit
      </button>
    </form>
  );
}
