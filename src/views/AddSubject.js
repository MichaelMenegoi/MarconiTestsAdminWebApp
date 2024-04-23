import React, { useState } from "react";
import Axios from "axios";
import Styles from "../assets/css/AddSubject.module.css";
import Helpers from "../assets/css/config/Helpers.module.css";

function AddSubject() {
  const [subject, setSubject] = useState("");

  const createSubject = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form

    try {
        const response = await Axios.post(
            "https://apps.marconivr.it/tests/v1/question/subjects",
            {
              name: subject,
            }
          );
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={Styles.subjectContainer}>
      <form onSubmit={createSubject} className={Styles.subjectForm}>
        <div className={Helpers.inputGroup}>
          <label className={Helpers.inputLabel}>Nome della materia</label>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject} // Aggiunto il valore dell'input
            className={Helpers.formInput}
            placeholder="Inserisci il nome della materia"
          />
        </div>
        <button type="submit" className={Helpers.formButton}>
          Inserisci
        </button>
      </form>
    </div>
  );
}

export default AddSubject;
