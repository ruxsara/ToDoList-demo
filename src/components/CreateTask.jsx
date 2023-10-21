import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function CreateTask({ onCreate }) {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescr = (event) => {
    setDescr(event.target.value);
  };

  const resetValues = () => {
    setTitle("");
    setDescr("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreate(title, descr);

    resetValues();
  };

  return (
    <form>
      <TextField
        required
        value={title}
        label="Title"
        variant="outlined"
        defaultValue=""
        onChange={handleTitle}
        margin="5"
        style={{ width: "100%", margin: 5 }}

      />

      <TextField
        required
        label="Description"
        multiline
        rows={5}
        defaultValue=""
        value={descr}
        onChange={handleDescr}
        style={{ width: "100%", margin: 5 }}

      />

      <Button
        variant="contained"
        size="large"
        color="success"
        onClick={handleSubmit}
      >
        Create
      </Button>
    </form>
  );
}
