import React from "react";

function Contact() {
  const phone = "+918072345232";
  const whatsappLink = `https://Wa.me/+918072345232`;
  const linkedInLink =
    "https://www.linkedin.com/in/shaik-nizam-5393812a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with your LinkedIn URL

  return (
    <div
      id="contact"
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Contact Me</h1>
      <p>
        Got a project waiting to be realized? Let's collaborate and make it
        happen!
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "1.2rem" }}>
        <p>
          📞 Phone:{" "}
          <a
            href={`tel:${phone}`}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {phone}
          </a>
        </p>

        <p>
          💬 WhatsApp:{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "green", textDecoration: "underline" }}
          >
            Chat with me on WhatsApp
          </a>
        </p>

        <p>
          🔗 LinkedIn:{" "}
          <a
            href={linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", textDecoration: "underline" }}
          >
            Visit my LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
