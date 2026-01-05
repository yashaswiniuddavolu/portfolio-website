// ============================================
// CERTIFICATE LINKS FIX
// ============================================

// In Certifications.jsx, replace the button section with this:

{cert.certificateLink && (
  <a
    href={cert.certificateLink}
    target="_blank"
    rel="noopener noreferrer"
    className="cert-view-btn-new"
    style={{ borderColor: cert.color }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span>View Certificate</span>
  </a>
)}

// ============================================
// PROJECT LINKS FIX
// ============================================

// In Projects.jsx, replace the button section with this:

<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link-new"
  style={{ background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.1))` }}
>
  <span>View Project</span>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>

// ============================================
// CERTIFICATE LINKS (USE THESE EXACT URLS)
// ============================================

const certifications = [
  {
    certificateLink: "https://drive.google.com/file/d/13kh4rI5Y0m7LAtfSkxvtv7bTOMRRKBJz/view?usp=sharing",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1VPzTZ5374TDny_oN2lX0gX3YyD2OLP5R/view?usp=drive_link",
  },
  { 
    certificateLink: "https://drive.google.com/file/d/1JKRKSoFtnAH4tX1U8HxpJRbL0ZklyaiB/view?usp=drive_link",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1HE1_BMYVwBVsIA4jvHWVMTkZrzjCfDdt/view?usp=sharing",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1AmWoHticMviT4P1eV-n-hXh-qg-vhPKa/view?usp=sharing",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1aieb71uz9t_EtH13FfrKki1ns42BXNKn/view?usp=sharing",
  },
  {
    certificateLink: "https://drive.google.com/drive/folders/1bzPBl2ToMEuMdy-vVQej21zjDbfpGvOj?usp=sharing",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1naozJNq-vVu30nKKjNZ0ZleDFctfLloj/view?usp=sharing",
  },
];

// ============================================
// CSS FIX FOR BUTTONS
// ============================================

/* Make sure buttons don't have cursor: none */
.cert-view-btn-new,
.project-link-new {
  cursor: pointer !important;
  pointer-events: auto !important;
}

/* Override any global cursor settings */
body.light-mode .cert-view-btn-new,
body.light-mode .project-link-new {
  cursor: pointer !important;
}