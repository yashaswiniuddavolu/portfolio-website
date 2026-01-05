import React, { useEffect, useRef, useState } from "react";
import "./Certifications.css";

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      title:
        "Full stack Web Development - React, Node.js, Express & MongoDB",
      issuer: "GeeksforGeeks",
      date: "Sep 2025",
      icon: "☁️",
      color: "#a78bfa",
      description:
        "Full Stack Web Development using React, Node.js, Express, and MongoDB, covering end-to-end application development, RESTful APIs, database design, authentication, and deployment of scalable web applications.",
      certificateLink:
        "https://drive.google.com/file/d/13kh4rI5Y0m7LAtfSkxvtv7bTOMRRKBJz/view?usp=sharing",
    },
    {
      title: "Generative AI skill certificate",
      issuer: "Linkedin",
      date: "Nov 2025",
      icon: "🤖",
      color: "#22d3ee",
      description:
        "Comprehensive knowledge of Generative AI, Artificial Intelligence (AI) and Generative AI Tools",
      certificateLink:
        "https://drive.google.com/file/d/1VPzTZ5374TDny_oN2lX0gX3YyD2OLP5R/view?usp=drive_link",
    },
    {
      title: "Frontend Development in React from basics to advanced",
      issuer: "HackerRank",
      date: "Sep 2025",
      icon: "🔧",
      color: "#ec4899",
      description: "End-to-end web application development and deployment",
      certificateLink:
        "https://drive.google.com/file/d/1JKRKSoFtnAH4tX1U8HxpJRbL0ZklyaiB/view?usp=drive_link",
    },
    {
      title: "Web Development | HTML | CSS | JavaScript | jQuery | NodeJS",
      issuer: "Udemy",
      date: "June 2024",
      icon: "💬",
      color: "#f59e0b",
      description: "End-to-end web application development and deployment",
      certificateLink:
        "https://drive.google.com/file/d/1HE1_BMYVwBVsIA4jvHWVMTkZrzjCfDdt/view?usp=sharing",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R in Data Science",
      issuer: "Udemy",
      date: "May 2024",
      icon: "🌐",
      color: "#10b981",
      description: "Advanced expertise in data science and ML model deployment",
      certificateLink:
        "https://drive.google.com/file/d/1AmWoHticMviT4P1eV-n-hXh-qg-vhPKa/view?usp=sharing",
    },
    {
      title: "Certificate of Presentation in ICSDS 2025",
      issuer: "ICSDS 2025",
      date: "Dec 2025",
      icon: "📈",
      color: "#8b5cf6",
      description: "Leveraging IoT and GPS Technologies for Comprehensive Women’s Safety in Real-Time",
      certificateLink:
        "https://drive.google.com/file/d/1aieb71uz9t_EtH13FfrKki1ns42BXNKn/view?usp=sharing",
    },
    {
      title:
        "Certifications of Google Analytics for Beginners and Advanced Google Analytics",
      issuer: "Google Analytics Academy",
      date: "June 2024",
      icon: "☁️",
      color: "#a78bfa",
      description:
        "Certification focused on web traffic measurement, user behavior analysis, and data-driven insights.",
      certificateLink:
        "https://drive.google.com/drive/folders/1bzPBl2ToMEuMdy-vVQej21zjDbfpGvOj?usp=sharing",
    },
    {
      title: "Smart India Hackathon (Internal) 2025",
      issuer: "Sharda University",
      date: "Nov 2025",
      icon: "🤖",
      color: "#22d3ee",
      description:
        "Participated in Smart India Hackathon (SIH), contributing to problem analysis, solution design, and implementation of a technology-driven solution in a competitive, real-world environment.",
      certificateLink:
        "https://drive.google.com/file/d/1naozJNq-vVu30nKKjNZ0ZleDFctfLloj/view?usp=sharing",
    },
  ];

  const strengths = [
    { icon: "🏆", text: "Certified in GenAI, ML and Full stack" },
    { icon: "💡", text: "Strong software engineering principles" },
    { icon: "🚀", text: "Clean, maintainable code focus" },
    { icon: "📂", text: "Active open-source contributor" },
  ];

  const handleCertificateClick = (link) => {
    // Open in new window/tab
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section
      id="certifications"
      className="certifications-new"
      ref={sectionRef}
    >
      <div className="certifications-container-new">
        <div className={`certifications-header ${isVisible ? "fade-in" : ""}`}>
          <span className="certifications-subtitle">Credentials</span>
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
        </div>

        <div className="certifications-grid-new">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card-new ${
                isVisible ? "slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="cert-badge-new"
                style={{ background: cert.color }}
              >
                <span className="cert-icon-new">{cert.icon}</span>
              </div>

              <div className="cert-content-new">
                <div className="cert-meta-new">
                  <span className="cert-issuer-new">{cert.issuer}</span>
                  <span className="cert-date-new" style={{ color: cert.color }}>
                    {cert.date}
                  </span>
                </div>

                <h3 className="cert-title-new">{cert.title}</h3>
                <p className="cert-description-new">{cert.description}</p>

                {cert.certificateLink && (
                  <div
                    className="cert-view-btn-new"
                    style={{ borderColor: cert.color }}
                    onClick={() => handleCertificateClick(cert.certificateLink)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleCertificateClick(cert.certificateLink);
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>View Certificate</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`strengths-section-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="strengths-title-new">Key Strengths</h3>
          <div className="strengths-grid-new">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-item-new">
                <span className="strength-icon-new">{strength.icon}</span>
                <p>{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
