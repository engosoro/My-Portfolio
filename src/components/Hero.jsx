import profileImg from "../assets/profile.jpg"; // adjust path if needed

function Hero() {
  return (
    <section className="hero fade-in" id="hero">
      <div className="hero-content">
        <img src={profileImg} alt="Profile" className="hero-image" />
        <div>
          <h1>Hi, I'm Edigar</h1>
          <p>Software Engineer | Full-Stack Dev | Problem Solver</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
