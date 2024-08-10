import React from "react";
import Profile from "../assets/EstelleImage.jpg";
import { BiSolidCheckboxChecked } from "react-icons/bi";

export default function Card() {
  return (
    <div className="card">
      <img src={Profile} alt="Estelle" className="profileImage"></img>
      <div className="estelle">
        <h2>Oghenekevwe Estelle Ejoh </h2>
        <span className="span">
          <BiSolidCheckboxChecked />
        </span>
      </div>
      <p>Data Analyst, UK</p>
      <p>SKILLS</p>
      <ul>
        <li>R</li>
        <li>SPSS</li>
        <li>SQL</li>
        <li>POWER BI</li>
        <li>PYTHON</li>
      </ul>
    </div>
  );
}
