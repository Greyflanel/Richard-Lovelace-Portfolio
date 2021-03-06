/* * { 
	border: 1px solid red !important;
} */
#stars {
  background: url(/assets/stars811.png);
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
}

html, body {
  background-color: #0a0111;
}
html section, body section {
  height: 100vh;
}
html #second-section, body #second-section {
  background-color: whitesmoke;
}
html #third-section, body #third-section {
  display: none;
  background-color: whitesmoke;
}
html #third-section:target, body #third-section:target {
  display: block;
}

.moon {
  width: 14vw;
  height: auto;
  position: absolute;
  box-shadow: -18px 18px 100px #ffc8ff;
  border-radius: 360px;
}
@media (max-width: 1200px) {
  .moon {
    width: 17vw;
  }
}
@media (max-width: 800px) {
  .moon {
    width: 24vw;
  }
}
@media (max-width: 400px) {
  .moon {
    width: 33vw;
  }
}

#content {
  text-align: center;
  align-items: center;
  top: 27vh;
  color: #140512;
  text-shadow: 0 0 9px white, 0 0 11px white, 0 0 13px white, 0 0 15px white, 0 0 20px #ebebeb, 0 0 30px #220322, 0 0 35px #3a043a, 0 0 40px #3a043a, 0 0 45px #3a043a, 0 0 55px #3a043a, 0 0 40px white;
}
@media (max-width: 400px) {
  #content {
    top: 40vh;
  }
}

h1 {
  font-size: 4.2vw;
  letter-spacing: 0.6vw;
  line-height: 14vh;
}
@media (max-width: 1200px) {
  h1 {
    font-size: 5.8vw;
  }
}
@media (max-width: 1000px) {
  h1 {
    font-size: 6vw;
  }
}
@media (max-width: 800px) {
  h1 {
    font-size: 7vw;
    line-height: 12vh;
  }
}
@media (max-width: 400px) {
  h1 {
    font-size: 8.3vw;
    line-height: 7vh;
  }
}

h2 {
  letter-spacing: 0.65vw;
  font-size: 3.2vw;
  line-height: 14vh;
}
@media (max-width: 1200px) {
  h2 {
    font-size: 4.5vw;
  }
}
@media (max-width: 800px) {
  h2 {
    font-size: 5.5vw;
    line-height: 10vh;
  }
}
@media (max-width: 400px) {
  h2 {
    font-size: 7vw;
    line-height: 8vh;
  }
}

.navbar {
  z-index: 1;
  height: 14vh;
  position: fixed;
}

#link {
  color: #0a0111;
  font-weight: 600;
  text-shadow: 0 0 1px #3a043a, 0 0 2px white, 0 0 10px white, 0 0 30px white, 0 0 35px #3a043a, 0 0 40px white, 0 0 45px #3a043a;
}

#linkedin {
  width: 2.5vw;
  height: auto;
  border: 2px solid rgba(20, 5, 18, 0.507);
  box-shadow: 0 0 5px white, 0 0 15px white, 0 0 10px white, 0 0 15px #42043a, 0 0 20px #3a043a;
  background-color: rgba(20, 5, 18, 0.507);
}
@media (max-width: 1200px) {
  #linkedin {
    width: 4vw;
  }
}
@media (max-width: 800px) {
  #linkedin {
    width: 5.2vw;
  }
}
@media (max-width: 400px) {
  #linkedin {
    width: 9.5vw;
  }
}

#github {
  width: 2.5vw;
  height: auto;
  border-radius: 20px;
  border-width: 2px;
  box-shadow: 0 0 15px white, 0 0 10px white, 0 0 15px #42043a, 0 0 20px #3a043a;
  background-color: rgba(20, 5, 18, 0.507);
}
@media (max-width: 1200px) {
  #github {
    width: 4vw;
  }
}
@media (max-width: 800px) {
  #github {
    width: 5.4vw;
  }
}
@media (max-width: 400px) {
  #github {
    width: 9.8vw;
  }
}

a {
  margin-left: 1.5rem;
  font-size: 1.2vw;
  color: white;
  text-shadow: 0 0 20px white, 0 0 15px white, 0 0 20px #ebebeb, 0 0 30px #220322, 0 0 35px #3a043a, 0 0 40px #3a043a, 0 0 45px #3a043a, 0 0 48px #3a043a, 0 0 55px white;
}
@media (max-width: 1200px) {
  a {
    font-size: 1.8vw;
  }
}
@media (max-width: 800px) {
  a {
    font-size: 2.2vw;
  }
}
@media (max-width: 405px) {
  a {
    font-size: 116.2vw;
  }
}

.second-section {
  background-color: whitesmoke;
  padding: 2rem;
}

#secondH1 {
  font-size: 6vw;
}

.btn-outline-light {
  margin-top: 10vh;
  width: 20vw;
  letter-spacing: 0.2vw;
  font-weight: 0.8rem;
  font-size: 1.3vw;
  border-radius: 10px;
  border-width: 1px;
  color: white;
  box-shadow: 0 0 10px white, 0 0 15px white, 0 0 20px #42043a, 0 0 25px #3a043a;
}
@media (max-width: 1200px) {
  .btn-outline-light {
    width: 27vw;
    font-size: 1.8vw;
  }
}
@media (max-width: 800px) {
  .btn-outline-light {
    width: 32vw;
    font-size: 2.8vw;
    margin-top: 5vh;
  }
}
@media (max-width: 400px) {
  .btn-outline-light {
    width: 40vw;
    font-size: 3.8vw;
    margin-top: 4vh;
  }
}

.btn-outline-light:hover {
  background-color: #fcfcfc;
  letter-spacing: 0.2rem;
}

/*# sourceMappingURL=index.cs.map */
