import React from "react";
import "./footer.styles.css";

export default function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div className="bordered">
          <span>
            <a
              href="https://github.com/MidhaTahir/Kodershub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repository
            </a>
          </span>
          <span>Copyright &copy; 2020 KodersHub.</span>
        </div>
      </div>
    </div>
  );
}
