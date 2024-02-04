/* home.jsx */

import React from 'react';
import "./home.css";

export const Home = () => {

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const handleClick = (url) => (event) => {
    if (event.button === 0 || event.button === 1) {  // Solo manejar clic izquierdo y botón central
      event.preventDefault();
      openLink(url);
    }
  };

  const handleDownload = () => {
    // Lógica para descargar el archivo PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = './CV_Luis_Angel_Farfan.pdf';
    downloadLink.download = 'CV_Luis_Angel_Farfan.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="home">
      <div className="profile-container">
        <img src="photo.jpg" alt="Mi Imagen" className="profile-image"/>
      </div>
      <div>
        <h1>Luis Ángel Farfán</h1>
        <h2>JAVA Developer</h2>
        <h3>Web Developer</h3>
      </div>
      <div className='alingButtons'>
        <button className="button linkedin" onClick={handleClick("https://www.linkedin.com/in/luisaf117")}
          onAuxClick={handleClick("https://www.linkedin.com/in/luisaf117")}>
          <a
            href="https://www.linkedin.com/in/luisaf117/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </button>

        <button className="button github" onClick={handleClick("https://github.com/LsAngel117")}
          onAuxClick={handleClick("https://github.com/LsAngel117")}>
          <a
            href="https://github.com/LsAngel117"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </button>
        <button className="button download" onClick={handleDownload}>
          <div className="alingBtnDownload">
            <a>
              <h3>DESCARGAR CV</h3>
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};
