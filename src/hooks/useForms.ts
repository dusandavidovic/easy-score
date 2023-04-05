import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import api, { API_ID } from "../config/api";

export interface Form {
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
    const controler = new AbortController();
    setLoading(true);

    apiClient
      .get(api.getUri(API_ID), {
        auth: api.getAuth(API_ID),
        signal: controler.signal,
      })
      .then((res) => {
        setForms(res.data.Forms);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controler.abort(); //to cancel first call in dev
  }, []);

  return { forms, error, isLoading };
};

export default useForms;
