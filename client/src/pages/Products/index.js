import React from "react";
import { useFormik } from 'formik';
import { Button, TextField } from "@mui/material";
import { ArtistSchema } from "../../validation/ArtistValidation"
import Swal from "sweetalert2";
import { posted } from "../../api/requiests";
import { useNavigate } from "react-router-dom";
import { useArtistContext } from "../../context/ArtistContext";

const Products= () => {
  const navigate = useNavigate();
  const[artists,setArtists] = useArtistContext();
  function handleSubmit(values, actions) {
    posted(values)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/artist');
    setArtists([...artists, values]);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      names: "",
    title:"",
      imageURL: "",
    

    },
    validationSchema: ArtistSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          marginTop:"300px",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          border: "1px solid #eee",
          width: "50%",
          height: "400px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="names"
          type="text"
          id="outlined-basic"
          value={formik.values.names}
          label="Artist Name"
          variant="outlined"
          error={formik.errors.names && formik.touched.names ? true : false}
        />
        {formik.errors.names && formik.touched.names && <p style={{color:'red'}}>{formik.errors.names}</p>}
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          type="text"
          value={formik.values.title}
          error={formik.errors.title && formik.touched.title ? true : false}
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
         {formik.errors.title && formik.touched.title && <p style={{color:'red'}}>{formik.errors.title}</p>}
       
      
     
        <Button
          style={{ display: "block", margin: "10px auto" }}
          type="submit"
          variant="contained"
          color="warning"
        >
          Add Artist
        </Button>
      </form>
    </div>
  );
};

export default Products;