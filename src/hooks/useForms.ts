import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import api, { API_ID } from "../config/api";

interface Form {
  Name: string;
  Description: string;
  hash: string;
  isPublic: string;
  Url: string;
  StartDate: Date;
  EndDate: Date;
}

const useForms = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(api.getUri(API_ID), {
        auth: api.getAuth(API_ID),
      })
      .then((res) => {
        console.log(res.data.Forms);
        setForms(res.data.Forms);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { forms, error, isLoading };
};

export default useForms;
