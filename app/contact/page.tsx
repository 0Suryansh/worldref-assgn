import React from "react";
import Header from "../components/header/Header";
import ContactForm from "./ContactForm";

const Contact = () => {
    return(
        <>
            <Header/>
            <div style={{marginBottom: 10, marginTop: 20, textAlign: "center", fontSize: "2em"}}>Contact Us</div>
            <ContactForm />
        </>
    )
}

export default Contact