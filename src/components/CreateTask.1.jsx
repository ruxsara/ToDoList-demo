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
        value={title}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={handleTitle}
      />

      <textarea
        rows={5}
        className="input"
        value={descr}
        onChange={handleDescr}
      />

      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
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
