import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">

        {/* LEFT COLUMN */}
        <div className="footer-col footer-contact">
          <Image
            src="/images/Picture1.png"
            width={70}
            height={70}
            alt="logo"
            className="footer-logo"
          />

          <h4>Administrative Office :</h4>
          <p>4106 Factoria Boulevard SE,<br />Suite 211, Bellevue, WA 98006.</p>

          <h4>Phone No :</h4>
          <p>1-206-788-7190</p>

          <h4>Email Id</h4>
          <p>info@mlscompanies.com</p>

          <div className="footer-social">
            <a href="https://www.facebook.com"><Image src="/icons/facebook.png" width={24} height={24} alt="facebook" /></a>
            <a href="https://www.twitter.com"><Image src="/icons/twitter.png" width={24} height={24} alt="twitter" /></a>
            <a href="https://www.instagram.com"><Image src="/icons/instagram.png" width={24} height={24} alt="insta" /></a>
            <a href="https://www.linkedin.com"><Image src="/icons/icons8-linkedin-30.png" width={24} height={24} alt="linkedin" /></a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>CDL (BTW) TRAINING</h4>
          <ul>
            <li>CDL (BTW) Training</li>
            <li>The Benefits of CDL (BTW) Training Schools</li>
            <li>Class A CDL License 101: Essential Information</li>
            <li>The Benefits of CDL (BTW) Training Schools</li>
            <li>Class A CDL (BTW) Training</li>
            <li>Class A CDL Requirements</li>
            <li>ELDT (BTW) Training</li>
            <li>CDL Classes</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>TRUCK DRIVING SCHOOL</h4>
          <ul>
            <li>Truck Driver Pay</li>
            <li>Truck Driver School Cost</li>
            <li>Tuition Reimbursement</li>
            <li>How to Become a Truck Driver</li>
            <li>Become a Truck Driver under 21</li>
            <li>Truck Driver Career Benefits</li>
            <li>Washington State</li>
            <li>Veteran’s (BTW) Training</li>
            <li>Team Truck Driving</li>
            <li>Escuela de trabajo para conductores de camiones</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>MLS Companies</h4>
          <ul>
            <li>Careers</li>
            <li>Career Services</li>
            <li>Job Placement</li>
            <li>Fleet (BTW) Training</li>
            <li>Frequently Asked Questions</li>
            <li>Graduate Testimonials</li>
            <li>Graduate Verification</li>
            <li>Student Records</li>
            <li>AIT Loan Payments</li>
            <li>Complaints</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MLS Companies. All rights reserved.</p>
      </div>
    </footer>
  );
}
