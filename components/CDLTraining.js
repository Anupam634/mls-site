import Image from "next/image";

export default function CDLTraining() {
  return (
    <section className="cdl-section container">

      <h2 className="cdl-title">CDL (BTW) TRAINING</h2>

      <div className="cdl-flex">

        {/* LEFT SIDE CONTENT */}
        <div className="cdl-left">
          <p>
            Are you considering a job change? Have you ever imagined cruising the wide
            road in a powerful tractor-trailer? If so, becoming a professional truck driver
            could be a great fit for you!
          </p>

          <p>
            Obtaining a Commercial Driver's License (CDL) is essential for pursuing this
            fascinating career path. A CDL enables you to drive large commercial vehicles,
            such as tractor-trailers used for long-distance goods transportation.
          </p>

          <p>
            Choosing the Right CDL License: CDL categories vary based on vehicle size and
            weight. A Class A CDL is required to operate large trucks such as tractor trailers.
            This license allows you to operate cars with a Gross Vehicle Weight Rating (GVWR)
            greater than 26,000 pounds and tow another vehicle weighing more than 10,000 pounds.
          </p>

          <h3 className="cdl-subtitle">
            MLS Companies will expedite your CDL application!
          </h3>

          <p>
            MLS Companies is a CDL (BTW) training industry leader, providing a complete
            Class A CDL program that will have you licensed and job-ready in about a month.
            Our professional teachers give in-depth knowledge and hands-on instruction to
            help you prepare for the CDL examinations.
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="cdl-right">

          <Image
            src="/images/truck1.png"
            alt="Truck 1"
            width={380}
            height={230}
            className="cdl-image"
          />

          <Image
            src="/images/truck2.png"
            alt="Truck 2"
            width={380}
            height={230}
            className="cdl-image"
          />

        </div>

      </div>
    </section>
  );
}
