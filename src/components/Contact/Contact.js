import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section>
      <footer id="contact-section" role="contentinfo">
        <a href="mailto:navin1551@gmail.com" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZ9uMIcl0N4OzFmhey9WALzfRtyBBEykxV_UXj7yBi-M6Nfqh1w"
            alt="email logo"
            className="contact-logo"
          />
        </a>
        <a href="https://github.com/navin1551" target="_blank">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
            className="contact-logo"
          />
        </a>
        <a href="www.linkedin.com/in/navin-kumar-aaa6b8a0" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FAjWDx92wneT18pRKkts_Ck3ru9WnF3-ptCGD-nvOn4MepJX4g"
            alt="linkedin logo"
            className="contact-logo"
          />
        </a>
      </footer>
    </section>
  );
}
