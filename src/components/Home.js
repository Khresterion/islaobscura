import obscuraAxios from "../obscuraAxios";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export const Home = () => {
  // stockage des valeurs de la desc apres clique dans local storage
  let setVal = (values) => {
      obscuraAxios.put("api/getDescription", values).then((res) => {
      let desc = res.data;
      let descStringified = JSON.stringify(desc);
      localStorage.setItem("descriptionValues", descStringified);
      location.reload();
    });
  };

  const history = useHistory();

  const validate = Yup.object({
    code: Yup.string()
      .required("code obligatoire")
      .min(4, "minimum 4 ")
      .max(4, "Maximum 4 charactères"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          code: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(" *** code validated by formik *** ");
          setVal(values);
          {
            history.push("/LieuDescription");
          }
        }}
      >
        <Form>
          <label className="heading-tertiary">Entrez votre code</label>
          <br />
          <TextField name="code" type="text" />
          <br />
          <button className="btn btn--white btn--animated" type="submit">
            Essayer
          </button>
        </Form>
      </Formik>
    </div>
  );
};
