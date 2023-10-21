import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function UpdateTask({ currentTask, onUpdate }) {
  // use "isUpdate" if value = boolean
  const {
    id: currentId,
    title: currentTitle,
    descr: currentDesc,
  } = currentTask;

  const [title, setTitle] = useState(currentTitle || "");
  const [descr, setDescr] = useState(currentDesc || "");

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

    onUpdate(currentId, title, descr);

    resetValues();
  };

  return (
    <div>
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

      <Button variant="contained" color="success" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
}
