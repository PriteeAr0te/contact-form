import React, { useState } from "react";
import ContactForm from "./Components/ContactForm";
import Alert from "./Components/Alert";

const App = () => {
  // const [alert, setAlert] = useState(null);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // };
  return (
    <>
      <div>
        {/* {formSubmitted && <Alert alert={alert} />} */}
        <ContactForm />
        {/* // showAlert={showAlert}
        // setFormSubmitted={setFormSubmitted} */}
      </div>
    </>
  );
};

export default App;
