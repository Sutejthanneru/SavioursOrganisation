import "./App.css";
import React, { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = parseInt(target);
          if (start === end) return;
          const increment = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span className="count" ref={ref}>
      {count}
    </span>
  );
}

function Carousel({ images }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>
        ←
      </button>
      <div className="carousel" ref={scrollRef}>
        {images.map((src, idx) => (
          <img src={src} alt={`carousel ${idx + 1}`} key={idx} />
        ))}
      </div>
      <button className="carousel-button right" onClick={scrollRight}>
        →
      </button>
    </div>
  );
}

function App() {
  const awarenessImages = [
    "/Awareness/a0.jpg",
    "/Awareness/a1.jpg",
    "/Awareness/a2.jpg",
    "/Awareness/a02.jpg",
    "/Awareness/a3.jpg",
    "/Awareness/a4.jpg",
    "/Awareness/a6.jpg",
    "/Awareness/a7.jpg",
    "/Awareness/a8.jpg",
    "/Awareness/a9.jpg",
    "/Awareness/a10.jpg",
    "/Awareness/a11.jpg",
    "/Awareness/a12.jpg",
    "/Awareness/a13.jpg",
    "/Awareness/a14.jpeg",
    "/Awareness/awareness.jpeg",
    "/Awareness/awareness1.jpeg",
    "/Awareness/awareness2.jpeg",
    "/Awareness/awareness3.jpeg",
    "/Awareness/awareness4.jpeg",
  ];
  const bloodImages = [
    "/Blood/b00.jpg",
    "/Blood/b000.jpg",
    "/Blood/b2.jpg",
    "/Blood/b3.jpg",
    "/Blood/b4.jpg",
    "/Blood/b5.jpg",
    "/Blood/b6.jpg",
    "/Blood/b7.jpg",
    "/Blood/blood.jpeg",
    "/Blood/blood1.jpeg",
    "/Blood/blood2.jpeg",
  ];
  const foodImages = [
    "/Food/f00.jpg",
    "/Food/f1.jpg",
    "/Food/f001.jpg",
    "/Food/f3.jpg",
    "/Food/f4.jpg",
    "/Food/f5.jpg",
    "/Food/f6.jpg",
    "/Food/f7.jpg",
    "/Food/f8.jpg",
    "/Food/f9.jpg",
    "/Food/f10.jpg",
    "/Food/f11.jpg",
    "/Food/food.jpeg",
    "/Food/food1.jpeg",
    "/Food/food2.jpeg",
    "/Food/food3.jpeg",
    "/Food/food4.jpeg",
    "/Food/food5.jpeg",
    "/Food/food6.jpeg",
  ];
  const medicalImages = [
    "/Medical/m1.jpg",
    "/Medical/m9.jpg",
    "/Medical/medical.jpeg",
    "/Medical/medical2.jpeg",
    "/Medical/medical3.jpeg",
    "/Medical/medical4.jpeg",
    "/Medical/medical5.jpeg",
    "/Medical/medical6.jpeg",
    "/Medical/medical7.jpeg",
    "/Medical/medical8.jpeg",
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <img src="/logo.jpg" alt="Saviours Logo" className="org-logo" />
          <h1 className="hero-title">Saviours Voluntary Organization </h1>
          <p className="hero-subtitle">Reg.no :- 147/2019</p>
          <p className="hero-subtitle">
            Empowering Lives | Spreading Hope | Building Communities
          </p>
          <button
            className="btn btn-secondary"
            onClick={() =>
              document
                .getElementById("join-us-form")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Join Us
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Saviours is a passionate, community-driven organization committed to
          creating meaningful change in society through its four impactful wings
          — <strong>Awareness</strong>, <strong>Food</strong>,{" "}
          <strong>Medical Aid</strong>, and
          <strong> Blood Donation</strong>.
        </p>
        <p>
          We aim to uplift communities, support the underprivileged, and foster
          a sense of social responsibility. From conducting awareness campaigns
          in villages, schools, colleges, and public areas, to organizing food
          drives for the hungry and offering medical support to those in need —
          every step we take is driven by compassion and unity.
        </p>
        <p>
          Our blood donation efforts have saved countless lives, with major
          drives collecting hundreds of units. We continue to grow with the
          strength of our volunteers and the trust of the people.
        </p>
        <p>
          <em>Join us in our mission — because together, we are stronger.</em>
        </p>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <h2 className="section-title">Our Founder</h2>
        <div className="founder-content">
          <div className="founder-text">
            <p>
              N. Praneeth, the founder of Saviours Voluntary Organization in
              Kavali. I started this organization at the age of 18 on August
              15th, 2018. Our main motive is that everyone should embrace social
              responsibility, and alongside our own lives, we should stand by
              those in need, offering them support and encouragement. This small
              initiative has now grown over the past nine years into more than
              2,000 service programs. I am truly grateful to our team members,
              our supporters, and our volunteers who have helped us move
              forward, and I am deeply thankful to each and every one of them.
            </p>
            <p>
              <span className="gold-quote">“</span>
              Saviours is not just an organization, it is a promise to stand
              with humanity in every need.
              <span className="gold-quote">”</span> – Praneeth.N
            </p>
          </div>
          <div className="founder-image-container">
            <div className="founder-placeholder-img">
              <img src="/founder-image.jpeg" alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Wings Section */}
      {/* Wings Section */}
      <section className="wings-section">
        <h2>Our Wings</h2>
        <div className="wings-container">
          <div className="wing">
            <h3>Awareness Wing</h3>
            <p>
              We actively conduct awareness campaigns on critical social topics
              such as education, health, environment, gender equality, and
              personal hygiene...
            </p>
            <Carousel images={awarenessImages} />
            <details className="wing-details">
              <summary>How This Wing Works</summary>
              <ul>
                <li>
                  We organize meetings with wing members to decide the venue,
                  topic, and date of the event.
                </li>
                <li>
                  {" "}
                  The topics include women’s safety and empowerment, character
                  building and career guidance for students, overcoming
                  backwardness in lower communities, and the importance of blood
                  donation.
                </li>
                <li>
                  We seek permission from authorities (like school heads or
                  village leaders).{" "}
                </li>
                <li>
                  After getting approval, we conduct the awareness drive at the
                  scheduled time.
                </li>
                <li>
                  We share photos and updates on our WhatsApp and Instagram
                  pages.
                </li>
              </ul>
            </details>
          </div>

          <div className="wing">
            <h3>Food Wing</h3>
            <p>
              Our food distribution initiatives are dedicated to eradicating
              hunger...
            </p>
            <Carousel images={foodImages} />
            <details className="wing-details">
              <summary>How This Wing Works</summary>
              <ul>
                <li>
                  We prioritize donating food to victims of natural calamities,
                  and we also donate food on random occasions of our supporters
                  and donors. Since 2018, we have conducted more than 1,200 food
                  donation drives in kavali as well in surrounding areas.
                </li>
                <li>
                  If someone wants to donate, we collect their preferences and
                  plan accordingly.
                </li>
              </ul>
            </details>
          </div>

          <div className="wing">
            <h3>Medical Aid Wing</h3>
            <p>
              Through our medical aid wing, we provide essential healthcare
              services...
            </p>
            <Carousel images={medicalImages} />
            <details className="wing-details">
              <summary>How This Wing Works</summary>
              <ul>
                <li>
                  We verify the request made by the patient’s family by checking
                  their medical reports, income sources, and the patient’s
                  identity.
                </li>
                <li>
                  We first try to get treatment with less expenses through known
                  doctors or sources.{" "}
                </li>
                <li>
                  If not feasible, we start fundraising and send the amount to
                  the family.
                </li>
              </ul>
            </details>
          </div>

          <div className="wing">
            <h3>Blood Wing</h3>
            <p>
              We organize regular blood donation camps and maintain a donor
              network...
            </p>
            <Carousel images={bloodImages} />

            <details className="wing-details">
              <summary>How This Wing Works</summary>
              <ul>
                <li>
                  Our first camp was organized on January 27, 2018, with 16
                  members. We later resumed our journey in collaboration with
                  IRCS (Red Cross). So far, we have contributed over 3,000 units
                  of blood to the IRCS Kavali Blood Bank.
                </li>
                <h4>Top Blood Donation Camps:</h4>
                <li>
                  January 26, 2025 – Conducted a mega blood donation camp with
                  777 units in Kavali.
                </li>
                <li>October 12, 2023 – 614 units donated.</li>
                <li>January 26, 2024 – 502 units donated.</li>
                <li>December 9, 2022 – 370 units donated</li>
                <li>
                  We verify the authenticity of the blood request and collect
                  patient details.
                </li>
                <li>
                  We contact our donor network or blood banks to arrange the
                  required units.
                </li>
                <li>
                  We have seperate wing for emergency blood requriements and we
                  are capable to full fill various blood requests from vraiours
                  locations from India
                </li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="recognitions-section">
        <h2 className="section-title">Recognitions</h2>
        <p className="hero-subtitle">
          We're proud to be recognized by leading institutions and
          organizations.
        </p>

        <div className="recognitions-grid">
          {/* Card 1 */}
          <div className="recognition-card">
            <div className="recog-content">
              <span className="recog-year">🏆 State-Level Award</span>
              <h3>Indian Red Cross Society Recognition</h3>
              <p>
                Saviours Voluntary Organization President Mr. N. Praneeth
                received a State-Level Award from the Indian Red Cross Society.
                The award was presented by the Honorable Minister for Health,
                Government of Andhra Pradesh, Sri Satya Kumar Yadav Garu.
              </p>
            </div>

            <div className="recog-image">
              <div className="recog-placeholder">
                <img
                  src="/rec1.jpeg"
                  alt="Saviours State-Level Award"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="recognition-card">
            <div className="recog-content">
              <span className="recog-year">🌟 2022</span>
              <h3>AP Governor Award & Gold Medal</h3>
              <p>
                Saviours Voluntary Organization President Mr. N. Praneeth was
                honored with the AP Governor Award and a Gold Medal by the
                Indian Red Cross Society for motivating blood donors and
                organizing blood donation camps. The award was presented on the
                occasion of World Blood Donors Day.
              </p>
            </div>

            <div className="recog-image">
              <div className="recog-placeholder">
                <img src="/rec2.jpeg" alt="AP Governor Award 2022" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="recognition-card">
            <div className="recog-content">
              <span className="recog-year">🚀 2025</span>
              <h3>National Award – Human Rights Council</h3>
              <p>
                Saviours Voluntary Organization President Mr. N. Praneeth was
                honored with a National Award by the Human Rights Council at
                Ooty for his impactful social service, youth empowerment, and
                contributions toward human rights and nation-building
                initiatives.
              </p>
            </div>

            <div className="recog-image">
              <div className="recog-placeholder">
                <img
                  src="/rec3.jpeg"
                  alt="National Award Human Rights Council 2025"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="recognition-card">
            <div className="recog-content">
              <span className="recog-year">🤝 2022</span>
              <h3>Indian Icon Award – 2022</h3>
              <p>
                Saviours Voluntary Organization President Mr. N. Praneeth was
                honored with the Indian Icon Award – 2022 by Viswaguru World
                Records for his outstanding contributions to social service and
                community welfare initiatives.
              </p>
            </div>

            <div className="recog-image recog-image-4">
              <img src="/rec4.jpeg" alt="Indian Icon Award 2022" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-counters">
          <div className="counter">
            <div className="counter-value">
              <AnimatedCounter target={3500} duration={4000} />+
            </div>
            <p>Units of Blood Donated</p>
          </div>
          <div className="counter">
            <div className="counter-value">
              <AnimatedCounter target={1200} duration={4000} />+
            </div>
            <p>Food Drives Conducted</p>
          </div>
          <div className="counter">
            <div className="counter-value">
              <AnimatedCounter target={250} duration={4000} />+
            </div>
            <p>Awareness Camps Held</p>
          </div>
          <div className="counter">
            <div className="counter-value">
              <AnimatedCounter target={280} duration={4000} />+
            </div>
            <p>Medical Cases Supported</p>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="volunteer-section" id="join-us-form">
        <h2 className="section-title">Join Our Mission</h2>
        <p className="hero-subtitle">
          Fill out the form below to become a volunteer.
        </p>

        <form
          className="volunteer-form"
          action="https://formsubmit.co/savioursvoluntaryorganization@gmail.com"
          method="POST"
        >
          {/* FormSubmit Configuration */}
          <input
            type="hidden"
            name="_subject"
            value="New Volunteer Application!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="Male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="tel"
              name="contact"
              required
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="form-group">
            <label>Address *</label>
            <textarea
              name="address"
              required
              placeholder="Enter your full address"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Why do you want to join our Organisation? *</label>
            <textarea
              name="reason"
              required
              placeholder="Share your motivation..."
            ></textarea>
          </div>

          <div className="form-group">
            <label>Which wing are you willing to join? *</label>
            <select name="wing" required className="wing-select">
              <option value="">Select a Wing</option>
              <option value="Awareness Wing">Awareness Wing</option>
              <option value="Blood Wing">Blood Wing</option>
              <option value="Medical Wing">Medical Wing</option>
              <option value="Food Wing">Food Wing</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary form-submit-btn">
            Submit Application
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column brand-column">
            <div className="footer-logo-container">
              <img
                src="/logo.jpg"
                alt="Saviours Logo"
                className="footer-logo"
              />
              <h3 className="footer-brand-name">Saviours</h3>
            </div>
            <p className="footer-desc">
              Empowering families with trusted, personalized support - delivered
              by dedicated volunteers.
            </p>
            <div className="social-icons footer-socials">
              <a
                href="https://www.instagram.com/teamsaviours?igsh=MWFoMDdqc3c0ejlmMA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="i.jpg" alt="Instagram" className="social-icon" />
              </a>
              <a
                href="https://chat.whatsapp.com/C3cKFK4xIfy3w6GHyCLcaP?source_surface=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="ww.png" alt="WhatsApp" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".about-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".wings-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Our Wings
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".founder-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Founder
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".wings-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Awareness Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".wings-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Food Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".wings-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Medical Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector(".wings-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Blood Wing
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li>
                <span>📞</span> +91 95151 69246
              </li>
              <li>
                <span>📞</span> +91 83099 95844{" "}
                {/* Placeholder second number */}
              </li>
              <li>
                <span>✉️</span> savioursvoluntaryorganization@gmail.com
              </li>
              <li>
                <span>📍</span> Kavali , Nellore , Andhra Pradesh - 524201
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Saviours Organization | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
