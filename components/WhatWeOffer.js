import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="offer-title">WHAT WE OFFER</h2>

        <div className="offer-grid">

          <div className="offer-card">
            <Image src="/icons/classroom1.png" width={60} height={60} alt="icon" />
            <div>
              <h3>Modern Classrooms and (BTW) Training Facilities</h3>
              <p>
                Learn in a comfortable environment with up-to-date classrooms, 
                computer labs, and dedicated practice areas.
              </p>
            </div>
          </div>

          <div className="offer-card">
            <Image src="/icons/lady.png" width={60} height={60} alt="icon" />
            <div>
              <h3>Skilled Instructors</h3>
              <p>
                Gain valuable insights from our knowledgeable instructors who 
                will guide you through every step of the CDL process.
              </p>
            </div>
          </div>

          <div className="offer-card">
            <Image src="/icons/car.png" width={60} height={60} alt="icon" />
            <div>
              <h3>Hands-on Learning</h3>
              <p>
                Our program includes practical exercises like pre-trip inspections, 
                map reading, vehicle maintenance checks, trailer coupling and 
                uncoupling, backing manoeuvres, and turning techniques.
              </p>
            </div>
          </div>

          <div className="offer-card">
            <Image src="/icons/classroom.png" width={60} height={60} alt="icon" />
            <div>
              <h3>Job Placement Assistance</h3>
              <p>
                We go the extra mile to help you find employment opportunities 
                in the trucking industry after graduation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
