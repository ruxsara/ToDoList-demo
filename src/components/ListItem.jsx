import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import UpdateTask from "./UpdateTask";

export const ListItem = ({ currentTask, onDelete, onUpdate }) => {
  console.log(currentTask);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(currentTask.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedDescr) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedDescr);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <UpdateTask currentTask={currentTask} onUpdate={handleSubmit} />
      ) : (
        <div>
          <TextField
            disabled
            value={currentTask.title}
            label="Title"
            variant="outlined"
            defaultValue=""
            style={{ width: "100%", margin: 5 }}
          />
          <TextField
            disabled
            label="Description"
            multiline
            rows={5}
            defaultValue=""
            value={currentTask.descr}
            style={{ width: "100%", margin: 5 }}
          />
          <div>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteClick}
              sx={{ mr: 2, mt: 3 }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleEditClick}
              sx={{ mr: 2, mt: 3 }}
            >
              Update
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
