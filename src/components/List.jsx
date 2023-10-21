import React from "react";
import { ListItem } from "./ListItem";

const List = ({ tasksList, onDelete, onUpdate }) => {
  return (
    <div className="task-list">
      {tasksList.map((task, index) => {
        return (
          <ListItem
            key={index}
            currentTask={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};

export default List;
