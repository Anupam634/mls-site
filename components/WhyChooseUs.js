import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section container">
      <h2 className="why-title">Why Choose MLS Companies?</h2>

      <p className="why-intro">
        For over 32 years, MLS Companies has been a trusted name in CDL (BTW)
        training. Our expert professional instructors have trained countless
        individuals to achieve their dream of becoming professional truck
        drivers. We are committed to equipping you with the knowledge and
        skills to pass your CDL exams and embark on a rewarding career behind
        the wheel!
      </p>

      <div className="why-grid">

        {/* LEFT SIDE TEXT */}
        <div className="why-left">

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/classroom1.png" width={44} height={44} alt="network" />
            </div>
            <div className="why-text">
              <h5>Nationwide Network</h5>
              <p>
                MLS Companies has you covered. We're a nationwide network of
                hands-on truck driving schools that can help you get your Class
                A CDL and start your trucking career fast.
              </p>
            </div>
          </div>
          <hr />

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/car.png" width={44} height={44} alt="finance" />
            </div>
            <div className="why-text">
              <h5>Financing Made Easy</h5>
              <p>
                We understand that education is an investment. That's why MLS
                Companies offers financial assistance programs to help qualified
                students.
              </p>
            </div>
          </div>
          <hr />

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/lady.png" width={44} height={44} alt="job" />
            </div>
            <div className="why-text">
              <h5>Land Your Dream Job Before Graduation</h5>
              <p>
                Our Job Placement Assistance connects you with potential
                employers in the trucking industry. You could even be
                pre-hired before you graduate!
              </p>
            </div>
          </div>
          <hr />

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/classroom.png" width={44} height={44} alt="hands on" />
            </div>
            <div className="why-text">
              <h5>Hands on (BTW) Training</h5>
              <p>
                We focus on practical, hands-on (BTW) training. Our experienced
                instructors will give you the skills needed to succeed.
              </p>
            </div>
          </div>
          <hr />

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/classroom1.png" width={44} height={44} alt="classroom" />
            </div>
            <div className="why-text">
              <h5>Spacious Classrooms & Computer Labs</h5>
              <p>
                Large classrooms and computer labs provide a comfortable learning
                environment.
              </p>
            </div>
          </div>
          <hr />

          <div className="why-item">
            <div className="why-icon">
              <Image src="/icons/classroom1.png" width={44} height={44} alt="tractor trailers" />
            </div>
            <div className="why-text">
              <h5>Modern Tractor-Trailers</h5>
              <p>
                Train using both modern tractor-trailers and advanced simulators
                that replicate real-world conditions.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE – TRUCK IMAGES STACKED EXACTLY LIKE YOUR EXAMPLE */}
        <aside className="why-right">

          <div className="truck-img">
            <Image src="/images/top_diagram.png" width={380} height={150} alt="diagram" />
          </div>

          <div className="truck-img">
            <Image src="/images/small_row.png" width={380} height={140} alt="small views" />
          </div>

          <div className="truck-img">
            <Image src="/images/middle_truck.png" width={380} height={160} alt="middle truck" />
          </div>

          <div className="truck-img">
            <Image src="/images/bottom_truck.png" width={380} height={160} alt="bottom truck" />
          </div>

        </aside>
      </div>
    </section>
  );
}
