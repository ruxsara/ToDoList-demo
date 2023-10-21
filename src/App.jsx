import CreateTask from "./components/CreateTask";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import { Grid } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, descr) => {
    // console.log(title,descr)
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title, // birinci yazdigimiz title ve descr istediyimiz ad qoya bilerik eger eyni adi qoyuruqsa birce defe yazmaq kifayetdir
        descr: descr,
      },
    ];
    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    //  console.log(id)
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id; //  bu o demekdir ki burda clicklediyimiz id ile eyni olmayan butun idleri geri goster
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, uptitle, updescr) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: uptitle, descr: updescr };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} md={12} justifyContent={"center"}>
        <CreateTask onCreate={createTask} />
      </Grid>
      <Grid item xs={12} md={12}>
        <List
          tasksList={tasks}
          onDelete={deleteTaskById}
          onUpdate={editTaskById}
        />
      </Grid>
    </Grid>
  );
}

export default App;
