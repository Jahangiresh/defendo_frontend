import React from "react";
import "../scss/settings.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const MainInfo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="MainInfo">
        <div>
          <Modal
            style={{
              border: "none",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <textarea
                placeholder="iframe kodunu bura daxil edin !"
                style={{ width: "100%", padding: "20px", outline: "none" }}
                type="text"
              />
              <button
                style={{
                  background: "green",
                  border: "none",
                  width: "100%",
                  marginTop: "20px",
                  color: "#ffff",
                }}
              >
                save
              </button>
            </Box>
          </Modal>
        </div>{" "}
        <div className="settings__title">
          <h3 className="settings__title__h m-0">title:</h3>
          <input
            style={{ marginLeft: "14px" }}
            className="settings__title__edit_inputs"
            type="text"
          />
        </div>{" "}
      </div>{" "}
      <div className="MainInfo">
        {" "}
        <div className="settings__title">
          <h3 className="settings__title__h m-0">description:</h3>
          <input
            style={{ marginLeft: "14px" }}
            className="settings__title__edit_inputs"
            type="text"
          />
        </div>{" "}
      </div>{" "}
      <div className="MainInfo">
        {" "}
        <div className="settings__title">
          <h3 className="settings__title__h m-0">Keywords:</h3>
          <input
            style={{ marginLeft: "14px" }}
            className="settings__title__edit_inputs"
            type="text"
          />
        </div>{" "}
      </div>{" "}
      <div className="MainInfo">
        {" "}
        <div className="settings__title">
          <h3 className="settings__title__h m-0">Main address:</h3>
          <input
            style={{ marginLeft: "14px" }}
            className="settings__title__edit_inputs"
            type="text"
          />
        </div>{" "}
      </div>
      <div className="MainInfo__row row">
        <div className="MainInfo__row__col col-4">
          <h3 className="MainInfo__row__col__title">email</h3>
          <input className="MainInfo__row__col__input" type="email" />
        </div>{" "}
        <div className="MainInfo__row__col col-4">
          <h3 className="MainInfo__row__col__title">telefon mobil</h3>
          <input className="MainInfo__row__col__input" type="number" />
        </div>{" "}
        <div className="MainInfo__row__col col-4">
          <h3 className="MainInfo__row__col__title">telefon seher</h3>
          <input className="MainInfo__row__col__input" type="number" />
        </div>{" "}
        <div className="MainInfo__row__col col-4">
          <h3 className="MainInfo__row__col__title">logo</h3>
          <input className="MainInfo__row__col__input" type="file" />
        </div>{" "}
        <div
          for="mapInput"
          onClick={handleOpen}
          name="mapInput"
          style={{
            backgroundColor: "#7a00d5",
            color: "#fff",
            cursor: "pointer",
          }}
          className="MainInfo__row__col col-4"
        >
          <h1 className="m-0">add iFrame</h1>
        </div>{" "}
        <div className="MainInfo__row__col col-4">
          <h3 className="MainInfo__row__col__title">favicon </h3>
          <input className="MainInfo__row__col__input" type="file" />
        </div>{" "}
      </div>
      <div className="MainInfo__row__iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1011211860427!2d49.97273460982863!3d40.340102742240376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064d35ad50583%3A0x9b3f57d79832c3da!2zWsSxxJ8sIEJha8SxLCBBesmZcmJheWNhbg!5e0!3m2!1saz!2s!4v1674813761382!5m2!1saz!2s"
          width="100%"
          height="300"
          style={{ borderRadius: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <button className="save__button">save</button>
    </>
  );
};

export default MainInfo;
