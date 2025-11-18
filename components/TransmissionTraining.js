import Image from "next/image";

export default function TransmissionTraining() {
  return (
    <section className="transmission-section">
      <div className="container trans-grid">
        
        {/* LEFT TEXT */}
        <div className="trans-left">
          <h3 className="trans-title">
            Stand Out with Automatic Transmission (BTW) Training
          </h3>
          <p className="trans-desc">
            Many modern tractor-trailers come equipped with automatic
            transmissions. MLS Companies offers (BTW) training specifically
            on these vehicles, ensuring you develop the skills most sought
            after by trucking companies.
          </p>
        </div>

        {/* RIGHT IMAGE (both trucks in one image) */}
        <div className="trans-right">
          <Image
            src="/images/Picture2.png"
            alt="Two trucks"
            width={480}
            height={250}
            className="trans-img"
            priority
          />
        </div>

      </div>
    </section>
  );
}
