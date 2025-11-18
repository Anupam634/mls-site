import Image from "next/image";

export default function VisaSponsorship() {
  return (
    <section className="visa-section">
      <div className="visa-bg">
        <Image
          src="/images/Screenshot 2025-11-16 223015.png" 
          alt="Visa Sponsorship Background"
          fill
          priority
style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
      </div>

      <div className="visa-overlay">
        <div className="visa-content">
          <h2>USA VISA SPONSORSHIP</h2>

          <a href="#" className="visa-outline-btn">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
