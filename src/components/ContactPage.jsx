import React from "react";
import ContactForm from "./ContactForm"; 
const ContactPage = () => {
    const goBack = () => {
      window.history.back();
    };
  
    return (
            <div className="bg-orange-500 min-h-screen">
              <div className="container mx-auto py-8">
                <h2 className="bg-orange-500 text-white text-2xl mb-4">Contact Us</h2>
                <ContactForm />
                <button onClick={goBack}>Back</button>
              </div>
            </div>
          );
  };
  
  export default ContactPage;