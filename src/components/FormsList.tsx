import { List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import api, { API_ID } from "../config/api";

interface Form {
  Name: string;
  Description: string;
  hash: string;
  isPublic: string;
  Url: string;
}
const FormsList = () => {
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    apiClient
      .get(api.getUri(API_ID), {
        auth: api.getAuth(API_ID),
      })
      .then((res) => {
        console.log(res.data.Forms);
        setForms(res.data.Forms);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <List>
      <ListItem>
        {forms.map((form) => (
          <Text key={form.hash}>{form.Name}</Text>
        ))}
      </ListItem>
    </List>
  );
};

export default FormsList;
