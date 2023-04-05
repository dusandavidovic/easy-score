import { List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import api from "../config/api";

const FormsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient
      .get(api.getUri("test"), {
        auth: api.getAuth("test"),
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <List>
      <ListItem></ListItem>
    </List>
  );
};

export default FormsList;
