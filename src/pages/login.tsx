import styles from "./Login.module.css";

export default function SpillerForm() {

  function handleFormAction(formData: FormData) {
  const spillerNavn = formData.get("spillernavn");
  
  console.log("Spillernavn", spillerNavn);
  }
    return (
        <form className={styles.spillerForm} action={handleFormAction} >
            <label htmlFor="spillernavn">Navn</label>
            <input type="text" id="spillernavn" name="spillernavn" required />
            <button>Registrer en spiller</button>
        </form>
    );
}