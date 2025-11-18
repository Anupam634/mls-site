import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content container">

          <div className="hero-left">
            <h1>
              MLS COMPANIES <br />
              CDL TRAINING PROGRAM
            </h1>

            <p>
              MLS Companies offers a comprehensive Class A CDL (BTW)
              training program with experienced instructors, modern
              equipment, and hands-on lessons.
            </p>

            <a className="apply-btn" href="#">
              Apply Now
            </a>
          </div>

          <div className="hero-right">
            <Image
              src="/images/hero-truck.png"
              alt="Hero Truck"
              width={700}
              height={450}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
