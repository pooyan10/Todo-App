import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

//onClick={() => navigate(`/todo/${id}`)}
//<h1>  {title} </h1>
//<h5>{`Completed : ${completed}`}</h5>

const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  const navigate = useNavigate();

  return (
    <Card display="flex" sx={{ minWidth: 275, margin: "2px" }}>
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
        >{`Completed : ${completed}`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/todo/${id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
